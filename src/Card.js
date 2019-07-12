import React, { Component } from 'react';
import image from './puce-card.png';
import imageright from './image-right.png';
import './Card.css';

class HelloUser extends React.Component {
 
  
  constructor(props) {
    super(props)
    this.state = {
      name: 'unknown',
      // number: '****************',
     laceholder : '****************',
      value: '',
      month: 'xx',
      day: 'xx'
      
    }
  }
  
// This method is declared using an arrow function initializer solely
  // to guarantee its binding, as we cannot use decorators just yet.
  handleChange = ({ target: { value } }) => {
    value = value
      // Remove all non-digits
      .replace(/\D+/, '')
      // Stick to first 16, ignore later digits
      .slice(0, 16)
      // Add a space after any 4-digit group followed by more digits
      .replace(/(\d{4})(?=\d)/g, '$1 ')
    this.setState({ value })
  }

nameChange(n) {
 
   
  this.setState({
    name: n.target.value.substr(0,20).toUpperCase()
  });
}

//Card Number

// numberChange(c) {
//   this.setState({
    
//     laceholder: c.target.value
//   });
// }
//Expiration
monthChange(m) {
  this.setState({
   month: m.target.value
  });
}
dayChange(d) {
  this.setState({
   day: d.target.value
  });
}


render() {

  const {  laceholder } = this.props
 return <div className="container " >
   <div className="row ">
     <div className="col-lg-6">
     <div className="card">
       <div className="main">
          <div className="exemple">
                  <h1> <strong className="title">CREDIT CARD </strong></h1>
          </div>
          <div className="image">
            <img className="puce" src={image} alt=""/>
          </div>
          <div className="rib">
             <span className="chiffre">{this.state.laceholder}</span>
          </div>
        
          <div  className="digits">
            
            <div className="first-digit"><strong> 5422</strong></div>
            <div className="left">
            <div className="second-digit"> VALID <br/>THRU </div>
            <div className="third-digit">
                  <div className="upper-labels">MONTH/YEAR</div>
                  <div className="date" title="01/17">
                         
                     <p className="mar">{this.state.month} / {this.state.day}</p>    </div>    
            </div>
            </div>
            
        </div>
        <div className="footer">
             <h3 className=" pad">{this.state.name}</h3>
             
          </div>
          <div className="image-right">
            <img className="right" src={imageright} alt=""/>
          </div>
          
   </div>
   </div>
   </div>
                 <div className="container">
                 <div className="row">
                   
     <div className="col-lg-6">
                   <div className="org">
                    <label>NAME
                    <input type="text" className="label2"  maxLength="20" onChange={this.nameChange.bind(this)}/>
                    </label>
                    <label>NUMBER
                    <input type="text"className="label3" maxLength="16" 
                      onChange={this.handleChange}
                       laceholder={laceholder}
                       value={this.state.value}
                       
                      />
                   </label>
                   <div className="row">
                   <label className="column">EXPIRATION DATE</label>
       
                      <input type="text" maxLength="2" onChange={this.monthChange.bind(this)} />
                      <input type="text" maxLength="2" onChange={this.dayChange.bind(this)}/>
      
                  
                   </div>
                   </div>
                 </div>
                 </div>
                 </div>
   </div>
   </div>
   
     
      
}};
export default HelloUser;
