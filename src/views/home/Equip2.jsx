import { Box, Grid, Typography } from "@mui/material"
import { EquipData, Images } from "../../Data"
import { Link } from "react-router-dom";
import './style.css'
const Equip2 = () => {
    return (
        <Grid container sx={{ backgroundColor: '#EAEAEA', pt: '6rem', minHeight: '100vh', alignItems: 'center' }}>
            <Grid item xs={12}>
                <Typography variant="h4" sx={{ fontWeight: '600', textAlign: 'center' }}>{EquipData.Equip_Heading}</Typography>
            </Grid>
            <Box sx={{ width: '8rem', height: '2.5px', backgroundColor: 'orange', margin: '8px auto', textAlign: 'center', mt: '1rem' }} ></Box>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', px: { xs: 2, sm: 4, md: 15 }, py: { xs: 2, sm: 4, md: 6 }, ml: '3rem' }}>
                <Grid item xs={12} sm={6} md={4}>
                    <div className="card">
                        <div className="card-content">
                            <img src={Images.equip1} alt="" className="card-img" />
                            <h1 className="card-title">{EquipData.Card1_Heading}</h1>
                            <div className="card-body">
                                <p className="card-price">{EquipData.Card1_Description}</p>
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
                            <img src={Images.equip2} alt="" className="card-img" />
                            <h1 className="card-title">{EquipData.Card2_Heading}</h1>
                            <div className="card-body">
                                <p className="card-price">{EquipData.Card2_Description}</p>
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
                            <img src={Images.equip3} alt="" className="card-img" />
                            <h1 className="card-title">{EquipData.Card3_Heading}</h1>
                            <div className="card-body">
                                <p className="card-price">{EquipData.Card3_Description}</p>
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

export default Equip2;
