import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, contractColumns } from "../../datatablesource";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

function Home() {

  const [user, setUser] = useState([])
  const [contract, setContract] = useState([])

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "usuarios"), (snapShot) => {
      let list = []
      snapShot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() })
      })
      setUser(list)
    }, (error) => {
      console.log(error)
    })

    return () => {
      unsub()
    }
  }, [])

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "contratos"), (snapShot) => {
      let list = []
      snapShot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() })
      })
      setContract(list)
    }, (error) => {
      console.log(error)
    })

    return () => {
      unsub()
    }
  }, [])

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Últimos usuarios</div>
          <DataGrid
            className="datagrid"
            rows={user}
            columns={userColumns}
            pageSize={9}
            rowsPerPageOptions={[2]}
          />
        </div>
        <div className="listContainer">
          <div className="listTitle">Últimos Contratos</div>
          <DataGrid
            className="datagrid"
            rows={contract}
            columns={contractColumns}
            pageSize={9}
            rowsPerPageOptions={[2]}
          />
        </div>
      </div>
    </div>
  )
}

export default Home