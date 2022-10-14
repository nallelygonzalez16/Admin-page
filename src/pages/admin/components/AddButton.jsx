

import { useState } from 'react';

import { Button, TextField, Dialog, DialogActions,
  DialogContent, DialogTitle } from '@mui/material'

import { useForm } from '../../hooks/useForm'

import { addItem } from '../helpers/addItem'

export const AddButton = () => {
  const [open, setOpen] = useState(false);

  const { formState, onInputChange, onResetForm } = useForm({
    id: 0,
    name: "",
    category: "",
    address: "",
    location: "",
    cellphone: "",
    website: "",
    facebook: "",
    instagram: "",
    whatsapp: "",
    foto: ""
  });

  const { name, category, 
          address, location, cellphone, 
          website, facebook, instagram, 
          whatsapp, foto } = formState;


  const handleClickOpen = () => {
    setOpen( true );
  };

  const handleClose = () => {
    setOpen( false );
    onResetForm();
  };

  const onAddSubmit = () => {
    addItem( formState );

    setOpen( false );
  }

  return (
    <>
      <Button variant="outlined" onClick={ handleClickOpen }>Agregar</Button>

      <Dialog open={ open } onClose={ handleClose }>
        <DialogTitle>Agregar</DialogTitle>
        
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre"
            type="text"
            fullWidth
            variant="standard"
            value={ name }
            onChange={ onInputChange }
            name="name"
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Categoría"
            type="text"
            fullWidth
            variant="standard"
            value={ category }
            onChange={ onInputChange }
            name="category"
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Dirección"
            type="text"
            fullWidth
            variant="standard"
            value={ address }
            onChange={ onInputChange }
            name="address"
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Localización"
            type="text"
            fullWidth
            variant="standard"
            value={ location }
            onChange={ onInputChange }
            name="location"
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Teléfono celular"
            type="tel"
            fullWidth
            variant="standard"
            value={ cellphone }
            onChange={ onInputChange }
            name="cellphone"
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Sitio WEB"
            type="url"
            fullWidth
            variant="standard"
            value={ website }
            onChange={ onInputChange }
            name="website"
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Facebook"
            type="url"
            fullWidth
            variant="standard"
            value={ facebook }
            onChange={ onInputChange }
            name="facebook"
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Instagram"
            type="url"
            fullWidth
            variant="standard"
            value={ instagram }
            onChange={ onInputChange }
            name="instagram"
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="WhatsApp"
            type="tel"
            fullWidth
            variant="standard"
            value={ whatsapp }
            onChange={ onInputChange }
            name="whatsapp"
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Foto"
            type="url"
            fullWidth
            variant="standard"
            value={ foto }
            onChange={ onInputChange }
            name="foto"
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={ handleClose }>Cancel</Button>
          <Button color="success" onClick={ onAddSubmit }>Agregar</Button>
        </DialogActions>
      </Dialog>
    </>
  )  
}
