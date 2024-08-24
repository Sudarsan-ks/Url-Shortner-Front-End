import { useState } from "react"

export function Reset() {
    const [viewPassword, setViewPassword] = useState(false)

    const handleReset = (e)=>{
        console.log(e)
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