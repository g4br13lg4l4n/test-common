import React, { Component } from 'react';
import Axios from 'axios'
import Log from '../log';

class ListUsers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: ''
    }
    this.showUsers = this.showUsers.bind(this)
    this.URL_API = 'http://178.128.70.168:8001/api/v1/users'
    this.URL_log = 'http://localhost:8000/api/log'
  }

  componentWillMount() {

    let data = {
      type_request: 'GET',
      url_request: this.URL_API,
      send_data: 'null',
      status_response: 'before_get',
      response: 'null', 
    }

    Log(this.URL_log, data)

    Axios.get(this.URL_API)
    .then(resp => {
      let data = {
        type_request: 'GET',
        url_request: this.URL_API,
        send_data: 'null',
        status_response: resp.data.status,
        response: resp.data.data.result.toString(), 
      }

      Log(this.URL_log, data)
      this.setState({ users: resp.data.data.result })
    })
    .catch(err => {
      let data = {
        type_request: 'GET',
        url_request: this.URL_API,
        send_data: 'null',
        status_response: err.status,
        response: err, 
      }
      log(this.URL_log, data)
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