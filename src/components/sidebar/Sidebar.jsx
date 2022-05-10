import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {

    const navigate = useNavigate()

    const handleLogout = (e) => {
        e.preventDefault()

        localStorage.removeItem("user")
        navigate("/login")
    }

    return (
        <div className="sidebar">
        <div className="top">
            <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">SmartNew</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
            <p className="title">MAIN</p>
            <Link to="/" style={{ textDecoration: "none" }}>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Dashboard</span>
                </li>
            </Link>
            <p className="title">LISTS</p>
            <Link to="/users" style={{ textDecoration: "none" }}>
                <li>
                <PersonOutlineIcon className="icon" />
                <span>Usuarios</span>
                </li>
            </Link>
            <Link to="/contracts" style={{ textDecoration: "none" }}>
                <li>
                <StoreIcon className="icon" />
                <span>Contratos</span>
                </li>
            </Link>
            <p className="title">USUARIO</p>
            <li>
                <AccountCircleOutlinedIcon className="icon" />
                <span>Perfil</span>
            </li>
            <li onClick={handleLogout}>
                <ExitToAppIcon className="icon" />
                <span>Logout</span>
            </li>
            </ul>
        </div>
        </div>
    )
}

export default Sidebar