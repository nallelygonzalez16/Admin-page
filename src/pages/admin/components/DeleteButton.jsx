

import { useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Dialog, DialogActions, DialogContent,
         DialogContentText, DialogTitle, useMediaQuery } from '@mui/material'

import { deleteElement } from '../helpers/deleteElement'

import { useTheme } from '@mui/material/styles';


export const DeleteButton = ({ rowValues }) => {

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onDeleteElement = () => {
    const { id } = rowValues;

    deleteElement(id);
    
    setOpen(false);
  }

  return (
    <>
      <DeleteIcon className='ActionIcon' color="error" onClick={ handleClickOpen }/>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Cuidado"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Está seguro de que desea eliminar este lugar?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus color='error' onClick={handleClose}>
            No
          </Button>
          <Button onClick={ onDeleteElement } autoFocus>
            Sí
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
