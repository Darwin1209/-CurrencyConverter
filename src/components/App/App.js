import React from 'react';

import CurrencyPairs from '../CurrencyPairs/CurrencyPairs';
import ValuePairs from '../ValuePairs/ValuePairs';

class App extends React.Component {
    state = {
        currencyIn: "RUB",
        currencyOut: "USD",
        cost: 0.015658,
        valueIn: 1000,
        valueOut: (1000 * 0.015658).toFixed(3)// + Number(this.cost))
    }

    handleChangeCurrency = (pairs) => {
        fetch(`https://free.currconv.com/api/v7/convert?q=${pairs}&compact=ultra&apiKey=b06d2521be5744ef0fd5`)
        .then(data => data.json())
        .then(data => {
            const curren = pairs.split('_');
            this.setState({cost: data[pairs], currencyIn: curren[0], currencyOut: curren[1]});
        })
    }

    handleChangeValue = (valueIn, valueOut) => {
        this.setState( {valueIn, valueOut} );
    }

    render() {

        const {currencyIn, currencyOut, cost, valueIn, valueOut} = this.state

        return (
            <div>
                <CurrencyPairs
                    pairs = {currencyOut, currencyIn}
                    onCurrencyChange = {this.handleChangeCurrency}
                />
                <ValuePairs 
                    valueIn = {valueIn }
                    valueOut = { valueOut }
                    cost = { cost }
                    onValueChange = {this.handleChangeValue}
                />
            </div>
        );
    }









    /*
    render() {
        const { valueIn, valueOut } = this.state;

        return (
            <div>
                <input type="text" value={valueIn}/>
                <input type="text" value={valueOut}/>
            </div>
        )
    }
    */
}

export default App;
