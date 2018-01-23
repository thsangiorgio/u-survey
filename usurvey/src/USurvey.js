import React, {Component} from 'react';
var firebase =require('firebase');
var uuid=require('uuid');
var config = {
    apiKey: "AIzaSyDT6TmJyN3nK9n4YCIQHjFoA09ootXUOPg",
    authDomain: "usurvey-b7955.firebaseapp.com",
    databaseURL: "https://usurvey-b7955.firebaseio.com",
    projectId: "usurvey-b7955",
    storageBucket: "usurvey-b7955.appspot.com",
    messagingSenderId: "1034718343545"
  };
  firebase.initializeApp(config);

class USurvey extends Component {
  constructor(props){
    super(props);

    this.state = {
      uid:uuid.v1(),
      studentName: '',
      answers: {
        answer1: '',
        answer2: '',
        answer3: ''
      }
      isSubmitted: false
    };
  }
  render(){
    var studentName;
    var questions;
      if(this.state.studentName === ''&&this.state.isSubmitted===false) {
        studentName=<div>
          <h1>Hey Student, please let us know your name</h1>
        </div>
      }
    return(
      <div>
          {studentName}
          ----------------------------------
          {questions}
      </div>
    );
  }
}
export default USurvey;
