import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router";
import "../../../styles/navbar.css"
import Cookies from 'js-cookie';

function NavigationBar() {
  const history = useHistory();
  const [username, setUsername] = useState('');

  const logOut = () => {
    Cookies.set('loggedIn', false);
    Cookies.remove('id');
    Cookies.remove('username');
    history.push("/")
  }

  useEffect(() => {
    let userName = Cookies.get("username");
    setUsername(userName)
  }, [])

  return (
    <div id="header">
      <div className="container-navigation">
        <h1 id="webName">Tugasin</h1>
        <div className="container-logout">
          <p className="user-name">Hai, {username}</p>
          <button id="button-logout" onClick={() => logOut()}>Keluar</button>
        </div>
      </div>
    </div>
  )
}

export default NavigationBar
