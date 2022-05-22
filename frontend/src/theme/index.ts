interface IColors {
    primary: string;
    secondary: string;
    body: string;
    body2: string;
    header: string;
    header2: string;
}

interface IColorsHash {
    [color: string]: string;
}

interface IFontsHash {
    [font: string]: string;
}

export interface ITheme {
    colors: IColorsHash;
    fonts: IFontsHash;
}

const theme: ITheme = {
    colors: {
        primary: "#006AFF",
        secondary: "#00B2FF",
        body: "#F1F6FE",
        light: "#FFFFFF",
        lightred: "#f28482",
        red: "#e63946",
    },
    fonts: {
        header: "Calibri",
        body: "Calibri",
        body2: "Calibri",
    },
};

export default theme;
