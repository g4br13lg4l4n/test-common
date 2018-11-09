import React, { Component } from 'react';
import Axios from 'axios'

class ListLog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      logs: ''
    }

    this.URL_log = 'http://localhost:8000/api/log'
    this.showLogs = this.showLogs.bind(this)
  }

  componentWillMount() {

    Axios.get(this.URL_log)
    .then( resp => {
      this.setState({ logs: resp.data }) 
    })
    .catch(err => {
      console.log(err)
    })
  }

  showLogs() {
    if(this.state.logs.length > 0){
      return this.state.logs.map((data, i) => {
        return (
          <tr key={i}>
            <th scope="row">{i}</th>
            <td>{data.type_request}</td>
            <td>{data.url_request}</td>
            <td>{data.send_data}</td>
            <td>{data.status_response}</td>
            <td>{data.response}</td>
            <td>{data.created_at}</td>
          </tr>
        )
      })
    }
  }

  render() {
    const showLogs = this.showLogs()
    return (
      <div className={"container"}> 
        <p className={"text-center"}>Listado de LOG</p> 
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Request</th>
              <th scope="col">URL Request </th>
              <th scope="col">Datos enviados</th>
              <th scope="col">Status petición</th>
              <th scope="col">Respuesta</th>
              <th scope="col">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {showLogs}  
          </tbody>
        </table> 
      </div>
    )
  }


}

export default ListLog