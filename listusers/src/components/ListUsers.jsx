import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import "./listusers.css"
import Appbar from './Appbar';
//import axios from 'axios';

function ListUsers() {

    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);

 

  useEffect(() => {
    const list = async () => {
         const res = await fetch(`https://reqres.in/api/users?_page=${page}`);
         const json = await res.json();
         setUsers(json.data);
       /*  await axios.get(`https://reqres.in/api/users?_page=${page}`)
         .then(res=>{
             setUsers(res.data)
         })*/
       };
    list();
  }, [page]);


  return (
    <div className="ListUsers">
      <Appbar />
      <Typography variant="h5">
      <div className="flex">
        {
          users.map((user) => {
            return (
              <div key={user.id}>
                <p>
                  <strong>{user.first_name} {user.last_name}</strong>
                </p>
                <p>{user.email}</p>
                <img key={user.avatar} src={user.avatar} alt=""/>
              </div>
            );
          })}
      </div>
      </Typography>
      <Pagination className="paginate" count={2} color="primary" onChange={(e, value) => setPage(value)} />
    </div>
  );
}

export default ListUsers
