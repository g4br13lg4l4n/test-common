import React from 'react';
import info from '../../css/info.css'

const Info =  (props) => {
  console.log(props.response)
  if(props.response.status  == 200){
    return (
      <div className={"content-message"}>
        <p className={"message"}>El usuario con el nombre <strong> {props.response.name} </strong> se ha guardado.</p>
      </div>
    )
  }else {
    return (
      <div className={"content-message"}>
        <p className={"message"}>Hemos tenido un problema al guardar tus datos.</p>
      </div>
    )
  }
} 

export default Info