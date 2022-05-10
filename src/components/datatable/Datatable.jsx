import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore"
import { db } from "../../firebase"

function Datatable() {
    const [data, setData] = useState([]); 

    useEffect(() => {
      const unsub = onSnapshot(collection(db, "usuarios"), (snapShot) => {
        let list = []
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() })
        })
        setData(list)
      }, (error) => {
        console.log(error)
      })
  
      return () => {
        unsub()
      }
    }, [])
  
    const handleDelete = async (id) => {
      try {
        await deleteDoc(doc(db, "usuarios", id))
        setData(data.filter((item) => item.id !== id));
      } catch (error) {
        console.log(error)
      }
    };
  
    const actionColumn = [
      {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="cellAction">
              <Link to="/users/test" style={{ textDecoration: "none" }}>
                <div className="viewButton">Ver</div>
              </Link>
              <div
                className="deleteButton"
                onClick={() => handleDelete(params.row.id)}
              >
                Deletar
              </div>
            </div>
          );
        },
      },
    ];

    return (
      <div className="datatable">
        <div className="datatableTitle">
            Adicionar Novo Usuario
            <Link to="/users/new" className="link">
            Adicionar Novo
            </Link>
        </div>
        <DataGrid
            className="datagrid"
            rows={data}
            columns={userColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
        />
      </div>
    )
}

export default Datatable