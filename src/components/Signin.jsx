import React, {Component} from "react"

class Signin extends Component {
  constructor(){
    super()

    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const configObj = {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(this.state)
    }
    // form.append("username", this.state.username)
    // form.append("password", this.state.password)
    console.log("start fetch")
    fetch("http://localhost:3000/sessions", configObj)
      .then(res => res.json())
      .then(data => window.localStorage.setItem("jwt", data.jwt))
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>username</label>
          <input type="username" id="username" name="username"  onChange={this.handleChange}/>

          <label>password</label>
          <input type="password" id="password" name="password" onChange={this.handleChange}/>

          <input type="submit" value="sign in!" />
        </form>
      </div>
    )
  }
}

export default Signin;