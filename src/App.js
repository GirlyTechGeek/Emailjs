import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

import emailjs from 'emailjs-com'



class App extends Component{

  constructor(props) {
    super(props);

    
this.state = {
      name: "",
      email: "",
      message: "",
      user_id: "user_kCMlH3on6bQ53ovKUpoX6",
    };
  }
handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
this.setState({ [name]: value });
  }
 
  sendMessage(event) {
    event.preventDefault();

const templateParams = {
      from_name: this.state.name + " (" + this.state.email + ")",
      message: this.state.message,
      
    };
    
emailjs
      .send( "my_gmail", 'template_e6asvdf' , templateParams, "user_kCMlH3on6bQ53ovKUpoX6")
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });
      }
    render(){
        return(
          <div>
          <form
            className="form"
            id={this.props.id}
            name={this.props.name}
            method={this.props.method}
            action={this.props.action}
          >
            <textarea
              id="name"
              name="name"
              onChange={this.handleInputChange.bind(this)}
              placeholder="your name"
              required
              value={this.state.name}
              style={{ width: "100%" }}
              rows={1}
            />
            <br />
            <textarea
              id="email"
              name="email"
              onChange={this.handleInputChange.bind(this)}
              placeholder="your email address"
              required
              value={this.state.email}
              
              style={{ width: "100%" }}
              rows={1}
            />
            <br />
            <textarea
              id="message"
              name="message"
              onChange={this.handleInputChange.bind(this)}
              placeholder="what would you like to chat about?"
              required
              value={this.state.message}
              style={{ width: "100%", height: "250px" }}
            />
            <br />
            <input
              type="button"
              value="Send"
              className="ui button"
              style={{
                fontFamily: "Amatic SC",
                fontSize: "20px",
                color: "blue"
              }}
               onClick={this.sendMessage.bind(this)}
            />
          </form>
        </div>
        )
    }
}

export default App


