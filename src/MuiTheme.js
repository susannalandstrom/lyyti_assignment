import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    root: {},
    palette: {
        primary: {
            main: '#643480'
        },
        secondary: {
            main: '#93c377'
        }
    },
    typography: {
        fontFamily: "Tahoma, Geneva, Cardo, Impact, Nobile",
        h1: {
            fontSize: '1.8em',
            fontWeight: 'bold',
            letterSpacing: '1.3px'
        },
        h2: {
            fontSize: '1.5em',
            fontWeight: 'bold',
            letterSpacing: '1.1px'
        }
    },
    overrides: {
        MuiIconButton: {
            root: {
                color: 'white',
                '&:hover': {
                    backgroundColor: '#9191914d'
                }
            },
        },
        MuiTooltip: {
            tooltip: {
                color: 'white',
                backgroundColor: '#9191914d',
                fontSize: '12px'
            }
        }
    }
})

export default theme