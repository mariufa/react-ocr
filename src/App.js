import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import styled from 'styled-components';


const FileInput = styled.input`
  margin: auto;
  padding: 2em;
  display: block;
`;

const TextBox = styled.div`
  margin: 1em auto;
  width: 80%;
  display: block;
`;

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      ocrResult: ''
    }
  }

  takePicture = e => {
    let picture = e.target.files[0]
    console.log(picture)
    const data = new FormData();
    data.append('file', picture, picture.name);
    fetch('http://python-ocr.herokuapp.com/', {
      method: 'POST',
      body: data,
    })
    .then(response => response.text())
    .then(data => this.setState({ocrResult: data}));
  }

  render() {
    return (
      <div>
        <FileInput type="file" accept="image/*;capture=camera" onChange={this.takePicture}></FileInput>
        <TextBox>
          {this.state.ocrResult}  
        </TextBox>
      </div>
    );
  }
}

export default App;
