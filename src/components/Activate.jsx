import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import axios from 'axios'
import { API } from '../../global'

export function Activate() {
    const navigate = useNavigate()
    const { width, height } = useWindowSize()

    const { token } = useParams()
    const handleActivate = async () => {
        await axios.get(`${API}/user/activate/${token}`)
    }
    handleActivate()
    return (
        <div className='activate' >
            <Confetti width={width} height={height} />
            <div className="activate-page">
                <h1><b>HI</b></h1>
                <span><b>"YOUR ACCOUNT HAS ACTIVATED"</b></span>
                <h3><b>THANK YOU</b></h3>
                <button onClick={() => navigate('/')} >Click "ME"</button>
            </div>

        </div>
    )
}


