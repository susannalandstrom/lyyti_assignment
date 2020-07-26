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
            fontSize: '28px',
            fontWeight: 'bold',
            letterSpacing: '1.3px'
        },
        h2: {
            fontSize: '18px',
            fontWeight: 'bold',
            letterSpacing: '1.1px'
        },
        h3: {
            fontSize: '14px',
            fontWeight: 'bold',
            marginBottom: '5px'
        },
        body1: {
            fontSize: '12px'
        }
    },
    overrides: {
        MuiIconButton: {
            root: {
                color: 'white',
                padding: '8px',
                '&:hover': {
                    backgroundColor: '#9191914d'
                }
            },
        },
        MuiTooltip: {
            tooltip: {
                color: 'white',
                backgroundColor: '#9191914d',
                fontSize: '10px'
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
                marginLeft: '10px'
            }
        },
        MuiCard: {
            root: {
                margin: '10px',
                borderRadius: '5px',
                boxShadow: '0px 0px 10px 0px #9191914d',
                cursor: 'pointer',
                '&:hover': {
                    backgroundColor: '#eee'
                }
            }
        },
        MuiCardHeader: {
            root: {
                padding: '10px 10px 5px 10px'
            },
            title: {
                fontSize: '14px', 
                fontWeight: 'bold',
            }
        },
        MuiCardContent: {
            root: {
                padding: '0 10px 10px 10px'
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
                padding: '10px',
                fontWeight: 'bold'
            }
        }
    }
})

export default theme