import React, { Component } from 'react';


export default class App extends Component {

 renderOptions = (options) => {
    return options.map((option,i) => {
        return <div className="option">{option}</div>
    })
 }
  render() {
      let {text = "", options =[], answer = ""} = this.props.questionToBeShown;
      let {questionNumber = 0, score = 0, questions = []} = this.props;
      let showResultsPage = questionNumber > questions.length -1;
    return (
      <div className ="question-parent">
        {!showResultsPage ? (
        <div>
            <div className="question-header">Javascript question {questionNumber} of {questions.length -1}</div>
            <div className = "question">{text}</div>
            <div className="options">
                {this.renderOptions(options)}
            </div>
            <div className="answers">
                <div className ="answer-option" onClick = {()=> {this.props.userSelection(0, answer)}}>A</div>
                <div className ="answer-option" onClick = {()=> {this.props.userSelection(1, answer)}}>B</div>
                <div className ="answer-option" onClick = {()=> {this.props.userSelection(2, answer)}}>C</div>
                <div className ="answer-option" onClick = {()=> {this.props.userSelection(3, answer)}}>D</div>
            </div>
        </div>) : 
        <div className = "result-page">
            Your score is {score}
        </div>}

      </div>
    );
  }
}