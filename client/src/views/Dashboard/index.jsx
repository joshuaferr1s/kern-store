import React from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import useStyles from './styles';
import CamperDialog from '../../components/CamperDialog';

const Dashboard = () => {
  const classes = useStyles();
  const allCampers = useStoreState(state => state.campers.campers);
  const setOpen = useStoreActions(actions => actions.camperDialog.setOpen);
  const [campers, setCampers] = React.useState(allCampers);
  const [village, setVillage] = React.useState('');
  const villages = ['Theme Camp', 'Boots N Bits', 'TOK', 'Pioneer'];
  const [camperId, setCamperId] = React.useState({});

  React.useEffect(() => {
    setCampers(allCampers.filter(c => c.program.includes(village)));
  }, [village, allCampers]);

  const openCamperMenu = (camper) => {
    setCamperId(camper._id);
    setOpen(true);
  };

  return (
    <Container className={classes.root}>
      <Grid container justify="center">
        <Grid item>
          <Typography variant="h4">Camper Selection</Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel id="village-label">Village</InputLabel>
            <Select
              labelId="village-label"
              value={village}
              onChange={e => setVillage(e.target.value)}
            >
              <MenuItem value="">All Villages</MenuItem>
              {villages.map(v => <MenuItem value={v} key={v}>{v}</MenuItem>)}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={12} sm={6}>
          <List className={classes.list}>
            {campers.map(camper =>
              <ListItem button key={camper._id} onClick={() => openCamperMenu(camper)}>
                <ListItemText
                  primary={camper.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {camper.program}
                      </Typography>
                      {` - ${camper.bunk}`}
                    </React.Fragment>
                  }
                />
              </ListItem>)
            }
          </List>
        </Grid>
      </Grid>
      <CamperDialog camperId={camperId} />
    </Container>
  );
};

export default Dashboard;
