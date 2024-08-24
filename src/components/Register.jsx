import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { API } from "../../global"

export function Register() {
    const [viewPassword, setViewPassword] = useState(false)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const handleRegister = async (e) => {
        setLoading(true)
        e.preventDefault();
        localStorage.removeItem("Token")
        localStorage.clear()
        const email = e.target.email.value
        const firstName = e.target.firstName.value
        const lastName = e.target.lastName.value
        const password = e.target.password.value
        const registerData = {
            email,
            firstName,
            lastName,
            password
        }
        try {
            await axios.post(`${API}/user/register`, registerData)
            alert("REGISTERED SUCCESSFULLY")
            alert("We have send an EMAIL to activate your ACCOUNT")
        }
        catch (error) {
            console.error("Error in registering the user", error)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <div className="register">
            <div className="register-page">
                <h2 className="register-heading">REGISTER</h2>
                <form onSubmit={handleRegister}>
                    <label htmlFor="email"><b>Email:</b></label><br />
                    <input type="text" name="email" required /><br />
                    <label htmlFor="fristName"><b>Frist Name:</b></label><br />
                    <input type="text" name="firstName" required /><br />
                    <label htmlFor="lastName"><b>Last Name:</b></label><br />
                    <input type="text" name="lastName" required /><br />
                    <label htmlFor="password" ><b>Password:</b></label><br />
                    <div className="passwordIcon">
                        <input type={viewPassword ? "text" : "password"} name="password" required />
                        <i className="fa fa-eye iconPass" aria-hidden="true" onClick={() => setViewPassword(!viewPassword)} ></i>
                    </div>
                    <div className="register-btn">
                        <button type="submit" disabled={loading} className="register-submit">{loading ? "Registering..." : "Register"}</button>
                    </div>
                    <div className="register-signin">
                        <p onClick={() => navigate('/')} >sign in</p>
                    </div>
                </form>
            </div>
            <div className="register-content">
                <span><b>Your personal data is collected to create and manage your account, ensuring a secure and personalized experience. We value your privacy and are committed to protecting your information. Your data will be used solely for providing the services you request and will not be shared with third parties without your explicit consent, unless required by law. We employ advanced security measures to safeguard your information.</b></span>
            </div>
        </div>
    )
}
