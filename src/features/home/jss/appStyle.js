import { container } from 'assets/jss/material-kit-pro-react.js';
import BackgroundImage from 'assets/img/background.jpg';

const appStyle = theme => ({
  '@global': {
    'html,body': {
      backgroundColor: theme.palette.background.default,
    },
  },
  page: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    background: 'url(' + BackgroundImage + ') 0% 0% / cover repeat !important',
  },
  container: {
    ...container,
    zIndex: 1,
  },
  children: {
    minHeight: '77vh',
  },
});

export default appStyle;
