import React, { useEffect } from "react";
import { useHistory } from "react-router";
import apiClient from "../../data/api";
import ModalLogin from '../components/ModalLogin'
import Cookies from 'js-cookie';

function HomePage() {
  const history = useHistory();

  const checkInput = () => {
    let input = document.querySelector(".name-input");
    let modal = document.querySelector("#modalContainer");
    console.log(input.innerHTML);
    apiClient.post("/checkname", {
      userName: `${input.innerHTML}`,
    }).then((res) => {
      // console.log(res.data);
      if (res.data.code === 200) {
        console.log(res.data.message);
        Cookies.set('loggedIn', true);
        Cookies.set('id', res.data.data.id);
        Cookies.set('username', res.data.data.username);
        history.push("/dashboard");
      } else {
        console.log(res.data.message);
        modal.classList.remove("hidden");
      }
    }).catch((error) => {
      console.log(error);
    })
  }

  const hiddenTextInput = () => {
    let text = document.querySelector(".text-input");
    let input = document.querySelector(".name-input");
    if (input.innerHTML.length > 0) {
      text.classList.add("hidden");
    } else {
      text.classList.remove("hidden");
    }
  }

  useEffect(() => {
    let inputText = document.querySelector(".name-input");
    inputText.addEventListener("keydown", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        event.preventDefault();
        document.execCommand('insertHTML', false, '');
        checkInput();
        return false;
      }
    });
  }, [])

  return (
    <div>
      <ModalLogin />
      <div id="homePage">
        <div className="page-container">
          <div id="webTitle">
            <h1>Tugasin</h1>
            <h3>Simpan rencana tugasmu disini</h3>
          </div>
          <div id="loginSection">
            <div className="input-container">
              <div className="input-area">
                <div className="text-input">Masukkan namamu</div>
                <div className="name-input" onKeyUp={() => hiddenTextInput()} contentEditable="true"></div>
              </div>
            </div>
            <div className="button-container">
              <button className="login-button-submit" onClick={() => checkInput()}>Masuk</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
