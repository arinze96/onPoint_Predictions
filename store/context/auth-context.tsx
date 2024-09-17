import { useStorageState } from "@/hooks/useSecureStorage";
import { createContext, ReactNode, useContext } from "react";

type UserProps = UserInfo | null | undefined;

interface AuthContextType {
  user: UserProps;
  token: string | undefined;
  authenticate: (token: string, user: UserProps) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  token: "",
  authenticate: () => {},
  logout: () => {},
});

// This hook can be used to access the user info.
export function useAuth() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useAuth must be wrapped in a <AuthProvider />");
    }
  }

  return value;
}

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [[_, session], setSession] = useStorageState("_authState");

  const value = {
    user: session?.user,
    token: session?.token,
    authenticate: (token: string | undefined, user: UserProps) => {
      setSession({ token, user });
    },
    logout: () => {
      setSession(null);
    },
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
