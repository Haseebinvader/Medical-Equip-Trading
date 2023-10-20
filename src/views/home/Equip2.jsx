import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { EquipData, Images } from "../../Data"
import { Link } from "react-router-dom";

const Equip2 = () => {
    return (
        <Grid container sx={{ backgroundColor: '#EAEAEA', pt: '6rem', minHeight: '100vh', alignItems: 'center' }}>
            <Grid item xs={12}>
                <Typography variant="h4" sx={{ fontWeight: '600', textAlign: 'center' }}>{EquipData.Equip_Heading}</Typography>
            </Grid>
            <Box sx={{ width: '8rem', height: '2.5px', backgroundColor: 'orange', margin: '8px auto', textAlign: 'center', mt: '1rem' }} ></Box>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', px: { xs: 2, sm: 4, md: 15 }, py: { xs: 2, sm: 4, md: 6 }, ml: '3rem' }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia component="img" alt="Equipment 1" height="250" image={Images.equip1} />
                        <CardContent>
                            <Typography gutterBottom variant="h6" sx={{ fontWeight: '600' }}>{EquipData.Card1_Heading}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {EquipData.Card1_Description}
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
                        <CardMedia component="img" alt="Equipment 2" height="250" image={Images.equip2} />
                        <CardContent>
                            <Typography gutterBottom variant="h6" sx={{ fontWeight: '600' }}> {EquipData.Card2_Heading}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {EquipData.Card2_Description}
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
                        <CardMedia component="img" alt="Equipment 3" height="250" image={Images.equip3} />
                        <CardContent>
                            <Typography gutterBottom variant="h6" sx={{ fontWeight: '600' }}> {EquipData.Card3_Heading}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {EquipData.Card3_Description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to='/Services'>
                                <Button size="small" variant="contained" color='success'>LEARN MORE</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Equip2;
