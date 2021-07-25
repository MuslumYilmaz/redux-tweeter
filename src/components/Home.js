import { Component } from "react";
import { connect } from 'react-redux';
import './css/Home.css';
import { FcLike } from 'react-icons/fc';
import { FaRetweet } from 'react-icons/fa';

class Home extends Component {
    like = () => {
        console.log("liked!");
    }

    retweet = () => {
        console.log("retweet!");
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
                            <p><FcLike onClick={this.like} /> {tweet.likes} <FaRetweet onClick={this.retweet} /> {tweet.retweets}</p>
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

export default connect(mapStateToProps)(Home);