import { Component } from "react";
import { connect } from 'react-redux';

class Home extends Component {
    render() {
    console.log(this.props);
        return (
            <h1>Home</h1>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tweets: state.tweets
    }
} 

export default connect(mapStateToProps)(Home);