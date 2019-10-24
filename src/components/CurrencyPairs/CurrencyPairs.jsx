import React from 'react';
import { thisExpression } from '@babel/types';



class CurrencyPairs extends React.Component {

    state = {
        currencyIn: this.props.currencyIn,
        currencyOut: this.props.currencyOut,
    }

    handleChangeIn = (event) => {
        this.setState({ currencyIn: event.target.value })
        this.props.onCurrencyChange(`${event.target.value}_${this.state.currencyOut}`);
    }

    handleChangeOut = (event) => {
        this.setState({ currencyOut: event.target.value })
        this.props.onCurrencyChange(`${this.state.currencyIn}_${event.target.value}`);
    }
    
    render() {
       const { currencyIn, currencyOut} = this.props

        return (
            <div>
                <div className="box">
                    <select onChange = { this.handleChangeIn } value={this.state.currencyIn}>
                        <option value="RUB">RUB</option>
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                    </select>
                </div>
                <div className="box">
                    <select onChange = { this.handleChangeOut } value={this.state.currencyOut}>
                        <option value="USD">USD</option>
                        <option value="RUB">RUB</option>  
                        <option value="UAH">UAH</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default CurrencyPairs
