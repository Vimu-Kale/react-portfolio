import React from 'react'
import Componente from './IconCloud/Componente'
import "./Skills.css";
function Skills() {
    return (
        <>



            <div className='skills-section'>
                <div className='section-one'>
                    <h1 className='headline1'>
                        SKILLS
                    </h1>
                    {/* <p>
                        I have been always facinated about web application development and i really wnated to take a deeper dive into it and always wanted to know more about it.
                    </p> */}
                </div>
                <div className='section-two'>
                    <Componente />
                </div>
            </div>


        </>
    )
}

export default Skills
