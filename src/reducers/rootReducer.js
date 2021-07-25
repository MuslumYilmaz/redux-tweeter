const initState = {
    tweets: [
        {owner: 'John Doe', tweet: 'Messi is a real goat lol!', comments: [], likes: 0, retweets: 0, id:1},
        {owner: 'Sarah Jane', tweet: 'Its pretty cold today...', comments: [], likes: 0, retweets: 0, id: 2},
        {owner: 'Elmer Fudd', tweet: 'Such a boring day', comments: [], likes: 0, retweets: 0, id:3}
    ]
};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TWEET':
            let newList = [...state.tweets];
            newList.unshift(action.tweet);

            return {
                ...state,
                tweets: newList
            }
            
        default:
            return state;    
    }
}

export default rootReducer;