import { Component } from "react";
import { connect } from 'react-redux';
import './css/Header.css';

class Header extends Component {
    render() {
    let { tweets } = this.props;
    console.log(this.props);
        return (
            <div className="header">
                    <p>Twitter</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tweets: state.tweets
    }
} 

export default connect(mapStateToProps)(Header);