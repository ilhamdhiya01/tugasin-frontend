/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import CancelIcon from '@material-ui/icons/Cancel';
import ilustrationEmptyTask from "../../../images/peep-2.svg"
import Cookies from "js-cookie";
import apiClient from "../../data/api";

function DashboardPage() {
  const [username, setUsername] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [userId, setUserId] = useState(0);

  const emptyTaskAlertVisible = () => {
    let alert = document.querySelector(".empty-task-container");
    alert.classList.remove("hidden");
  }

  const emptyTaskAlertHidden = () => {
    let alert = document.querySelector(".empty-task-container");
    alert.classList.add("hidden");
  }

  const checkTask = (id) => {
    // Get task list
    apiClient.get(`taskById/${id}`).then((res) => {
      if (res.data.data.length !== 0) {
        emptyTaskAlertHidden();
        setTaskList(res.data.data);
      } else {
        emptyTaskAlertVisible();
        setTaskList(res.data.data);
      }
    }).catch((error) => {
      console.log(error);
    })
  }

  const deleteTask = (id) => {
    apiClient.delete(`delete/${id}`).then((res) => {
        checkTask(userId);
    }).catch((error) => {
      console.log(error);
    })
  }

  const addTask = (id) => {
    let input = document.querySelector(".task-input");
    apiClient.post("/task/add", {
      userId: id,
      todoMessage: `${input.innerHTML}`,
    }).then((res) => {
      input.innerHTML = "";
      hiddenTextInput();
      checkTask(id);
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    let userName = Cookies.get("username");
    let userID = Cookies.get("id");
    setUsername(userName);
    setUserId(userID);

    // Get task list
    checkTask(userID);

    let inputText = document.querySelector(".task-input");
    inputText.addEventListener("keydown", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.execCommand('insertHTML', false, '&#10;');
        return false;
        // let filter = inputText.innerHTML.search("<div><br></div>");
        // if (filter > -1) {
        //   inputText.innerHTML = inputText.innerHTML.slice(0, filter);
        // }
        // addTask(userID);
      }})

  }, [])

  const hiddenTextInput = () => {
    let text = document.querySelector(".text-input");
    let input = document.querySelector(".task-input");
    if (input.innerHTML.length > 0) {
      text.classList.add("hidden");
    } else {
      text.classList.remove("hidden");
    }
  }

  return (
    <div id="dashboardPage">
      <div className="page-container">
        <section id="greetingSection">
          <h2>Selamat datang, <span className="username">{username}</span></h2>
          <h3>Ayo catat seluruh tugasmu! :D</h3>
        </section>
        <section id="inputSection">
          <div className="input-container">
            <div className="input-area">
              <div className="text-input">Tuliskan tugasmu...</div>
              <div
                className="task-input"
                onKeyUp={() => hiddenTextInput()}
                contentEditable="true"
              ></div>
            </div>
          </div>
          <div className="button-container">
            <button
              className="add-button-submit"
              onClick={() => addTask(userId)}
            >
              +
            </button>
          </div>
        </section>
        <section id="listTaskSection">
          <h1 className="list-section-title">Daftar tugasmu:</h1>
          <div className="empty-task-container hidden">
            <img className="empty-task-illustration" src={ilustrationEmptyTask} alt="empty ilustration" />
            <h2 className="empty-task-text">Wah, sepertinya belum ada tugas nih</h2>
          </div>
          <div className="list-task">
            {taskList.map((task) => (
              <div id={task.id} key={task.id} className="task-container">
                <p className="task-text">{task.todo_message}</p>
                <button className="delete-task-button" onClick={() => deleteTask(task.id)}>
                  <CancelIcon />
                </button>
              </div>
            ))}
            
          </div>
        </section>
      </div>
    </div>
  );
}

export default DashboardPage;
