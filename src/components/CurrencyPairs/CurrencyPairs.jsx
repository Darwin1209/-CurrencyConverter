import React from 'react';

let a = `RUB_EUR_USD_UAH_BBD_BTN_BND_XAF_CUP_FKP_GIP_HUF_IRR_JMD_AUD_LAK_
        LYD_MKD_XOF_NZD_OMR_PGK_RWF_WST_RSD_SEK_TZS_AMD_BSD_BAM_CVE_CNY_
        CRC_CZK_ERN_GEL_HTG_INR_JOD_KRW_LBP_MWK_MRO_MZN_ANG_PEN_QAR_STD_
        SLL_SOS_SDG_SYP_AOA_AWG_BHD_BZD_BWP_BIF_KYD_COP_DKK_GTQ_HNL_IDR_
        ILS_KZT_KWD_LSL_MYR_MUR_MNT_MMK_NGN_PAB_PHP_RON_SAR_SGD_ZAR_SRD_
        TWD_TOP_VEF_DZD_ARS_AZN_BYR_BOB_BGN_CAD_CLP_CDF_DOP_FJD_GMD_GYD_
        ISK_IQD_JPY_KPW_LVL_CHF_MGA_MDL_MAD_NPR_NIO_PKR_PYG_SHP_SCR_SBD_
        LKR_THB_TRY_AED_VUV_YER_AFN_BDT_BRL_KHR_KMF_HRK_DJF_EGP_ETB_XPF_
        GHS_GNF_HKD_XDR_KES_KGS_LRD_MOP_MVR_MXN_NAD_NOK_PLN_SZL_TJS_
        TTD_UGX_UYU_VND_TND_UZS_TMT_GBP_ZMW_BTC_BYN_BMD_GGP_CLF_CUC_
        IMP_JEP_SVC_ZMK_XAG_ZWL_ALL_XCD`;
const pair = a.split('_');
console.log(pair);

const elements = pair.map((item) => {
    return (
        <option key={item} value={item}>
            {item}
        </option>
    )
});

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
        return (
            <div>
                <div className="box">
                    <select onChange = { this.handleChangeIn } value={this.state.currencyIn}>
                        {elements}
                    </select>
                </div>
                <div className="box">
                    <select onChange = { this.handleChangeOut } value={this.state.currencyOut}>
                        {elements}
                    </select>
                </div>
            </div>
        )
    }
}

export default CurrencyPairs
