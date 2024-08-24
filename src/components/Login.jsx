import axios from "axios"
import { useNavigate } from "react-router-dom"
import { API } from "../../global"
import { useState } from "react"

export function Login() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        localStorage.removeItem("Token")
        const email = event.target.email.value
        const password = event.target.password.value
        const loginUser = {
            email,
            password
        }
        try {
            const response = await axios.post(`${API}/user/login`, loginUser)
            localStorage.setItem("User", JSON.stringify(response.data.user));
            localStorage.setItem("Token", JSON.stringify(response.data.token));
            alert("Login Successfully")
            navigate("/home")
        } catch (error) {
            console.error("Invalid Credential")
            alert("Invalid Credential")
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <div className="login">
            <div className="login-page">
                <h2 className="login-head">LOGIN</h2>
                <form onSubmit={handleSubmit} >
                    <label htmlFor="email" ><b>Email</b></label><br />
                    <input type="text" name="email" placeholder="Email..." required /><br />
                    <label htmlFor="password" ><b>Password</b></label><br />
                    <input type="password" name="password" placeholder="Password..." required /><br />
                    <div className="login-forgot">
                        <p onClick={() => navigate("/forgot")} >Forgot Password ?</p>
                    </div>
                    <div className="login-button">
                        <button type="submit" className="login-submit" disabled={loading} >{loading ? "Logging In" : "Login"}</button>
                    </div>
                    <div className="Login-Register">
                        <p onClick={() => navigate('/register')} >Register ?</p>
                    </div>
                </form>
            </div>
            <div className="login-content">
                <span><b>Your privacy is important to us. We are committed to safeguarding your personal information and ensuring it is collected, used, and stored in a secure manner. We only collect data that is necessary for providing our services and enhancing your experience. Your information will not be shared with third parties without your explicit consent, except where required by law. We employ industry-standard security measures to protect your data from unauthorized access.</b></span>
            </div>
        </div>
    )
}
