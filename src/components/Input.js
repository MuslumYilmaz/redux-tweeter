import { Component } from "react";

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
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <textarea type="text" placeholder="What's happenning?" value={this.state.value} onChange={this.handleChange} />
            <input type="submit" value="Submit" />
          </form>
        )
    }
}

export default Input;