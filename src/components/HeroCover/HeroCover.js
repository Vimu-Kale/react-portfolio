import { Typography } from '@mui/material';
import React from 'react';
import Typical from "react-typical";
import "./HeroCover.css"


function HeroCover() {

    return (
        <>
            <div className='hero-container'>
                <div className='section-one'>
                    <div className="headline">
                        <Typography variant='h2' className="animate__animated animate__wobble h-1">Hey,👋</Typography>
                        <Typography variant='h2' className='h-1'>I'm Vimu Kale</Typography>
                        <Typography variant='h2' className='h-1'>I'm a {' '}
                            <span className='typer'>
                                <Typical
                                    loop={1}
                                    wrapper="b"
                                    steps={
                                        ['Tech Enthusiast', 1000, 'Web Developer', 1000]
                                    }
                                />
                            </span>

                        </Typography>
                    </div>

                </div>
                <div className='section-two'>
                    <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_5h3lsf0r.json" background="transparent" speed={1} loop autoPlay />

                    {/* <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_ztkxcqfv.json" background="transparent" speed={1} loop autoPlay /> */}
                </div>
            </div>
        </>
    )
}

export default HeroCover