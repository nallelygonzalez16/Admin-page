

import { useContext } from 'react'

import { AppBar, Box, Toolbar, Typography,
         Button, IconButton } from '@mui/material'

import { UserContext } from '../../../context/UserContext';

export const NavBar = () => {

    const { setLogedIn } = useContext(UserContext);

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Pagina de administración
            </Typography>
            <Button color="inherit" onClick={() => setLogedIn(false)}>LogOut</Button>
            </Toolbar>
        </AppBar>
        </Box>
    )
}

