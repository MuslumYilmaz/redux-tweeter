import { Component } from 'react';
import { connect } from 'react-redux';
import { FcLike } from 'react-icons/fc';
import { FaRetweet } from 'react-icons/fa';

class TweetDetail extends Component {
    render() {
        let { tweet } = this.props;
        console.log(this.props);

        return (
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
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tweet: state.tweet
    }
}

export default connect(mapStateToProps)(TweetDetail);