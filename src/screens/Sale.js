import React, { Component } from "react";
import Header from "../components/Header";
import ReactDOM from "react-dom";
//import { Button }  from 'react-bootstrap';
//import {Container, Row, Col} from 'react-amazing-grid'

export default class Sale extends React.Component {

    constructor(props){
        super(props) 
          this.state = {
            spices: []      
          }
        }
        
    
componentDidMount() {
    //console.log("componentDidMount - before fetch")
    fetch('http://localhost:5000/api/values')
    //console.log("componentDidMount - after fetch")
    .then(result =>{
        //console.log("componentDidMount - results")
        return result.json();
    }).then(data => {
        let spices = data.spices.map((spices, index) => {
            return(
        <div key={index}>
        <img src={"C:\Users\TheSchnipe\Desktop\Website\my-app\assets\products\ground-cinnamon.png"} />
        </div>
        );
        });
        
        this.setState({spices: spices});
        console.log("state", this.state.spices)
    })
    }


render() {
    return (
        <div className="container2">
        <div className="container1">
        {this.state.spices}
        </div>
        </div>
    )
    };
}
ReactDOM.render(
    <Sale />,
    document.getElementById('root')
   );