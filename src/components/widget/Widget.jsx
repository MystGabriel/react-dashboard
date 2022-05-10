import "./widget.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ArticleIcon from '@mui/icons-material/Article';
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "../../firebase"
import { Link } from "react-router-dom"
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

function Widget() {

    const [users, setUsers] = useState(null)
    const [contracts, setContracts] = useState(null)

    const [userDiff, setUserDiff] = useState(null)
    const [contractDiff, setContractDiff] = useState(null)
    let data

    useEffect(() => {
        const fetchData = async () => {
            const today = new Date()

            const usersLastMonth = new Date(new Date().getMonth(today.getMonth() - 1))
            const contractsLastMonth = new Date(new Date().getMonth(today.getMonth() - 1))

            const usersPrevMonth = new Date(new Date().getMonth(today.getMonth() - 2))
            const contractsPrevMonth = new Date(new Date().getMonth(today.getMonth() - 2))

            const usersLastMonthQuery = query(collection(db, "usuarios"), where("timeStamp", "<=", today), where("timeStamp", ">", usersLastMonth))
            const contractsLastMontQuery = query(collection(db, "contratos"), where("timeStamp", "<=", today), where("timeStamp", ">", contractsLastMonth))

            const usersPrevMonthQuery = query(collection(db, "usuarios"), where("timeStamp", "<=", usersLastMonth), where("timeStamp", ">", usersPrevMonth))
            const contractsPrevMonthQuery = query(collection(db, "contratos"), where("timeStamp", "<=", contractsLastMonth), where("timeStamp", ">", contractsPrevMonth))
            
            const usersLastMonthData = await getDocs(usersLastMonthQuery)
            const contractsLastMonthData = await getDocs(contractsLastMontQuery)

            const usersPrevMonthData = await getDocs(usersPrevMonthQuery)
            const contractsPrevMonthData = await getDocs(contractsPrevMonthQuery)

            setUsers(usersLastMonthData.docs.length)
            setContracts(contractsLastMonthData.docs.length)

            setUserDiff(((usersLastMonthData.docs.length - usersPrevMonthData.docs.length) / usersLastMonthData.docs.length) * 100)
            setContractDiff(((contractsLastMonthData.docs.length - contractsPrevMonthData.docs.length) / contractsLastMonthData.docs.length) * 100)
        }
        fetchData()
    }, [])

    return (
        <div className="dashboard-infos">
            <div className="dashboard-cards">
                <div className="card">
                    <div className="left">
                        <div className="title">USUARIOS</div>
                        <div className="counter">{users}</div>
                        <Link className="link" to="/users">Ver todos os usuarios</Link>
                    </div>
                    <div className="right">
                        <div className={`percentage ${userDiff < 0 ? "negative" : "positive"}`}>
                            {userDiff < 0 ? <KeyboardArrowDown/> : <KeyboardArrowUp/>}
                            {userDiff}%
                        </div>
                        <PersonOutlinedIcon
                            className="icon"
                            style={{
                            color: "crimson",
                            backgroundColor: "rgba(255, 0, 0, 0.2)",
                            }}
                        />
                    </div>
                </div>
                <div className="card">
                    <div className="left">
                        <div className="title">CONTRATOS</div>
                        <div className="counter">{contracts}</div>
                        <Link className="link" to="/contracts">Ver todos os contratos</Link>
                    </div>
                    <div className="right">
                        <div className={`percentage ${contractDiff < 0 ? "negative" : "positive"}`}>
                            {contractDiff < 0 ? <KeyboardArrowDown/> : <KeyboardArrowUp/>}
                            {contractDiff}%
                        </div>
                        <ArticleIcon
                            className="icon"
                            style={{
                            backgroundColor: "rgba(218, 165, 32, 0.2)",
                            color: "goldenrod",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Widget