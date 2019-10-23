import React from 'react';

class ValuePairs extends React.Component {
    state = {
        valueIn: this.props.valueIn,
        valueOut: this.props.valueOut,
    }

    handleChange = (e) => {
        this.setState({valueIn: e.target.value})
        this.props.onValueChange(e.target.value);
    }

    render() {

        return (
            <div>
                <input type="text" value={this.state.valueIn}
                    onChange = { this.handleChange }
                />
                <input type="text" value={this.state.valueOut}

                />
            </div>
        )
    }
}

export default ValuePairs
