import { stepLabelClasses, outlinedInputClasses } from '@mui/material';
import { createTheme } from '@mui/material/styles';

export const fontFamily =
  // eslint-disable-next-line max-len
  '"Circular Std", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "Inter", Inter';

export const theme = createTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 320,
      md: 1366,
      lg: 1440,
      xl: 1920,
    },
  },
  spacing: 2,
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          [`&.${outlinedInputClasses.root}`]: {
            padding: 0,
            borderRadius: '8px',
            border: '1px solid #98A2B3',
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
            '&:hover': {
              backgroundColor: '#fbfcfc',
            },
            '&.Mui-error': {
              border: '1px solid #DC2626',
            },
            '&.Mui-focused': {
              border: '1px solid #356AC3',
            },
            fieldset: {
              border: 'none',
              top: 0,
              legend: {
                display: 'none',
              },
            },
          },
          '& input::placeholder': {
            color: '#717782',
            opacity: 1,
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
          },
        },
        input: {
          [`&.${outlinedInputClasses.input}`]: {
            padding: '8px 12px',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            color: '#1C1B1F',
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        input: {
          [`&.${outlinedInputClasses.input}`]: {
            padding: '8px 12px',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            color: '#1C1B1F',
          },
        },
        popper: {
          zIndex: 1098,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          position: 'static',
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '20px',
          transform: 'translate(0px, 0px)',
          marginBottom: '6px',
          color: '#344054',
          '&.Mui-error': {
            color: '#344054',
          },
          '&.Mui-focused': {
            color: '#344054',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: 0,
          marginTop: '6px',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '20px',
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: fontFamily,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        contained: {
          backgroundColor: '#356AC3',
          color: '#fff',
          height: '35px',
          padding: '12px 16px',
          borderRadius: '8px',
          boxShadow: '0px 1px 4px 0px rgba(17, 46, 105, 0.07)',
          fontFamily: 'Inter',
          fontSize: '16px',
          fontWeight: 700,
          lineHeight: '120%',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#356AC3',
            boxShadow: '0px 4px 16px 0px rgba(17, 46, 105, 0.32)',
          },
          '&:active, &:focus': {
            backgroundColor: '#2B57A1',
            boxShadow: '0px 1px 4px 0px rgba(17, 46, 105, 0.07)',
          },
          '&:disabled': {
            backgroundColor: '#7B828A',
            color: '#EDEDED',
            boxShadow: '0px 1px 4px 0px rgba(17, 46, 105, 0.07)',
          },
        },
        outlined: {
          backgroundColor: '#fff',
          color: '#356AC3',
          height: '35px',
          padding: '12px 16px',
          borderRadius: '8px',
          border: '1px solid #356AC3',
          boxShadow: '0px 1px 4px 0px rgba(17, 46, 105, 0.07)',
          fontFamily: 'Inter',
          fontSize: '16px',
          fontWeight: 700,
          lineHeight: '120%',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#ECF5FD',
            boxShadow: '0px 4px 16px 0px rgba(64, 92, 149, 0.18)',
          },
          '&:active, &:focus': {
            backgroundColor: '#ECF5FD',
          },
          '&:disabled': {
            color: '#7B828A',
            border: '1px solid #7B828A',
          },
        },
        sizeSmall: {
          height: '35px',
          padding: '12px 16px',
        },
        sizeLarge: {
          height: '48px',
          padding: '12px 20px',
          '&:disabled': {
            boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
          },
        },
        text: {
          color: '#356AC3',
          backgroundColor: 'transparent',
          height: '35px',
          padding: '12px 16px',
          fontFamily: 'Inter',
          fontSize: '16px',
          fontWeight: 700,
          lineHeight: '120%',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'transparent',
            color: '#2B57A1',
          },
          '&:active, &:focus': {
            backgroundColor: 'transparent',
            color: '#547cbf',
          },
          '&:disabled': {
            backgroundColor: 'transparent',
            color: ' #7B828A',
          },
        },
      },
      variants: [
        {
          props: { variant: 'delete' },
          style: {
            color: '#E20000',
            backgroundColor: 'transparent',
            height: '35px',
            padding: '12px 16px',
            fontFamily: 'Inter',
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '120%',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'transparent',
              color: '#b30202',
            },
            '&:active, &:focus': {
              backgroundColor: 'transparent',
              color: '#e02b2b',
            },
            '&:disabled': {
              backgroundColor: 'transparent',
              color: '#7B828A',
            },
          },
        },
      ],
    },
    MuiCheckbox: {
      defaultProps: {
        disableRipple: true,
        disableFocusRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          padding: '0px',
          color: '#596274',
          '&.Mui-checked': {
            color: '#356AC3',
          },
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        disableRipple: true,
        disableFocusRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          padding: '0px',
          color: '#596274',
          '&.Mui-checked': {
            color: '#356AC3',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          padding: '7px 11px',
          backgroundColor: '#EEF3FF',
          borderRadius: '32px',
          border: '1px solid #7091EB',
          '&:hover': {
            backgroundColor: '#EEF3FF',
          },
        },
        label: {
          padding: '0px',
          color: '#000',
          fontFamily: 'Inter',
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '16px',
        },
        deleteIcon: {
          color: '#000',
          width: '16px',
          height: '16px',
          marginLeft: '8px',
          marginRight: '0px',
          '&:hover': {
            color: '#000',
          },
        },
      },
    },
    MuiStep: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          whiteSpace: 'nowrap',
          display: 'flex',
          justifyContent: 'center',
          fontFamily: 'Inter',
          color: '#1D2939',
          fontSize: '12px',
          fontWeight: 600,
          lineHeight: '16px',
          [`&.${stepLabelClasses.alternativeLabel}`]: {
            marginTop: '0px',
          },
          '&.Mui-active, &.Mui-completed': {
            fontWeight: 600,
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: 0,
          '@media (min-width:320px)': {
            padding: 0,
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#EAEEF3',
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          color: '#0072E5',
          fontWeight: 700,
          display: 'inline-flex',
          alignItems: 'center',
          '&.MuiTypography-body1 > svg': {
            marginTop: 2,
          },
          '& svg:last-child': {
            marginLeft: 2,
          },
        },
      },
    },
    MuiTab: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          '&[href]': {
            textDecorationLine: 'none',
          },
        },
        outlined: {
          display: 'block',
          borderColor: '#E5E8EC',
          'a&, button&': {
            '&:hover': {
              boxShadow: '1px 1px 20px 0 rgb(90 105 120 / 20%)',
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '8px 16px',
          borderColor: '#E5E8EC',
        },
        head: {
          color: '#20262D',
          fontWeight: 700,
        },
        body: {
          color: '#2F3A45',
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
          color: '#46505A',
          borderColor: '#E5E8EC',
          '&.Mui-selected': {
            borderColor: '#007FFF !important',
            color: '#007FFF',
            backgroundColor: '#F0F7FF',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        popper: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        },
        tooltip: {
          padding: '8px',
          background: '#535353',
          borderRadius: '4px',
          boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.30)',
          color: '#FFF',
          textAlign: 'center',
          fontFamily: 'Inter',
          fontSize: '15px',
          fontWeight: '400',
          lineHeight: '150%',
        },
        arrow: {
          color: '#000',
          background: 'transparent',
        },
        tooltipArrow: {
          padding: '4px 8px',
          background: '#000',
          borderRadius: '4px',
          boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.10)',
          fontSize: '12px',
          fontWeight: '500',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 32,
          height: 20,
          padding: 0,
          '& .MuiSwitch-switchBase': {
            '&.Mui-checked': {
              transform: 'translateX(11px)',
              color: '#fff',
            },
          },
        },
        switchBase: {
          height: 20,
          width: 20,
          padding: 0,
          color: '#fff',
          '&.Mui-checked + .MuiSwitch-track': {
            opacity: 1,
          },
        },
        track: {
          opacity: 1,
          borderRadius: 32,
          backgroundColor: '#BFC7CF',
        },
        thumb: {
          flexShrink: 0,
          width: '14px',
          height: '14px',
        },
      },
    },
  },
  palette: {
    mode: 'light',
    primary: {
      //TODO extend primary type
      '100': '#EEF3FF',
      '200': '#C2D2ED',
      '300': '#73A6F2',
      main: '#356AC3',
      light: '#618DF5',
    },
    divider: '#D3D3D3',
    common: {
      black: '#000',
      white: '#fff',
      blue: '#4C90F6',
      lightBlue: '#73A6F2',
      purple: '#AB6EF9',
      green: '#63A033',
      orange: '#FF8832',
      grey: '#7B828A',
      coralPink: '#F16D6D',
      turquoise: '#09B899',
    },
    text: {
      primary: '#1C1B1F',
      secondary: '#596274',
      disabled: '#717782',
    },
    grey: {
      '50': '#F0F0F0',
      '100': '#F2F2F7',
      '200': '#CECECE',
      '300': '#EDEDED',
      '400': '#98A2B3',
      '500': '#D9DBE0',
      '600': '#475467',
      '700': '#344054',
      '800': '#1D2939',
    },
    error: {
      main: '#DC2626',
      dark: '#E20000',
      contrastText: '#D30000',
    },
    success: {
      main: '#63A033',
    },
    warning: {
      main: '#F8F0C5',
    },
    background: {
      grey: '#F7F7F4',
      toast: '#535353',
      menuItem: '#EEF4F9',
    },
  },
  typography: {
    fontFamily: fontFamily,
    h1: {
      fontSize: '32px',
      fontWeight: 700,
      lineHeight: 'normal',
      color: '#1C1B1F',
    }, //h1
    h2: {
      fontSize: '26px',
      fontWeight: 700,
      lineHeight: '130%',
      color: '#1C1B1F',
    }, //h2
    h3: {
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: '150%',
      color: '#1C1B1F',
    }, //modal windows title
    h4: {
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: '150%',
      letterSpacing: 0,
      color: '#1C1B1F',
    }, //subheading
    h5: {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: 1.5,
      letterSpacing: 0,
      color: '#1C1B1F',
    }, //body bold
    h6: {
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: '16px',
      textTransform: 'uppercase',
      color: '#1C1B1F',
    }, //category header
    button: {
      fontSize: '16px',
      fontWeight: 700,
      letterSpacing: 0,
      lineHeight: '120%',
      color: '#1C1B1F',
    }, //button
    subtitle1: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '20px',
      color: '#1C1B1F',
    }, //card tag
    subtitle2: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '20px',
      color: '#1C1B1F',
    }, //form input label
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#1C1B1F',
    }, //body / body medium weight 500
    body2: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '24px',
      letterSpacing: 0,
      color: '#1C1B1F',
    }, // body M /body 3
    body3: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '150%',
      letterSpacing: 0,
      color: '#1C1B1F',
    }, //body small
    body4: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '20px',
      color: '#1C1B1F',
    }, //text sm/Medium
  },
  shadows: [
    'none',
    '0px 4px 16px 0px rgba(42, 70, 96, 0.10)', //header 1
    '0px 0px 0px 0px rgba(29, 60, 112, 0.02), 0px -2px 5px 0px rgba(29, 60, 112, 0.02), 0px -10px 10px 0px rgba(29, 60, 112, 0.02), 0px -22px 13px 0px rgba(29, 60, 112, 0.01), 0px -38px 15px 0px rgba(29, 60, 112, 0.00), 0px -60px 17px 0px rgba(29, 60, 112, 0.00)', //footer 2
    '0px 8px 16px 0px rgba(0, 0, 0, 0.30)', //toast, tooltip 3
    '0px 1px 16px 0px rgba(43, 56, 81, 0.05)', //search black common 4
    '0px 2px 20px 0px rgba(16, 24, 40, 0.08)', //search on home page 5
    '0px 4px 12px 0px rgba(27, 38, 79, 0.08)', //card, category 6
    '0px 4px 16px 0px rgba(112, 60, 22, 0.15)', //knowledge 7
    '0px 4px 16px 0px rgba(99, 160, 51, 0.30)', //people 8
    '0px 4px 16px 0px rgba(171, 110, 249, 0.30)', //organization 9
    '0px 4px 16px 0px rgba(76, 144, 246, 0.30)', // funding 10
    '0px 2px 8px 0px rgba(16, 24, 40, 0.10)', //relevance, rel context menu 11
    '0px 5px 12px 0px rgba(0, 0, 0, 0.20), 0px 0px 7px 0px rgba(0, 0, 0, 0.12), 0px -4px 6px 0px rgba(0, 0, 0, 0.07)', //funding creations bottom 12
    '0px 1px 2px 0px rgba(16, 24, 40, 0.05)', // Shadow/xs 13
    '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)', // profile dropdown /* Shadow lg */ 14
    '0px 4px 16px 0px rgba(241, 109, 109, 0.30)', // events 15
    '0px 4px 16px 0px rgba(9, 184, 153, 0.30)', // discussions 16
    '0px 0px 4px rgba(19, 46, 78, 0.10)', //edit avatar button 17
    '0px 4px 12px 0px rgba(27, 38, 79, 0.08), 0px 4px 24px 0px rgba(27, 38, 79, 0.15)', //card hover  18
    '0px 3px 5px -1px rgba(0,0,0,0.1),0px 6px 10px 0px rgba(0,0,0,0.07),0px 1px 18px 0px rgba(0,0,0,0.06)',
    '0px 4px 5px -2px rgba(0,0,0,0.1),0px 7px 10px 1px rgba(0,0,0,0.07),0px 2px 16px 1px rgba(0,0,0,0.06)',
    '0px 5px 5px -3px rgba(0,0,0,0.1),0px 8px 10px 1px rgba(0,0,0,0.07),0px 3px 14px 2px rgba(0,0,0,0.06)',
    '0px 5px 6px -3px rgba(0,0,0,0.1),0px 9px 12px 1px rgba(0,0,0,0.07),0px 3px 16px 2px rgba(0,0,0,0.06)',
    '0px 6px 6px -3px rgba(0,0,0,0.1),0px 10px 14px 1px rgba(0,0,0,0.07),0px 4px 18px 3px rgba(0,0,0,0.06)',
    '0px 6px 7px -4px rgba(0,0,0,0.1),0px 11px 15px 1px rgba(0,0,0,0.07),0px 4px 20px 3px rgba(0,0,0,0.06)',
  ],
});
