import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { EquipmentsData } from "../../Data"
import { Images } from "../../Data"
import { Link } from "react-router-dom";

const Equipments = () => {
    return (
        <Grid container sx={{ backgroundColor: '#F8F5F4', pt: '6rem', minHeight: '100vh', alignItems: 'center' }}>
            <Grid item xs={12}>
                <Typography variant="h4" sx={{ fontWeight: '600', textAlign: 'center' }}>{EquipmentsData.Heading}</Typography>
            </Grid>
            <Box sx={{ width: '8rem', height: '2.5px', backgroundColor: 'orange', margin: '8px 0', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }} ></Box>
            <Grid container sx={{ gap: '4rem', justifyContent: 'center', px: { xs: 2, sm: 4, md: 30 }, py: { xs: 2, sm: 4, md: 6 } }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia component="img" alt="Monitor" height="250" image={Images.monitor} />
                        <CardContent>
                            <Typography gutterBottom variant="h6" sx={{ fontWeight: '600' }}>{EquipmentsData.Monitor_Headline}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {EquipmentsData.Monitor_Description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to='/Services'>
                                <Button size="small" variant="contained" color='success'>LEARN MORE</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia component="img" alt="ECG" height="250" image={Images.ecg} />
                        <CardContent>
                            <Typography gutterBottom variant="h6" sx={{ fontWeight: '600' }}>{EquipmentsData.Ecg_Headline}</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ pt: '2rem' }}>
                                {EquipmentsData.Ecg_Description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                                <Button size="small" variant="contained" color='success'>LEARN MORE</Button>
                            <Link to='/Services'>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Equipments;
