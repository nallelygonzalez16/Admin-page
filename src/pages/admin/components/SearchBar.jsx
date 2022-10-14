

import { InputBase, Divider, IconButton, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';


export const SearchBar = () => {



  return (
    <Paper
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, ml:4 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar producto"
        inputProps={{ 'aria-label': 'Buscar producto' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )

}
