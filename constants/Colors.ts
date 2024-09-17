const colors = {
  primary: {
    main: "#060a2b",
    offset: "#35AC7E",
    offset_light: "#246a69",
    offset_lighter: "#399970",
    offset_dark: "#076969",
    offset_night: "#19615f",
    offset_main: "#198a90",
    offset_one: "#47a4a9 ",
    offset_yellow: "#fec55b",
    10: "#fff",
    1000: "#000",
    1650: "#fff",
  },

  gray: {
    50: "#F3F3F3",
    100: "#e7e8e7",
    200: "#c4c5c3",
    300: "#a0a29f",
    400: "#787a76",
    500: "#646663",
    600: "#50524f",
    700: "#3c3d3b",
    800: "#282927",
    900: "#141414",
    1000: "#000",
    1100: "rgba(0, 0, 0, 0.2)",
  },
  alerts: {
    pending: "#e89913",
    success: "#32dd5d",
    success_dark: "green",
    paleSuccess: "#1ce9ab",
    palerSuccess: "#d1faee",
    error: "#ff0000",
    light_error: "#ff6666",
  },
};

const {  gray, primary, alerts } = colors;

export { gray, primary, alerts };
export default colors;

