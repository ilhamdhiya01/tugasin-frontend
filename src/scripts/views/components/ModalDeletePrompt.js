import React from 'react'

function ModalDeletePrompt({id}) {

  const cancelDelete = () => {
    let modal = document.querySelector("#modalContainer");
    modal.classList.add("hidden");
  }

  const deleteTask = () => {
    
  }

  return (
    <div id="modalContainer" className="modal hidden">
      <div id="modal-content-login">
        <h4 id="modal-login-header">Sudah selesai tugasnya?</h4>
        <div id="modal-login-action">
          <button className="button-action-modal" id="no-action-button" onClick={() => cancelDelete()}>Belum</button>
          <button className="button-action-modal"  id="yes-action-button" onClick={() => deleteTask()}>Sudah</button>
        </div>
      </div>
    </div>
  )
}

export default ModalDeletePrompt
