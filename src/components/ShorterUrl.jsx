import axios from "axios"
import { useEffect, useState } from "react"
import { API } from "../../global"

export function ShortUrl() {
    const [short, setShort] = useState([])
    const token = localStorage.getItem("Token")
    const verifyToken = JSON.parse(token)
    useEffect(() => {
        const fetchShortUrl = async () => {
            try {
                const response = await axios.get(`${API}/url/get/shortUrl`, {
                    headers: {
                        Authorization: verifyToken
                    }
                })
                setShort(response.data)
            } catch (error) {
                console.log("Error while getting the shortUrl", error)
            }
        }
        fetchShortUrl()
    }, [])
    return (
        <div className="shorturl">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Total Url Created</th>
                        <th>Clicks</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        short.map((url) => {
                            return (
                                <tr key={url._id} >
                                    <td>{url.date}</td>
                                    <td><a href={`/redirect/${url.shortUrl}`}>{url.shortUrl}</a></td>
                                    <td>{url.clicks}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
