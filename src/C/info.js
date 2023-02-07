import React from 'react';
import {findCoinbaseFees, findCoinbaseProFees, findGeminiFees, findGeminiActiveTraderFees} from './feeFinder';

class CryptoCalculatorApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            totalCoins: 0,
            taxRate: 0,
            valueBought: 0,
            valueSold: 0,
            percent: 0.0149,
            feeStruct: 1,
            totalPaid: 0,
            totalSold: 0,
            estFees: 0,
            estTaxes: 0,
            estGainlossAfterTax: 0,
            estGainlossBeforeTax: 0,
            revealG: false,
            revealCb: false,
            canCalculate: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    changePercentCoinBase = () => {
        if (document.getElementById("bank").checked) this.setState({ percent: 0.0149 });
        else if (document.getElementById("wallet").checked) this.setState({ percent: 0.0149 });
        else if (document.getElementById("card").checked) this.setState({ percent: 0.0399 });
    }
    
    changePercentGemini = () => {
        if (document.getElementById("bank").checked) this.setState({ percent: 0 })
        else if (document.getElementById("card").checked) this.setState({ percent: 0.0349})
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'number' ? target.value : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    updateFees = () => {
        if (document.getElementById('coinbase').checked) {
            this.setState({
                feeStruct : 1,
                percent : .0149,
                revealCb: true,
                revealG: false,
                canCalculate: true
            });
        }
        else if (document.getElementById('coinbasePro').checked){
            this.setState({
                feeStruct : 2,
                percent : .0149,
                revealCb: false,
                revealG: false,
                canCalculate: true
            });
        }
        else if (document.getElementById('gemini').checked) {
            this.setState({
                feeStruct : 3,
                percent: 0.0,
                revealCb: false,
                revealG: true,
                canCalculate: true
            });
        }
        else if (document.getElementById('geminiActiveTrader').checked){
            this.setState({
                feeStruct : 4,
                percent: 0.0,
                revealCb: false,
                revealG: false,
                canCalculate: true
            })
        }
        else {
            this.setState({
                feeStruct : 1,
                percent : .0149,
                revealCb: false,
                revealG: false,
                canCalculate: true
            });
        }
    }

    feeFinder = (price) => {
        if(this.state.feeStruct === 1) return findCoinbaseFees(price, this.state.percent);
        else if(this.state.feeStruct === 2) return findCoinbaseProFees(price);
        else if(this.state.feeStruct === 3) return findGeminiFees(price, this.state.percent);
        else return findGeminiActiveTraderFees(price)
    }
    
    calculate = () => {
        if(
            this.state.canCalculate !== true
            && this.state.totalCoins !== 0
            && this.state.totalPaid !== 0
            && this.state.totalSold !== 0
            ){
            alert("Must select an option to calculate!");
        }
        else {
            let totalCoins = this.state.totalCoins;
            let bought = this.state.valueBought;
            let sold = this.state.valueSold;
            let taxRate = this.state.taxRate / 100;
            // console.log("taxRate: " + taxRate)
            let purchasePrice = Math.round(((totalCoins * bought) + Number.EPSILON) * 100) / 100;
            // console.log("Purchase price: " + purchasePrice)
            let soldPrice = Math.round(((totalCoins * sold) + Number.EPSILON) * 100) / 100;
            let estimatedProfit = soldPrice - purchasePrice;
            let feesPaidBuy = this.feeFinder(purchasePrice);
            // console.log("feesPaidBuy: " + feesPaidBuy);
            let feesPaidSell = this.feeFinder(soldPrice);
            let totalPurchase = purchasePrice + feesPaidBuy; // total purchase price
            let totalSell = soldPrice - feesPaidSell;
            let taxes = estimatedProfit * taxRate;
            let projectedProfit = estimatedProfit - taxes - feesPaidSell;
            this.setState({
                totalPaid: this.formatter.format(totalPurchase),
                totalSold: this.formatter.format(totalSell),
                estFees: this.formatter.format(feesPaidSell),
                estTaxes: this.formatter.format(taxes),
                estGainlossBeforeTax: this.formatter.format(estimatedProfit),
                estGainlossAfterTax: this.formatter.format(projectedProfit),
                calculated: true
            });
        }
    }

    formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    render() {
        return(
            <div className="mainDiv">
                <br/><br/><br/>
                {/* <!-- Left Section of Web App--> */}
                <div className="exchanges">
                {/* <!-- Beginning of Exchange List --> */}
                <h1>Select a platform</h1>
                <h3>Only Supports US Exchanges</h3>
                <div onChange={() => this.updateFees()}>
                    <ul className='list'>
                    <li>
                        <input type="radio" id="coinbase" name="exchange"/>
                        <b>Coinbase</b>
                    </li>
                    <li>
                        <input type="radio" id="coinbasePro" name="exchange" />
                        <b>CoinbasePro</b>
                    </li>
                    <li>
                        <input type="radio" id="gemini" name="exchange" />
                        <b>Gemini</b>
                    </li>
                    <li>
                        <input type="radio" id="geminiActiveTrader" name="exchange" />
                        <b>Gemini Active Trader</b>
                    </li>
                    </ul>
                </div>
                {
                    this.state.revealCb
                    && 
                    <div onChange={() => this.changePercentCoinBase()}>
                        <hr />
                        <h3>Payment Options</h3>
                        <ul>
                            <input type="radio" name="payment" id="bank" />
                            US Bank Account
                        </ul>
                        <ul>
                            <input type="radio" name="payment" id="wallet" />
                            Coinbase USD Wallet
                        </ul>
                        <ul>
                            <input type="radio" name="payment" id="card" />
                            Debit Card
                        </ul>
                    </div>
                }
                {
                    this.state.revealG
                    &&
                    <div onChange={() => this.changePercentGemini()}>
                        <hr />
                        <h3>
                            Payment Options
                        </h3>
                        <ul>
                        <input type="radio" name="payment" id="bank"/>
                            US Bank Account
                        </ul>
                        <ul>
                        <input type="radio" name="payment" id="card"/>
                            Debit Card
                        </ul>
                    </div>
                }
                {/* <!-- End of Exchange List--> */}
                </div>
                {/* <!-- End of Left Section of Web App --> */}
                {/* <!-- Start of Right Section of Web App --> */}
                <div className="personInput">
                <h3>
                    <span className="important">
                    Enter the following :
                    </span>
                </h3>
                <ul className='list'>
                    <li>
                    <b>
                        Total Coins
                    </b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                        type="number"
                        id="coins"
                        name="totalCoins" min="1"
                        className='inputStyle'
                        value={this.state.totalCoins}
                        onChange={this.handleChange} />
                    </li>
                    <li>
                    <b>
                        Price Bought
                    </b>
                    &nbsp;&nbsp;
                    <input
                        type="number"
                        name="valueBought"
                        id="bought" min="0"     
                        className='inputStyle'
                        value={this.state.valueBought}
                        onChange={(this.handleChange)} />
                    </li>
                    <li>
                    <b>
                        Price Sold
                    </b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                        type="number"
                        name="valueSold"
                        id="sold" min="0"
                        className='inputStyle'
                        value={this.state.valueSold}
                        onChange={this.handleChange}/>
                    </li>
                    <li>
                    <b>
                        Tax Rate
                    </b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                        type="number"
                        name='taxRate'
                        id="taxRate"
                        min="1"
                        max= '100' 
                        className='inputStyle'
                        value={this.state.taxRate}
                        onChange={this.handleChange}/>
                    </li>
                </ul>
                <div className="calculateButton">
                    <button onClick={()=> this.calculate()}>Calculate</button>
                    <br/><br/>
                </div>
                </div>
                {/* <!-- End of Center Section of Web App --> */}
                {/* <!-- Beginning of Right Section of Web App --> */}
                <div className="displayResult">
                <h3>
                    Estimated Profit / Loss
                </h3>
                <ul className='list'>
                    <li>
                    <b className='calculateColumn'>
                        Est. Total Bought: 
                    </b>
                    <span id="totalPurchase">
                        &nbsp;$ {this.state.totalPaid}
                    </span>
                    </li>
                    <li>
                    <b className='calculateColumn'>
                        Est. Total Sold: 
                    </b>
                    <span id="totalSell">
                        &nbsp;$ {this.state.totalSold}
                    </span>
                    </li>
                    <li>
                    <b className='calculateColumn'>
                        Profit Before: 
                    </b>
                    <span id="estProfit">
                        &nbsp;$ {this.state.estGainlossBeforeTax}
                    </span>
                    </li>
                    <li>
                    <b className='calculateColumn'>
                        Fees: 
                    </b>
                    <span id="fees">
                        &nbsp;$ {this.state.estFees}
                    </span>
                    </li>
                    <li>
                    <b className='calculateColumn'>
                        Taxes: 
                    </b>
                    <span id="tax">
                        &nbsp;$ {this.state.estTaxes}
                    </span>
                    </li>
                    <li>
                    <b className='calculateColumn'>
                        Gain / Loss {<br/>}After Taxes & Fees: 
                    </b>
                    <span id="projProfit">
                        &nbsp;$ {this.state.estGainlossAfterTax}
                    </span>
                    </li>
                </ul>
            </div>
            {/* <!-- End of Container Div --> */}
            </div>
        );
    }
}
export default CryptoCalculatorApp;