import { useNavigate } from "react-router-dom";

export function Sidebar({ showSidebar, setShowSidebar }) {

    const navigate = useNavigate()

    return (
        <div className="sidebar">
            <div className="sidebar-into" onClick={() => setShowSidebar(!showSidebar)} >X</div>
            <div className="sidebar-navigation">
                <span onClick={() => navigate("/home")}>HOME</span>
                <span onClick={() => navigate("/dashboard")}>DASHBOARD</span>
                <span onClick={() => navigate("/shorturl")}>SHORTER URL</span>
            </div>
        </div>
    );
}
