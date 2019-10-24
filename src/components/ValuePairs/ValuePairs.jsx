import React from 'react';

import './ValuePairs.css';

class ValuePairs extends React.Component {
  
    handleChangeIn = (e) => {
        this.props.onValueChangeIn(e.target.value);
    }

    handleChangeOut = (e) => {
        this.props.onValueChangeOut(e.target.value);
    }

    render() {

        return (
            <div className = "ValuePairs">
                <div className="ValueInput">
                    <input
                        type="number"
                        value={ this.props.valueIn }
                        onChange = { this.handleChangeIn }
                    />
                </div>
                <div className="ValueInput">
                    <input
                        type="number"
                        value={this.props.valueOut}
                        onChange = { this.handleChangeOut }
                    />
                </div>
            </div>
        )
    }
}

export default ValuePairs
