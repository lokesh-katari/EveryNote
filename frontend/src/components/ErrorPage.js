import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
    <div className="container">
        <div className="Err">
            <h1>404</h1>
            
            <h4>The page you are trying to visit is not found or temporarily unavailable</h4>
            <button type="button" class="btn btn-primary"><Link  className="btn-primary" style={{color:'white',textDecoration:'none'}} to='/'>Back to Home</Link></button>
            
        </div>
        <div className="container">
        </div>
    </div>
    </>
  )
}

export default ErrorPage