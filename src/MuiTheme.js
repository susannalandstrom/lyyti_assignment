import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    root: {},
    palette: {
        primary: {
            main: '#222222'
        },
        secondary: {
            main: '#93c377'
        },
        error: {
            main: '#a91107'
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
        },
        h3: {
            fontSize: '1.1em',
            fontWeight: 'bold',
            marginBottom: '5px'
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
        },
        MuiFormControl: {
            root: {
                margin: '10px'
            }
        },
        MuiFormLabel: {
            root: {
                margin: '10px'
            }
        },
        MuiFormControlLabel: {
            root: {
                margin: '10px',
                marginLeft: '10px',
            }
        },
        MuiCard: {
            root: {
                margin: '10px',
                borderRadius: '5px',
                boxShadow: '0px 0px 10px 0px #9191914d'
            }
        },
        MuiCardHeader: {
            root: {
                padding: '16px 16px 5px 16px'
            },
            title: {
                fontSize: '1.1em', 
                fontWeight: 'bold',
            }
        },
        MuiCardContent: {
            root: {
                padding: '0 16px 16px 16px'
            }
        },
        MuiButton: {
            root: {
                color: 'white',
                backgroundColor: 'rgb(60, 12, 88)',
                '&:hover': {
                    backgroundColor: '#93c377'
                },
                '&$disabled': {
                    color: '#d4d4d4',
                    backgroundColor: '#848484'
                }
            },
            text: {
                padding: '15px 20px',
                fontWeight: 'bold',
                fontSize: '1.1em'
            }
        }
    }
})

export default theme