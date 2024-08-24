export function Forgot(e) {
    const handleForgot =()=>{
        console.log(e)
    }
    return (
        <div className="forgot">
            <div className="forgot-page">
                <h2 className="forgot-head">FORGOT PASSWORD</h2>
                <form onSubmit={handleForgot}>
                    <label htmlFor="email"><b>Email:</b></label><br />
                    <input type="text" name="email" />
                </form>
            </div>

        </div>
    )
}