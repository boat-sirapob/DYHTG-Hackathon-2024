import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Loading = () => {
  return (
    <div style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, display: "flex", justifyContent: "center", alignItems: "center", gap: 10 }}><FontAwesomeIcon icon="fa-solid fa-circle-notch" spin />Loading</div>
  )
}

export default Loading