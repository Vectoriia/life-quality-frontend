import type { PaletteColorOptions } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    primaryDark?: PaletteColorOptions;
  }
  interface CommonColors {
    orange: string;
    blue: string;
    lightBlue: string;
    purple: string;
    green: string;
    grey: string;
    coralPink: string;
    turquoise: string;
  }

  interface TypeBackground {
    grey: string;
    toast: string;
    menuItem: string;
  }
}
declare module '@mui/material/styles' {
  interface TypographyVariants {
    body3: React.CSSProperties;
    body4: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3: React.CSSProperties;
    body4: React.CSSProperties;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
    body4: true;
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    delete: true;
  }
}
