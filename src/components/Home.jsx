import { useState } from "react"
import { Sidebar } from "./Sidebar"
import axios from "axios"
import { API } from "../../global"
import { useNavigate } from "react-router-dom"

export function Home() {

    const [showSidebar, setShowSidebar] = useState(false)
    const [urlorginal, setUrlOrginal] = useState("")
    const [url, setUrl] = useState("")
    const [short, setShort] = useState(false)
    const navigate = useNavigate()
    const token = localStorage.getItem("Token")

    const handleGenrate = async (e) => {
        e.preventDefault()
        const originalUrl = urlorginal
        try {
            const response = await axios.post(`${API}/url/originalUrl`, { originalUrl }, {
                headers: {
                    Authorization: token
                }
            })
            setUrl(response.data.shortUrl)
            setShort(true)
        } catch (error) {
            console.error("Error on creating url", error)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("Token")
        localStorage.clear()
        navigate('/')
    }

    return (
        <div className="home">
            <div className="navbar">
                <i className="fa fa-sliders sidebarIcon" aria-hidden="true" onClick={() => setShowSidebar(!showSidebar)} ></i>
                <span onClick={handleLogout} ><i className="fas fa-sign-out-alt"></i> LogOut</span>
            </div>
            {
                showSidebar ? <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} /> : null
            }

            <div className={`urlShortener ${showSidebar ? "withSidebar" : ""}`}>
                <div className="url-page">
                    <div className="url-head">
                        <h2>CREATE SHORT URL</h2>
                    </div>
                    <div className="urlOriginal-input">
                        <label htmlFor="url"><b>ORIGINAL URL:</b></label>
                        <input type="text" name="originalUrl" value={urlorginal} placeholder="Paste you url here..." onChange={(e) => setUrlOrginal(e.target.value)} />
                        <button type="submit" onClick={handleGenrate} >Generate</button>
                    </div>
                    <div className="urlShort">
                        {short && (
                            <a href={`/redirect/${url}`} target="_blank" rel="noopener noreferrer">
                                {url}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}


