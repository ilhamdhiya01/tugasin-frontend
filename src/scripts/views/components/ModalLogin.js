import React from 'react'
import apiClient from "../../data/api";
import Cookies from 'js-cookie';
import { useHistory } from "react-router";

function ModalLogin() {
  const history = useHistory();
  const cancelSignUp = () => {
    let modal = document.querySelector("#modalContainer");
    modal.classList.add("hidden");
  }

  const createAccount = () => {
    let modal = document.querySelector("#modalContainer");
    let input = document.querySelector(".name-input");
    apiClient.post("/createuser", {
      userName: `${input.innerHTML}`,
    }).then((res) => {
      // console.log(res.data);
      if (res.data.code === 201) {
        Cookies.set('loggedIn', true);
        Cookies.set('id', res.data.data.id);
        Cookies.set('username', res.data.data.username);
        history.push("/dashboard");
        modal.classList.add("hidden");
      } else {
        console.log(res.data.message);
      }
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div id="modalContainer" className="modal hidden">
      <div id="modal-content-login">
        <h4 id="modal-login-header">Wah, namamu belum terdaftar. Daftar dengan nama ini?</h4>
        <div id="modal-login-action">
          <button className="button-action-modal" id="no-action-button" onClick={() => cancelSignUp()}>Jangan, daftarkan</button>
          <button className="button-action-modal"  id="yes-action-button" onClick={() => createAccount()}>Daftarkan</button>
        </div>
      </div>
    </div>
  )
}

export default ModalLogin
