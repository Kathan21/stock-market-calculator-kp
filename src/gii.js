import React from 'react'; 
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
class Grade extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num1: 0,
      num2: 0
    };

       this.handlenum1Change = this.handlenum1Change.bind(this);
    this.handlenum2Change = this.handlenum2Change.bind(this);
  }


  handlenum1Change (evt) {
    this.setState({ num1: evt.target.value });
  }





handlenum2Change(evt) {

    this.setState({ num2: evt.target.value });


}


   addAction (event) {

  var num1=this.setState({ num1: event.target.value });
  var num2=this.setState({ num2: event.target.value });



   this.setState({result: num1 + num2 })

            } 


  render() {


     return (


      <form>
        <label>
          Name:
          <input type="number" onChange={this.handlenum1Change} />
           <input type="number" ref="term" placeholder="Length of loan"  onChange={this.handlenum2Change}/>


            <input type="button" onClick={this.addAction} value="Add"/>
    <input type='text' value={this.state.result} readonly/>

        </label>

      </form>
    );
  }
}




export default Grade;
