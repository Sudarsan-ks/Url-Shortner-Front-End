import React from 'react'
import image from '../assets/errorImage.jpg'
export function Error() {
    return (
        <div className='error' >
            <div className="error-page">
                <img src={image} alt="ERROR" />
            </div>
        </div>
    )
}


