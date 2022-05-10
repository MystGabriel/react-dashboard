import "./contracts.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatableCont from "../../components/datatable/DatatableCont"

function Contracts() {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DatatableCont/>
      </div>
    </div>
  )
}

export default Contracts