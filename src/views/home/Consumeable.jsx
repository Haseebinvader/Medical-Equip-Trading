import { Box,  Grid, Typography } from "@mui/material"
import { ConsumeableData, Images } from "../../Data"
import { Link } from "react-router-dom";
import './style.css'
const Consumeable = () => {
    return (
        <Grid container sx={{ backgroundColor: '#F8F5F4', pt: '6rem', minHeight: '100vh', alignItems: 'center' }}>
            <Grid item xs={12}>
                <Typography variant="h4" sx={{ fontWeight: '600', textAlign: 'center' }}>{ConsumeableData.Consumeable_Heading}</Typography>
            </Grid>
            <Box sx={{ width: '8rem', height: '2.5px', backgroundColor: 'orange', margin: '8px auto', textAlign: 'center' }} ></Box>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', px: { xs: 2, sm: 4, md: 15 }, py: { xs: 2, sm: 4, md: 6 }, ml: '3rem' }}>
                <Grid item xs={12} sm={6} md={4}>
                    <div className="card">
                        <div className="card-content">
                            <img src={Images.consumable1} alt="" className="card-img" />
                            <h1 className="card-title">{ConsumeableData.Card1_Heading}</h1>
                            <div className="card-body">
                                <p className="card-price">{ConsumeableData.Card1_Description}</p>
                            </div>
                            <Link to='/Services'>
                                <div className="card-footer">
                                    <button className="btn btn-border">Learn More</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <div className="card">
                        <div className="card-content">
                            <img src={Images.consumable2} alt="" className="card-img" />
                            <h1 className="card-title">{ConsumeableData.Card2_Heading}</h1>
                            <div className="card-body">
                                <p className="card-price">{ConsumeableData.Card2_Description}</p>
                            </div>
                            <Link to='/Services'>
                                <div className="card-footer">
                                    <button className="btn btn-border">Learn More</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <div className="card">
                        <div className="card-content">
                            <img src={Images.consumable3} alt="" className="card-img" />
                            <h1 className="card-title">{ConsumeableData.Card3_Heading}</h1>
                            <div className="card-body">
                                <p className="card-price">{ConsumeableData.Card3_Description}</p>
                            </div>
                            <Link to='/Services'>
                                <div className="card-footer">
                                    <button className="btn btn-border">Learn More</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Consumeable;
