import React, { Component } from 'react';
import QuestionWithOptions from './QuestionWithOptions';
import {connect} from 'react-redux';
import {getQuestions, incrementQuestionAndUpdateScore} from '../actions/index';


class GameContainer extends Component {

componentDidMount() {
    this.props.getQuestions();
}

userSelection(userSelection, answer) {
    this.props.incrementQuestionAndUpdateScore(userSelection, answer)
}

  render() {
    let {questions, score, questionNumber} = this.props;
    let questionToBeShown = questions[questionNumber] || {};

    return (
      <div className ="game-parent">
        {questions.length ? (<div className = "game-content">
         <QuestionWithOptions questionToBeShown = {questionToBeShown} userSelection = {this.userSelection.bind(this)}  {...this.props}/>       
        </div>) 
        : 
        <div className="game-loading">Loading...</div>
        }   
      </div>
    );
  }
}

const mapStateToProps = ({gameState}) => {
    let {questionNumber = 0, score = 0, questions = []} = gameState;
    return {
        questionNumber,
        score,
        questions
    }

}

const mapDispatchToProps = (dispatch) =>{
    return {
        incrementQuestionAndUpdateScore: (userSelection, answer) => {
            dispatch(incrementQuestionAndUpdateScore(userSelection, answer));
        },
        getQuestions : () =>{
            dispatch(getQuestions());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);