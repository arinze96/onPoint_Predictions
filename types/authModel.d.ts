interface AuthModel {
  user: UserProp;
  token: string | undefined;
}

type UserInfo = {
  user_no: number;
  user_type: string;
  first_name: string;
  last_name: string;
  cellphone: string;
  profile_image: string | null;
  email: string;
  status: string;
  email_verified_at: boolean;
  cellphone_verified_at: boolean;
};

type UserProp = UserInfo | null | undefined;
