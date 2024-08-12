import React from 'react'

function Alert(props) {

  /*function capitalize(word){
        let lower = word.toUpperCase() ;
        return (lower.charAt(0) + lower.slice(1).toLowerCase());
  }*/

  return (
    <div style={{height: '50px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{(props.alert.type)} </strong>{props.alert.msg}
      </div>}
    </div>
  )
}

export default Alert;
