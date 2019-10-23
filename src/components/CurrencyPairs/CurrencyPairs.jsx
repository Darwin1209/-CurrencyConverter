import React from 'react';

class CurrencyPairs extends React.Component {
    state = {
        currencyIn: this.props.currencyIn,
        currencyOut: this.props.currencyOut,
    }

    render() {
        const { currencyIn, currencyOut, handleChangeCurrency } = this.props

        return (
            <div>
                <input type="text" value={currencyIn}/>
                <input type="text" value={currencyOut}/>
            </div>
        )
    }
}

export default CurrencyPairs
