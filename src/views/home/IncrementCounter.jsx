/* eslint-disable no-unreachable */
/* eslint-disable react/prop-types */
import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState, useRef } from "react";

const IncrementCounter = (props) => {
    const { targetValue, anotherValue, thirdValue } = props.propValues;
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    const componentRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const callback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const incrementInterval = setInterval(() => {
                        if (count < targetValue) {
                            setCount((prevCount) => {
                                return Math.min(prevCount + 1, targetValue);
                            });
                        }
                        if (count2 < anotherValue) {
                            setCount2((prevCount) => {
                                return Math.min(prevCount + 1, anotherValue);
                            });
                        }
                        if (count3 < thirdValue) {
                            setCount3((prevCount) => {
                                return Math.min(prevCount + 1, thirdValue);
                            });
                        }

                        if (count >= targetValue && count2 >= anotherValue && count3 >= thirdValue) {
                            clearInterval(incrementInterval);
                        }
                    }, 1);

                    return () => {
                        clearInterval(incrementInterval);
                    };

                    observer.unobserve(componentRef.current);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);
        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, [count, targetValue, count2, anotherValue, count3, thirdValue]);

    return (
        <div ref={componentRef}>
            <Grid container>
                <Grid item sx={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20rem', pl: '13rem', height: '15rem',
                    '@media (max-width: 600px)': { display: 'flex', flexDirection: 'column', height: '100%', textAlign: 'center', gap: '2rem', ml: '-12rem', },
                    '@media (max-width: 1200px)': { display: 'flex', height: '100%', textAlign: 'center', gap: '8rem', ml: '-5rem' }
                }}>
                    <Box>
                        <Typography variant="h2" sx={{ textAlign: 'center', fontWeight: '600', color: '#575250', '@media (max-width: 600px)': { fontSize: '2rem', } }}>{count} +</Typography>
                        <Typography sx={{ textAlign: 'center', color: '#575250' }}>Exclusive Products</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h2" sx={{ textAlign: 'center', fontWeight: '600', color: '#575250', '@media (max-width: 600px)': { fontSize: '2rem' } }}>{count2} +</Typography>
                        <Typography sx={{ textAlign: 'center', color: '#575250' }}>Years Of Experience</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h2" sx={{ textAlign: 'center', fontWeight: '600', color: '#575250', '@media (max-width: 600px)': { fontSize: '2rem', }, }}>{count3} +</Typography>
                        <Typography sx={{ textAlign: 'center', color: '#575250' }}>Suppliers / Distributors</Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default IncrementCounter;
