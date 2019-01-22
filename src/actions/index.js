import axios from 'axios';


export function getQuestions(){
	return (dispatch)=>{
		const request= axios.get(`https://cdn.rawgit.com/santosh-suresh/39e58e451d724574f3cb/raw/784d83b460d6c0150e338c34713f3a1c2371e20a/assignment.json`)
		request.then((response)=>{
            dispatch(setQuestions);
            dispatch(setQuestions(response.data));
		})
    }
}

export function incrementQuestionAndUpdateScore(userSelection, answer) {
    return (dispatch)=>{
        if(userSelection === answer) {
            dispatch(incrementScore());
        }
        dispatch(incrementQuestionNumber());
    }
}

function setQuestions(questions) {
    return {
        type: 'SET_QUESTIONS',
        payload: questions
    }
}

function incrementScore(questions) {
    return {
        type: 'INCREMENT_SCORE'
    }
}

function incrementQuestionNumber() {
    return {
        type: 'INCREMENT_QUESTION_NUMBER'
    }
}