import { Component, useCallback } from "react";
import { connect } from 'react-redux';
import './css/Header.css';
import { AiOutlineTwitter, AiOutlineMenu } from 'react-icons/ai';

class Header extends Component {
    render() {
        const { user } = this.props;

        return (
            <div className="header">
                    <AiOutlineMenu size='30' />
                    <AiOutlineTwitter size='30' />
                    <p>Welcome back {user.name}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
} 

export default connect(mapStateToProps)(Header);