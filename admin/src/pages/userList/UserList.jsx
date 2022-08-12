import './userList.css';
import { DataGrid } from "@mui/x-data-grid";
import { useState } from 'react';
import {userRows} from "../home/salesdata";
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@mui/icons-material';

function UserList() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }
  const columns = [
    { field: "id", headerName: "ID", width: 90 },

    { field: "user", 
      headerName: "User", 
      width: 300, 
      renderCell: (params) => {
        return(
          <div className="userListUser">
            <img src={params.row.avatar} alt="avatar" className="userListimg" />
            <div className="userListUserInfo">
              <span className="userListName">{params.row.name}</span>
              <span className="userListRole">{params.row.role}</span>
            </div>

          </div>
        )
      }
    },
    { field: "email", headerName: "Email", width: 300 },
    { field: "status", headerName: "Status", width: 160 },
    { field: "sales volume", headerName: "Sales Volume", width: 150},
    { field: "action", 
      headerName: "Action", 
      width: 250,
      renderCell: (params) =>{
        return(
          <div className='userListAction'>
            <Link to={"/users/" + params.row.id} >
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)}/>
          </div>  
        )
      }
    }

  ]
  return (
    <div className='userList'>
      <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default UserList