import { Component } from 'react';
import { connect } from 'react-redux';
import { FcLike } from 'react-icons/fc';
import { FaRetweet } from 'react-icons/fa';

class TweetDetail extends Component {
    state = {
        value: ''
      };
    
      handleChange = this.handleChange.bind(this);
      handleSubmit = this.handleSubmit.bind(this);

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event, id) {
        event.preventDefault();

        let value = this.state.value;

        let obj = {id, value};

        this.props.addComment(obj);
    }

    render() {
        let { tweet } = this.props;

        return (
            <div>
                <div>
                <ul>
                    <li key={tweet.id}>
                        <div className="container">
                            <span>{tweet.owner}</span>
                            <p>{tweet.tweet}</p>
                            <p><FcLike onClick={() => this.like(tweet.id)} /> {tweet.likes} <FaRetweet onClick={() => this.retweet(tweet.id)} /> {tweet.retweets}</p>
                        </div>
                    </li>

                </ul>
                </div>
                <div>
                <ul>
                { tweet.comments.map(comment => (
                    <li key={comment.id}>
                        <div className="container">
                            <span>{tweet.owner}</span>
                            <p>{comment.content}</p>
                            <p><FcLike onClick={() => this.like(comment.id)} /> {comment.likes} <FaRetweet onClick={() => this.retweet(tweet.id)} /> {tweet.retweets}</p>
                        </div>
                    </li>
                ))}
                </ul>
                </div>
                <div>
                <form onSubmit={(event, id) => this.handleSubmit(event, tweet.id)}>
                    <textarea type="text" placeholder="Add a comment" value={this.state.value} onChange={this.handleChange} />
                    <input className="tweet-btn" type="submit" value="Tweet" />
                </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        tweet: state.tweet
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (obj) => { dispatch({type: 'ADD_COMMENT', obj}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetDetail);