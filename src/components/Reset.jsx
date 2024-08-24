import { useState } from "react"

export function Reset() {
    const [viewPassword, setViewPassword] = useState(false)

    const handleReset = async(e) => {

        try {
            await axios.post(`${API}/user/forgotPassword`)
        } catch (error) {
            console.error("Error while resetting the password", error)
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
                </form>
            </div>
        </div>
    )
}