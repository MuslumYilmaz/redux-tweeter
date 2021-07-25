import { Component } from "react";
import './css/Input.css';
import { connect } from 'react-redux';

class Input extends Component {
    state = {
        value: ''
      };
    
      handleChange = this.handleChange.bind(this);
      handleSubmit = this.handleSubmit.bind(this);

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();

        let id = Math.floor(Math.random() * 10000);
        let tweet = {owner: 'John Doe', tweet: this.state.value, comments: [], likes: 0, retweets: 0, id: id};

        this.props.addTweet(tweet);
        this.setState({value: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <textarea type="text" placeholder="What's happenning?" value={this.state.value} onChange={this.handleChange} />
            <input className="tweet-btn" type="submit" value="Tweet" />
          </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTweet: (tweet) => { dispatch({type: 'ADD_TWEET', tweet}) }
    }
}


export default connect(null, mapDispatchToProps)(Input);