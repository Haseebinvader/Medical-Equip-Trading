import { Box, Grid, Typography } from "@mui/material"
import { EquipmData, Images } from "../../Data"
import '../home/style.css'

const Equip = () => {
    return (
        <Grid container sx={{ backgroundColor: '#F8F5F4', pt: '6rem', width: '100%', pb: '40px' }}>
            <Grid item sx={{ width: '100%' }}>
                <Typography variant="h4" sx={{ fontWeight: '600', textAlign: 'center' }}>{EquipmData.Equip_Heading}</Typography>
            </Grid>
            <Box sx={{ width: '8rem', height: '2.5px', backgroundColor: 'orange', margin: '8px 0', textAlign: 'center', marginLeft: '43rem', mt: '1rem' }} ></Box>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-around', pt: '4rem', ml: '8rem' }} xs={4} md={8} lg={10}>
                <Grid item >
                    <div className="card">
                        <div className="card-content">
                            <img src={Images.service1} alt="" className="card-img" />
                            <h1 className="card-title">{EquipmData.Card1_Heading}</h1>
                            <div className="card-body">
                                <p className="card-price">{EquipmData.Card1_Description}</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item >
                    <div className="card">
                        <div className="card-content">
                            <img src={Images.service2} alt="" className="card-img" />
                            <h1 className="card-title">{EquipmData.Card2_Heading}</h1>
                            <div className="card-body">
                                <p className="card-price">{EquipmData.Card2_Description}</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item >
                    <div className="card">
                        <div className="card-content">
                            <img src={Images.service3} alt="" className="card-img" />
                            <h1 className="card-title">{EquipmData.Card3_Heading}</h1>
                            <div className="card-body">
                                <p className="card-price">{EquipmData.Card3_Description}</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item>
                    <div className="card">
                        <div className="card-content">
                            <img src={Images.service4} alt="" className="card-img" />
                            <h1 className="card-title">{EquipmData.Card4_Heading}</h1>
                            <div className="card-body">
                                <p className="card-price">{EquipmData.Card4_Description}</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item sx={{ mt: '2rem' }}>
                    <div className="card">
                        <div className="card-content">
                            <img src={Images.service5} alt="" className="card-img" />
                            <h1 className="card-title">{EquipmData.Card5_Heading}</h1>
                            <div className="card-body">
                                <p className="card-price">{EquipmData.Card5_Description}</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item sx={{ mt: '2rem' }}>
                    <div className="card">
                        <div className="card-content">
                            <img src={Images.service6} alt="" className="card-img" />
                            <h1 className="card-title">{EquipmData.Card6_Heading}</h1>
                            <div className="card-body">
                                <p className="card-price">{EquipmData.Card6_Description}</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item sx={{ mt: '2rem' }}>
                    <div className="card">
                        <div className="card-content">
                            <img src={Images.service7} alt="" className="card-img" />
                            <h1 className="card-title">{EquipmData.Card7_Heading}</h1>
                            <div className="card-body">
                                <p className="card-price">{EquipmData.Card7_Description}</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item sx={{ mt: '2rem' }}>
                    <div className="card">
                        <div className="card-content">
                            <img src={Images.service8} alt="" className="card-img" />
                            <h1 className="card-title">{EquipmData.Card8_Heading}</h1>
                            <div className="card-body">
                                <p className="card-price">{EquipmData.Card8_Description}</p>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Equip