const initState = {
    tweets: [
        {owner: 'John Doe', tweet: 'Messi is a real goat lol!', comments: [], likes: 0, retweets: 0, id:1},
        {owner: 'Sarah Jane', tweet: 'Its pretty cold today...', comments: [], likes: 0, retweets: 0, id: 2},
        {owner: 'Elmer Fudd', tweet: 'Such a boring day', comments: [], likes: 0, retweets: 0, id:3}
    ],
    tweet: {},
    user: {name: 'John Doe'}
};

const rootReducer = (state = initState, action) => {
    let newList = [...state.tweets];

    switch (action.type) {
        case 'ADD_TWEET':
            newList.unshift(action.tweet);

            return {
                ...state,
                tweets: newList
            }

        case 'LIKE_TWEET':
            let index = state.tweets.findIndex(tweet => tweet.id === action.id);
            newList = [...state.tweets];

            newList[index].likes += 1;

            return {
                ...state,
                tweets: newList
            }

        case 'RT_TWEET':
            let i = state.tweets.findIndex(tweet => tweet.id === action.id);
            newList = [...state.tweets];
    
            newList[i].retweets += 1;
    
            return {
                ...state,
                tweets: newList
            }
            
        case 'GET_TWEET':
            let tweet = state.tweets.find(tweet => tweet.id === action.id);
            
            return {
                ...state,
                tweet: tweet
            }

        case 'ADD_COMMENT':
            let findIndex = state.tweets.findIndex(tweet => tweet.id === action.obj.id);

            let updatedTweet = {...state.tweets[findIndex]}

            let commentId = Math.floor(Math.random() * 10000);

            updatedTweet.comments.push({content: action.obj.value, id: commentId, likes: 0, retweets: 0});
            
            return {
                ...state,
                tweet: updatedTweet
            }    

        default:
            return state;    
    }
}

export default rootReducer;