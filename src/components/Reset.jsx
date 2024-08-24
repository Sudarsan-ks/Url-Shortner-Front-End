import axios from "axios"
import { useState } from "react"
import { API } from "../../global"
import { useParams } from "react-router-dom"

export function Reset() {
    const [viewPassword, setViewPassword] = useState(false)
    const { token } = useParams()

    const handleReset = async (event) => {
        event.preventDefault()
        const password = event.target.password.value
        try {
            const response = await axios.post(`${API}/user/resetPassword/${token}`, { password })
            alert(response.data.message)
        } catch (error) {
            console.error("Error while reseting the password", error)
        }
    }
    return (
        <div className="reset">
            <div className="reset-page">
                <h2 className="reset-head">RESET PASSWORD</h2>
                <form onSubmit={handleReset}>
                    <label htmlFor="password"><b>NEW PASSOWORD:</b></label><br />
                    <div className="passwordIcon">
                        <input type={viewPassword ? "text" : "password"} name="password" />
                        <i className="fa fa-eye iconPassreset" aria-hidden="true" onClick={() => setViewPassword(!viewPassword)} ></i>
                    </div>
                    <div className="reset-btn">
                        <button type="submit" className="reset-submit">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    )
}