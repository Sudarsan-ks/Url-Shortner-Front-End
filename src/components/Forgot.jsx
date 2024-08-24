import axios from "axios"
import { API } from "../../global"

export function Forgot() {
    const handleForgot = async (event) => {
        event.preventDefault()
        const email = event.target.email.value
        try {
            await axios.post(`${API}/user/forgotPassword`, {email})
            alert("Please your email for reset link")
        } catch (error) {
            console.error("Error while send forgot email", error)
        }
    }
    return (
        <div className="forgot">
            <div className="forgot-page">
                <h2 className="forgot-head">FORGOT PASSWORD</h2>
                <form onSubmit={handleForgot}>
                    <label htmlFor="email"><b>Email:</b></label><br />
                    <input type="text" name="email" required />
                    <div className="forgot-btn">
                        <button type="submit" className="forgot-submit">Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
}