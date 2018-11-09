import React, { Component } from 'react';
import Axios from 'axios'

class ListUsers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: ''
    }
    this.showUsers = this.showUsers.bind(this)
    this.URL_API = 'http://localhost:8000/api/user'
  }

  componentWillMount() {

    Axios.get(this.URL_API)
    .then(resp => {
      this.setState({ users: resp.data.data.result })
    })
    .catch(err => {
      console.log(err)
    })
  }

  showUsers() {
    if(this.state.users.length > 0){
      return this.state.users.map((data, i) => {
        return (
          <tr key={i}>
            <th scope="row">{i}</th>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.profession}</td>
          </tr>
        )
      })
    }
  }

  render() {
    const showUsers = this.showUsers()

    return(
      <div className={"container"}> 
        <p className={"text-center"}>Listado de Usuarios</p> 
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
              <th scope="col">Profesión</th>
            </tr>
          </thead>
          <tbody>
            {showUsers}
            
          </tbody>
        </table> 
      </div>
    )
  }
 
}
export default ListUsers;