import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function TopBar() {

    return (
        <>
            <AppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        <Link className='link-logo' to='/'>Авто сервис</Link>
                    </Typography>
                    <Button color="inherit">Войти</Button>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    )
}