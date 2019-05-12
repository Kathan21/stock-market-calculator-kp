import React, { Component } from 'react';
import './App.css';

class App extends Component {



  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      result1: 0,
      result2: 0,
      result3: 0,
      Allotment: 0,
      Fshareprice: 0,
      Scommission: 0,
      Isprice: 0,
      Bcommition: 0,
      Cgtrate: 0,
    };

      this.onChangeAllotment = this.onChangeAllotment.bind(this);
      this.onChangeFshareprice = this.onChangeFshareprice.bind(this);
      this.onChangeScommission = this.onChangeScommission.bind(this);
      this.onChangeIsprice = this.onChangeIsprice.bind(this);
      this.onChangeBcommision = this.onChangeBcommision.bind(this);
      this.onChangeCgtrate = this.onChangeCgtrate.bind(this);



  }

  onChangeAllotment(e){
    console.log(e.target.value);
      this.setState({
      Allotment: Number(e.target.value) 
    })
  }

  onChangeFshareprice(e){
    console.log(e.target.value);
      this.setState({
      Fshareprice:Number(e.target.value) 
    })
  }

  onChangeScommission(e){
    console.log(e.target.value);

    this.setState({
      Scommission:Number(e.target.value) 
    })
  }

  onChangeIsprice(e){
    console.log(e.target.value);

    this.setState({
      Isprice:Number(e.target.value) 
    })
  }
  
  onChangeBcommision(e){
    console.log(e.target.value);

    this.setState({
      Bcommition:Number(e.target.value) 
    })
  }

  onChangeCgtrate(e){
    console.log(e.target.value);

    this.setState({
      Cgtrate:Number(e.target.value) 
    })
  }

  addAction = () => {
    
    const{Allotment, Fshareprice, Scommission,Isprice,Bcommition,Cgtrate } = this.state;
      this.setState({
          result: Allotment*Fshareprice,
            
          result1: (Allotment*Isprice)+Bcommition+Scommission+((15/100*((Allotment*Fshareprice)-(Allotment*Isprice)-Bcommition-Scommission))),

          result2: (Allotment*Fshareprice) - ((Allotment*Isprice)+Bcommition+Scommission+((15/100*((Allotment*Fshareprice)-(Allotment*Isprice)-Bcommition-Scommission)))),

          result3: (100/((Allotment*Isprice)+Bcommition+Scommission+((15/100*((Allotment*Fshareprice)-(Allotment*Isprice)-Bcommition-Scommission)))) *((Allotment*Fshareprice) - ((Allotment*Isprice)+Bcommition+Scommission+((Scommission/100*((Allotment*Fshareprice)-(Allotment*Isprice)-Bcommition-Scommission))))))
      })
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="smc12">
          <h1 className="smc">
            Stock market Calculater
          </h1>
        </div>
        <div className="stockmTable left-side App">
          <label className="labelcolor">
            Allotment (number of shares):
            <input type="text" id="i1 in" name="name"  onChange={this.onChangeAllotment} required /><br/>
          </label>
          <label className="labelcolor">
            Final share price (in dollars):
            <input type="text" id="i2 in" name="name" onChange={this.onChangeFshareprice} required/><br/>
          </label>
          <label className="labelcolor">
            Inital share price (in dollars):
            <input type="text" id="i3 in " onChange={this.onChangeIsprice} name="name" /><br/>
          </label>
          <label className="labelcolor">
            Sell commission (in dollars):
            <input type="text" id="i4 in " onChange={this.onChangeScommission} name="name"/><br/>
          </label>
          <label className="labelcolor">
            Buy commission (in dollars):
            <input type="text" id="i5 in " onChange={this.onChangeBcommision} name="name"/><br/>
          </label>
          <label className="labelcolor">
            Captial gain tax rate (in %):
            <input type="text" id="i6 in " onChange={this.onChangeCgtrate} name="name"  min='0' max='100' /><br/>
          </label>
          <button className="btn btn-default" onClick={this.addAction} value="Add">Calculate</button> <br/>
        </div>
        <div className="stockmTable1">
          <label className="labelcolor">
                Proceeds:
                <input type="text" value={this.state.result} id="o1" name="name" readOnly/><br/>
          </label>
          <label className="labelcolor">
            Cost:
            <input type="text" id="o2" value={this.state.result1} name="name" /><br/>
          </label>
          <label className="labelcolor">
            Net Profit (in dollars$)
            <input type="text" id="o3" value={this.state.result2} name="name" /><br/>
          </label>
          <label className="labelcolor">
            Return on investment (in %)
            <input type="text" id="o4" value={this.state.result3} name="name" /><br/>
          </label>
          <label className="labelcolor">
            Break even price (in dollars):
            <input type="text" id="o5" value={this.state.result1} name="name" /><br/>
          </label>
        </div> 
      </React.Fragment>
    );
  }
}

export default App;
