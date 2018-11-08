import React, { Component } from 'react';
import Axios from 'axios'
import Info from './Info'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: '',
      infoResponse: false,
      name: '',
      email: '',
      profession: ''
     }
    this.infoResponse = ''
    this.handleChange = this.handleChange.bind(this)
    this.save = this.save.bind(this)
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  save(e) {
    e.preventDefault()
    let user = {
      name: this.state.name,
      email: this.state.email,
      profession: this.state.profession
    }
    Axios.post('http://localhost:8000/api/users', user)
    .then(resp => {
      this.setState({infoResponse: true, info: <Info response={resp}/>});  
    })
    .catch(err => {
      this.setState({infoResponse: true, info: <Info response={err}/>});
      console.log(err)
    })
  }


  render () {
    
    return (
      <form onSubmit={(e)=> {this.save(e)}}>
        <div className={"row"}>
          <label className={"col-md-2"}> Nombre: </label>
          <input 
            className={"form-control col-md-4"}
            type="text" 
            name='name'
            placeholder="Nombre"
            value={this.state.name}
            onChange={this.handleChange}/> 
        </div>
        <div className={"row"}>
          <label className={"col-md-2"}> Email: </label>
          <input 
            className={"form-control col-md-4"}
            type="email" 
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email"/>
        </div>
        <div className={"row"}>
          <label className={"col-md-2"}> Profesión: </label>
          <input 
            className={"form-control col-md-4"}
            type="text" 
            name="profession"
            placeholder="Profession"
            value={this.state.profession}
            onChange={this.handleChange}/>
        </div>
        <button className='btn btn-primary'>Guardar</button>
        {this.state.info}
      </form>
    )
  }    
}
export default Form; 