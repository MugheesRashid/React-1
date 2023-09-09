import React from 'react'

function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
        <div><strong>{props.alert.msg}</strong></div>
        </div>
  )
}

export default Alert

