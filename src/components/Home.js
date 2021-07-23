import { Component } from "react";
import { connect } from 'react-redux';

class Home extends Component {
    render() {
    let { tweets } = this.props;
    console.log(this.props);
        return (
            <div>
                <ul>
                { tweets.map(tweet => (
                    <li key={tweet.id}>
                        <div>
                            <span>{tweet.owner}</span>
                            <p>{tweet.tweet}</p>
                            <p>Like: {tweet.likes} Retweet: {tweet.retweets}</p>
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