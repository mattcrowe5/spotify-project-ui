import tinycolor from 'tinycolor2';

const primary = '#000000';
const white = '#ffffff';
const secondary = '#1DB954';
const bg = '#ECECEC';
const destructive = '#E82209';
const warning = '#FFC260';
const success = '#3CD4A0';
const info = '#9013FE';
const text = '#4A4A4A';
const disableGray = '#cccccc';

const lightenRate = 15;
const darkenRate = 15;

export const defaultStyles = {
  palette: {
    primary: {
      main: primary,
      light: tinycolor(primary)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(primary)
        .darken(darkenRate)
        .toHexString()
    },
    secondary: {
      main: secondary,
      light: tinycolor(secondary)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(secondary)
        .darken(darkenRate)
        .toHexString(),
      contrastText: '#FFFFFF'
    },
    warning: {
      main: warning,
      light: tinycolor(warning)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(warning)
        .darken(darkenRate)
        .toHexString()
    },
    success: {
      main: success,
      light: tinycolor(success)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(success)
        .darken(darkenRate)
        .toHexString()
    },
    bg: {
      main: bg,
      light: tinycolor(bg)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(bg)
        .darken(darkenRate)
        .toHexString()
    },
    destructive: {
      main: destructive,
      light: tinycolor(destructive)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(destructive)
        .darken(darkenRate)
        .toHexString()
    },
    white: {
      main: white,
      light: tinycolor(white)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(white)
        .darken(darkenRate)
        .toHexString()
    },
    disableGray: {
      main: disableGray,
      light: tinycolor(disableGray)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(disableGray)
        .darken(darkenRate)
        .toHexString()
    },
    info: {
      main: info,
      light: tinycolor(info)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(info)
        .darken(darkenRate)
        .toHexString()
    },
    text: {
      primary: text,
      secondary: '#6E6E6E',
      hint: '#B9B9B9',
      light: tinycolor(text)
        .darken(lightenRate)
        .toHexString(),
      dark: tinycolor(text)
        .darken(darkenRate)
        .toHexString()
    },
    background: {
      default: '#F6F7FF',
      light: '#F3F5FF'
    }
  },
  customShadows: {
    widget:
      '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
    widgetDark:
      '0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
    widgetWide:
      '0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A'
  },
  typography: {
    fontFamily: [
      'proxima-nova',
      'proxima-nova-condensed',
      'proxima-nova-extra-condensed'
    ].join(','),
    h1: {
      fontSize: '3rem'
    },
    h2: {
      fontSize: '2rem'
    },
    h3: {
      fontSize: '1.64rem'
    },
    h4: {
      fontSize: '1.5rem'
    },
    h5: {
      fontSize: '1.285rem'
    },
    h6: {
      fontSize: '1.142rem'
    }
  },
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: '#4A4A4A1A'
      }
    },
    MuiCssBaseline: {
      '@global': {
        '@font-face': ['proxima-nova']
      }
    },
    MuiMenu: {
      paper: {
        boxShadow:
          '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A'
      }
    },
    MuiSelect: {
      icon: {
        color: '#B9B9B9'
      }
    },
    MuiTouchRipple: {
      child: {
        backgroundColor: 'white'
      }
    },
    MuiTableRow: {
      root: {
        height: 56
      }
    },
    MuiTableCell: {
      root: {
        borderBottom: '1px solid rgba(224, 224, 224, .5)'
      },
      head: {
        fontSize: '0.95rem'
      },
      body: {
        fontSize: '0.95rem'
      }
    }
  }
};

export const overrides = {
  shadows: Array(25).fill('none'),
  shape: {
    borderRadius: 4
  }
};
