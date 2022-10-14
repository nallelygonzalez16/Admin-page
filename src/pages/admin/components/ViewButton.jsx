
import { useState } from 'react';

import { Button, TextField, Dialog, DialogActions,
         DialogContent, DialogTitle } from '@mui/material'

import VisibilityIcon from '@mui/icons-material/Visibility';


export const ViewButton = ({ rowValues }) => {

  const [open, setOpen] = useState(false);

  const { name, category, 
          address, location, cellphone, 
          website, facebook, instagram, 
          whatsapp, foto } = rowValues;


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <VisibilityIcon className='ActionIcon' color="primary" onClick={ handleClickOpen }/>

      <Dialog open={ open } onClose={ handleClose }>
        <DialogTitle>Datos del local</DialogTitle>
        
        <DialogContent>
          
          <TextField
            margin="dense"
            id="name"
            label="Nombre"
            type="text"
            fullWidth
            variant="standard"
            value={ name }
            name="name"
            disabled
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
            name="category"
            disabled
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
            name="address"
            disabled
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
            name="location"
            disabled
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
            name="cellphone"
            disabled
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
            name="website"
            disabled
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
            name="facebook"
            disabled
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
            name="instagram"
            disabled
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
            name="whatsapp"
            disabled
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
            name="foto"
            disabled
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
