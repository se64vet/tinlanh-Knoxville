import React from 'react'
import './SectionDivider.style.css'

const SectionDivider = ({text}) => {
    return (
        <div className='section-divider mt-4 py-3 container-fluid text-center' style={{height: 'fit-content'}}>
            <span>{text}</span>
        </div>
    )
}

export default SectionDivider
