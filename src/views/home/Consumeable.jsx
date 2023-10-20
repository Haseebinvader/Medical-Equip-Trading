import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { ConsumeableData, Images } from "../../Data"
import { Link } from "react-router-dom";

const Consumeable = () => {
    return (
        <Grid container sx={{ backgroundColor: '#F8F5F4', pt: '6rem', minHeight: '100vh', alignItems: 'center' }}>
            <Grid item xs={12}>
                <Typography variant="h4" sx={{ fontWeight: '600', textAlign: 'center' }}>{ConsumeableData.Consumeable_Heading}</Typography>
            </Grid>
            <Box sx={{ width: '8rem', height: '2.5px', backgroundColor: 'orange', margin: '8px auto', textAlign: 'center' }} ></Box>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', px: { xs: 2, sm: 4, md: 15 }, py: { xs: 2, sm: 4, md: 6 }, ml: '3rem' }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia component="img" alt="Consumable 1" height="250" image={Images.consumable1} />
                        <CardContent>
                            <Typography gutterBottom variant="h6" sx={{ fontWeight: '600' }}>{ConsumeableData.Card1_Heading}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {ConsumeableData.Card1_Description}
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
                        <CardMedia component="img" alt="Consumable 2" height="250" image={Images.consumable2} />
                        <CardContent>
                            <Typography gutterBottom variant="h6" sx={{ fontWeight: '600' }}>{ConsumeableData.Card2_Heading}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {ConsumeableData.Card2_Description}
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
                        <CardMedia component="img" alt="Consumable 3" height="250" image={Images.consumable3} />
                        <CardContent>
                            <Typography gutterBottom variant="h6" sx={{ fontWeight: '600' }}>{ConsumeableData.Card3_Heading}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {ConsumeableData.Card3_Description}
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

export default Consumeable;
