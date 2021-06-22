import { createMuiTheme } from '@material-ui/core/styles'

const violet = '#293E6A'
const gothic = '#719195'
export default createMuiTheme({
  palette: {
    common: {},
    primary: {
      main: `${violet}`
    },
    secondary: {
      main: `${gothic}`
    }
  },
  typography: {
    h3: {
      fontWeight: 300
    }
  }
})
