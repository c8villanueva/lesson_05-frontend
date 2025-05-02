import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useLocation } from 'react-router-dom'

import React from 'react'

const DashFooter = () => {

  const navigate = useNavigate()
  const { pathname } = useLocation()

  const onGoHomeClicked = () => navigate('/dash')

  let goHomeButton = null
  if (pathname !== '/dash') { //will show everywhere except this page na
    goHomeButton = (
      <button 
        className="dash-footer__button icon-button"
        title="Home" //title shows when you over over button
        onClick={onGoHomeClicked}
      >
        <FontAwesomeIcon icon={faHouse} />
      </button>
    )
  }

  const content = (
    // to display the current user logged in, can place in header for milky way
    <footer className="dash-footer">
      {goHomeButton}
      <p>Current User:</p>
      <p>Status:</p>
    </footer>
  )

  return content
}

export default DashFooter