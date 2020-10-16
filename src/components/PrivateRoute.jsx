import React from "react"
import {Route, Redirect } from "react-router-dom"

let isAuthenticated = window.localStorage.getItem("jwt")

const PrivateRoute = ({ component: Component, ...otherProps }) => (
  <Route {...otherProps } component={(props) => (
    isAuthenticated ? (<div>
      <Component {...props } />
    </div>) 
    :
    (
      <Redirect to="/" />
    )
  )} />
  
)

export default PrivateRoute;