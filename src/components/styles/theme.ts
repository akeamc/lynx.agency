export interface Theme {
  colors: {
    primary: string;
    background: string;
  };
}

export const defaultTheme: Theme = {
  colors: {
    primary: "#335eea",
    background: "#f2eff2",
  },
};
