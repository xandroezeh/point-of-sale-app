import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from 'react';
import {productRows} from "../home/salesdata";
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@mui/icons-material';

function ProductList() {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };
  
    const columns = [
      { field: "id", headerName: "ID", width: 90 },
      {
        field: "product",
        headerName: "Product",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="productListItem">
              <img className="productListImg" src={params.row.img} alt="" />
              {params.row.name}
            </div>
          );
        },
      },
      { field: "partNumber", headerName: "Part Number", width: 200 },
      { field: "year", headerName: "Year", width: 100 },
      { field: "make", headerName: "Make", width: 100 },
      { field: "model", headerName: "Model", width: 100 },
      { field: "trim", headerName: "Trim", width: 100 },  
      {
        field: "status",
        headerName: "Status",
        width: 120,
      },
      {
        field: "price",
        headerName: "Price",
        width: 160,
      },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <Link to={"/product/" + params.row.id}>
                <button className="productListEdit">Edit</button>
              </Link>
              <DeleteOutline
                className="productListDelete"
                onClick={() => handleDelete(params.row.id)}
              />
            </>
          );
        },
      },
    ];
  
    return (
      <div className="productList">
        <div className="productTitleContainer">
        <h1 className="productTitle">Products</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      </div>
  )
}

export default ProductList