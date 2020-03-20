import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  e404: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  text: {
    fontSize: '20vmin',
    textAlign: 'center',
    margin: 0,
  },
  image: {
    display: 'inline',
    width: '12vmin',
    height: '12vmin',
    padding: '1vmin',
    animation: '$spin 10s linear',
  },
  subtext: {
    textAlign: 'center',
    color: '#ccc',
  },
  link: {
    width: '50%',
    textAlign: 'center',
    margin: '0 auto',
    color: '#ccc',
    display: 'block',
    textDecoration: 'none',
    transition: 'color 0.3s ease-in-out',
    '&:hover': {
      color: '#00a',
    },
  },
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(359deg)',
    },
  },
});
