import { Box, Grid, Hidden, Typography } from "@mui/material";
import { Images } from "../Data";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
const Navbar = () => {
    const [ismenu, setisMenu] = useState(false);

    const toggleMenu = () => {
        setisMenu(!ismenu)
    }

    const closeMenu = () => {
        setisMenu(false)
    }

    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center', padding: '1rem', pl: '8rem', pr: '8rem', zIndex: 10 }}>
            <Grid item sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center', gap: '10rem' }}>
                <Box sx={{ ml: '-2rem' }}>
                    <img src={Images.Logo} />
                </Box>
                <Hidden lgUp>
                    <Box sx={{ alignItems: 'center', pt: '1rem', color: '#fff' }}>{ismenu ? <CloseIcon sx={{ fontSize: '3rem' }} onClick={closeMenu} /> : <MenuIcon sx={{ fontSize: '3rem' }} onClick={toggleMenu} />}</Box>
                </Hidden>
            </Grid>
            <Grid item sx={{ display: 'flex', paddingTop: '2rem', color: '#fff' }}>

                {ismenu ? <Box sx={{
                    display: 'flex', flexDirection: 'column', gap: '2rem', width: ismenu ? '100vw' : 'auto', height: ismenu ? 'auto' : 0,
                    overflow: 'hidden', transition: 'height 0.3s', backgroundColor: '#F8F5F4', color: 'black',padding: '20px',ml: '-8rem', position: 'absolute'
                }}>
                    <Link to='/' style={{ textDecoration: 'none', color: 'red' }}>
                        <Typography variant="h6" sx={{ textAlign: 'left' }}>Home</Typography>
                        <Box sx={{ width: '8rem', height: '2.5px', backgroundColor: 'orange', margin: '8px 0', mt: '1rem' }} ></Box>
                    </Link>
                    <Link to='/Services' style={{ textDecoration: 'none', color: 'red' }}>
                        <Typography variant="h6" sx={{ textAlign: 'left' }}>Services</Typography>
                        <Box sx={{ width: '8rem', height: '2.5px', backgroundColor: 'orange', margin: '8px 0', mt: '1rem' }} ></Box>
                    </Link>
                    <Link to='/About' style={{ textDecoration: 'none', color: 'red' }}>
                        <Typography variant="h6" sx={{ textAlign: 'left' }}>About</Typography>
                        <Box sx={{ width: '8rem', height: '2.5px', backgroundColor: 'orange', margin: '8px 0', mt: '1rem' }} ></Box>
                    </Link>
                    <Link to='/Contact' style={{ textDecoration: 'none', color: 'red' }}>
                        <Typography variant="h6" sx={{ textAlign: 'left' }}>Contact</Typography>
                        <Box sx={{ width: '8rem', height: '2.5px', backgroundColor: 'orange', margin: '8px 0', mt: '1rem' }} ></Box>
                    </Link>
                </Box>
                    : <Hidden lgDown >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center', gap: '2rem', flexDirection: 'row' }}>
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <Typography variant="h6" sx={{ color: '#fff' }}>Home</Typography>
                            </Link>
                            <Link to='/Services' style={{ textDecoration: 'none' }}>
                                <Typography variant="h6" sx={{ color: '#fff' }}>Services</Typography>
                            </Link>
                            <Link to='/About' style={{ textDecoration: 'none' }}>
                                <Typography variant="h6" sx={{ color: '#fff' }}>About</Typography>
                            </Link>
                            <Link to='/Contact' style={{ textDecoration: 'none' }}>
                                <Typography variant="h6" sx={{ color: '#fff' }}>Contact</Typography>
                            </Link>
                        </Box>
                    </Hidden>
                }
            </Grid>
        </Grid>
    )
}

export default Navbar