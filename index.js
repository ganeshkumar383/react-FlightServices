import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

import KGK from './KGK';
import Hello from './Hello';
import './style.css';

let response;
const App = () => {
 
  const APP_ID='f7103864';
  const APP_KEY='031b1046e4f02109f7e1d668544dd864';
  const url = '';
   let textSrcInput = React.createRef();
  let textDestInput = React.createRef();
  const [recp,setRecp] = useState([]);
  const [recpFlag1,setRecpFlag1]  = useState(true,true);
  const [recpFlag2,setRecpFlag2]  = useState(false,false);
  useEffect( ()=>{},[]);
  const responseData = [{"f_number":1,"airlineName":"Indigo","source":"chen","dest":"bglr","t_date":"20/03/2020","departureTime":"5","arrivalTime":"04","numberOfStops":5,
"duration":"18hrs","price":"560","image":"https://cdn.jetphotos.com/full/6/92276_1593951716.jpg"}
,{"f_number":2,"airlineName":"SpiceJet","source":"chen","dest":"bglr","t_date":"20/03/2020","departureTime":"5","arrivalTime":"04","numberOfStops":5
,"duration":"18hrs","price":"60","image":"https://cdn.jetphotos.com/full/6/92276_1593951716.jpg"}
,{"f_number":3,"airlineName":"SpiceJet","source":"chen","dest":"bglr","t_date":"20/03/2020","departureTime":"5","arrivalTime":"04","numberOfStops":5
,"duration":"18hrs","price":"60","image":"https://cdn.jetphotos.com/full/6/92276_1593951716.jpg"}
,{"f_number":4,"airlineName":"SpiceJet","source":"chen","dest":"bglr","t_date":"20/03/2020","departureTime":"5","arrivalTime":"04","numberOfStops":5
,"duration":"18hrs","price":"60","image":"https://cdn.jetphotos.com/full/6/92276_1593951716.jpg"}
,{"f_number":5,"airlineName":"AirAsia","source":"chen","dest":"bglr","t_date":"20/03/2020","departureTime":"5","arrivalTime":"04","numberOfStops":5
,"duration":"18hrs","price":"60","image":"https://cdn.jetphotos.com/full/6/92276_1593951716.jpg"}];
  const getRecp = async ()=>{
    setRecpFlag2(true);
    
  const data = await fetch(
    `http://localhost:3050/searchFlights?src=`+textSrcInput.current.value+`&dest=`+textDestInput.current.value);
    response = await data.json(); 
     setRecpFlag2(false);
    setRecp(response.hits); 
  //console.log(response.hits); 
  }

  function  handleChange(event) {
   // this.setState({value: event.target.value});
   console.log(event.target.value);
   console.log(textSrcInput.current.value);
   console.log(textDestInput.current.value);
  }

  function  handleSubmit(event) {
    //setRecpFlag2(true);
    //setRecpFlag1(false);
    
    getRecp();
    //alert('A name was submitted: ' + this.state.value);
    //setModalShow(true);
    console.log(textSrcInput+' A name was submitted: ' + textDestInput);
    event.preventDefault();
  }
const [modalShow, setModalShow] = React.useState(false);
const items = [];

  return (
    
      <div className='App'>
      <div className='fbody'>
      <h2>AltiMetrik Flight Services </h2>
      {recpFlag1 &&
      <form onSubmit={this.handleSubmit}>
      <table>
      <tr><td>
        <label>
          Source : 
        </label>
        </td>
        <td ><input type="text" ref ={textSrcInput} onChange={handleChange} /></td></tr>
        <tr><td><label>
          Destination : </label></td>
        <td ><input type="text" ref ={textDestInput}  onChange={handleChange}/></td></tr>
        <tr><td></td><td>
        
        <input onClick={getRecp} type='button' value='Search Flights'/></td></tr>
        <tr><td></td><td></td></tr>
        </table>
        <ul>
          {responseData.map((value, index) => {
            return <KGK title={value} />
          })}
        </ul>

      </form>
      }
      <Hello name={recpFlag2}/>
    
        <p>
          Best flights available with 10% discount
        </p>
        </div>
      </div>
    );
  };

  render(<App />, document.getElementById('root'));