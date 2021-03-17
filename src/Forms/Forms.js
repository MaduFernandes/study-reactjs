import React, { useState } from "react";

//imports material-ui
import {
  TextField,
  Grid,
  Paper,
  Button,
  DialogActions,
  DialogContentText,
  DialogTitle,
  DialogContent,
  Dialog,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Forms = (props) => {
  const classes = useStyles();
  const [isDisabled, setIsDisabled] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleSave = () => {
    console.log("Fui salvo");
    setIsDisabled(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <>
      <Dialog open={openModal} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">Atenção</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Deseja salvar este formulário ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Não
          </Button>
          <Button color="primary" onClick={handleSave}>
            Sim
          </Button>
        </DialogActions>
      </Dialog>
      <Grid
        container
        spacing={3}
        className={classes.root}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <form noValidate autoComplete="off">
              <TextField id="standard-basic" label="Nome" />
            </form>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenModal}
              disabled={isDisabled ? true : false}
            >
              Salvar
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Forms;
