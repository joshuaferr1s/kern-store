import React from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

import useStyles from './styles';

const CamperDialog = ({ camper }) => {
  const classes = useStyles();
  const open = useStoreState(state => state.camperDialog.open);
  const setOpen = useStoreActions(actions => actions.camperDialog.setOpen);
  const [ah1, setAh1] = React.useState('');
  const [ah2, setAh2] = React.useState('');
  const [ah3, setAh3] = React.useState('');

  return (
    <Dialog fullScreen open={open} onClose={() => setOpen(false)}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => setOpen(false)} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6">
            {camper.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container justify="center">
          <Grid item xs={12} sm={6}>
            <Grid container>
              <Grid item xs={12} className={classes.topMargin}>
                <Typography variant="h6" className={classes.centerText}>Camper Information</Typography>
              </Grid>
              <Grid item xs={12} className={classes.camperGrid}>
                <Typography className={classes.camperInfoTitle}>Village: </Typography>
                <Typography className={classes.camperInfo}>{camper.program}</Typography>
              </Grid>
              <Grid item xs={12} className={classes.camperGrid}>
                <Typography className={classes.camperInfoTitle}>Cabin: </Typography>
                <Typography className={classes.camperInfo}>{camper.bunk}</Typography>
              </Grid>
              <Grid item xs={12} className={classes.camperGrid}>
                <Typography className={classes.camperInfoTitle}>Balance: </Typography>
                <Typography className={classes.camperInfo}>${(camper.balance || 0).toFixed(2)}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container>
              <Grid item xs={12} className={classes.topMargin}>
                <Typography variant="h6" className={classes.centerText}>Activity Hours</Typography>
              </Grid>
              <Grid item xs={12} className={classes.topMargin}>
                <Container>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="activity-hour-1">Activity Hour 1</InputLabel>
                    <Select
                      labelId="activity-hour-1"
                      value={ah1}
                      onChange={e => setAh1(e.target.value)}
                    >
                      <MenuItem value="Swimming">Swimming</MenuItem>
                      <MenuItem value="Climbing">Climbing</MenuItem>
                      <MenuItem value="Arts and Crafts">Arts and Crafts</MenuItem>
                    </Select>
                  </FormControl>
                </Container>
              </Grid>
              <Grid item xs={12} className={classes.topMargin}>
                <Container>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="activity-hour-2">Activity Hour 2</InputLabel>
                    <Select
                      labelId="activity-hour-2"
                      value={ah2}
                      onChange={e => setAh2(e.target.value)}
                    >
                      <MenuItem value="Swimming">Swimming</MenuItem>
                      <MenuItem value="Climbing">Climbing</MenuItem>
                      <MenuItem value="Arts and Crafts">Arts and Crafts</MenuItem>
                    </Select>
                  </FormControl>
                </Container>
              </Grid>
              <Grid item xs={12} className={classes.topMargin}>
                <Container>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="activity-hour-3">Activity Hour 3</InputLabel>
                    <Select
                      labelId="activity-hour-3"
                      value={ah3}
                      onChange={e => setAh3(e.target.value)}
                    >
                      <MenuItem value="Swimming">Swimming</MenuItem>
                      <MenuItem value="Climbing">Climbing</MenuItem>
                      <MenuItem value="Arts and Crafts">Arts and Crafts</MenuItem>
                    </Select>
                  </FormControl>
                </Container>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" className={classes.button}>Canteen</Button>
          </Grid>
        </Grid>
      </Container>
    </Dialog>
  );
};

export default CamperDialog;
