export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "Usuario",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        )
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "phone",
      headerName: "Telefone",
      width: 100,
    },
    {
      field: "address",
      headerName: "Endereço",
      width: 160,
    },
  ]

  export const contractColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "1",
      headerName: "N Contrato",
      width: 110
    },
    {
      field: "2",
      headerName: "Contrante",
      width: 140
    },
    {
      field: "3",
      headerName: "Contratado",
      width: 130
    },
    {
      field: "4",
      headerName: "Data Inicial",
      width: 100
    },
    {
      field: "5",
      headerName: "Data Final",
      width: 100
    },
    {
      field: "6",
      headerName: "Tipo de Contrato",
      width: 100
    },
    {
      field: "7",
      headerName: "Status Contrato",
      width: 110
    },

  ]