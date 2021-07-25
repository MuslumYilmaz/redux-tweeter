import { Component } from "react";
import { connect } from 'react-redux';
import './css/Home.css';
import { FcLike } from 'react-icons/fc';
import { FaRetweet } from 'react-icons/fa';

class Home extends Component {
    like = (id) => {
        this.props.likeTweet(id);
    }

    retweet = (id) => {
        this.props.rtTweet(id);
    }

    render() {
    let { tweets } = this.props;
    console.log(this.props);
        return (
            <div>
                <ul>
                { tweets.map(tweet => (
                    <li key={tweet.id}>
                        <div className="container">
                            <span>{tweet.owner}</span>
                            <p>{tweet.tweet}</p>
                            <p><FcLike onClick={() => this.like(tweet.id)} /> {tweet.likes} <FaRetweet onClick={() => this.retweet(tweet.id)} /> {tweet.retweets}</p>
                        </div>
                    </li>
                )) }

                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tweets: state.tweets
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        likeTweet: (id) => { dispatch({type: 'LIKE_TWEET', id}) },
        rtTweet: (id) => { dispatch({type: 'RT_TWEET', id}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);