import { Box, Grid, Typography } from "@mui/material"
import { EquipmentsData } from "../../Data"
import { Images } from "../../Data"
import { Link } from "react-router-dom";
import './style.css'

const Equipments = () => {
    return (
        <Grid container sx={{ backgroundColor: '#F8F5F4', pt: '6rem', minHeight: '100vh', alignItems: 'center' }}>
            <Grid item xs={12}>
                <Typography variant="h4" sx={{ fontWeight: '600', textAlign: 'center' }}>{EquipmentsData.Heading}</Typography>
            </Grid>
            <Box sx={{ width: '8rem', height: '2.5px', backgroundColor: 'orange', margin: '8px 0', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }} ></Box>
            <Grid container sx={{ gap: '4rem', justifyContent: 'center', px: { xs: 2, sm: 4, md: 30 }, py: { xs: 2, sm: 4, md: 6 } }}>
                <Grid item xs={12} sm={6} md={4}>
                    <div className="card">
                        <div className="card-content">
                            <img src={Images.monitor} alt="" className="card-img" />
                            <h1 className="card-title">{EquipmentsData.Monitor_Headline}</h1>
                            <div className="card-body">
                                <p className="card-price">{EquipmentsData.Monitor_Description}</p>
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
                            <img src={Images.ecg} alt="" className="card-img" />
                            <h1 className="card-title">{EquipmentsData.Ecg_Headline}</h1>
                            <div className="card-body">
                                <p className="card-price">{EquipmentsData.Ecg_Description}</p>
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

export default Equipments;
