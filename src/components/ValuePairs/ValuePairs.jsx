import React from 'react';

class ValuePairs extends React.Component {
  
    handleChangeIn = (e) => {
        this.props.onValueChangeIn(e.target.value);
    }

    handleChangeOut = (e) => {
        this.props.onValueChangeOut(e.target.value);
    }

    render() {

        return (
            <div>
                <input type="number"
                    value={ this.props.valueIn }
                    onChange = { this.handleChangeIn }
                />
                <input type="number"
                    value={this.props.valueOut}
                    onChange = { this.handleChangeOut }
                />
            </div>
        )
    }
}

export default ValuePairs
