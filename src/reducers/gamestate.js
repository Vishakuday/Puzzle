let initialState ={
    questionNumber:  0,
    showResultsPage: false,
    score: 0,
    questions: []

}

export default function(state= initialState, action){
    let newState = Object.assign({}, state);
	switch(action.type){
        case 'SET_QUESTIONS':    
        newState.questions = action.payload;
        return newState;

        case 'INCREMENT_QUESTION_NUMBER':
        newState.questionNumber = state.questionNumber + 1;
        return newState;

        case 'INCREMENT_SCORE':
        newState.score = state.score + 1;
        return newState;
	}
	return state;
}