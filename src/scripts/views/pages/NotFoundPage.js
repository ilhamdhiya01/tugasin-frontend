import React from 'react'
import { useHistory } from 'react-router'

function NotFoundPage() {
  let history = useHistory();
  const pageStyle = {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
  const buttonStyle = {
    backgroundColor: '#fff',
    border: 'none',
    outine: 'none',
    fontFamily: 'inherit',
    fontSize: '15px',
    cursor: 'pointer',
    color: 'inherit'
  }

  const backToHome = () => {
    history.push("/dashboard")
  }
  return (
    <div style={pageStyle}>
      <h2>404</h2>
      <h3>Halaman yang kamu cari tidak ditemukan!</h3>
      <button style={buttonStyle} onClick={() => backToHome()}>Kembali ke dashboard</button>
    </div>
  )
}

export default NotFoundPage
