import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    marginTop: '20px',
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  imageContainer: {
    width: '40%',
  },
  panelContainerHalf: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  panelContainerFull: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    maxHeight: '500px',
    objectFit: 'cover',
  },
});
