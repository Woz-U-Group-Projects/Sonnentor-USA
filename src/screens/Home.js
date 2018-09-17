import React from "react";



export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: [2]
        }
    }

    componentDidMount(){
        fetch("http://localhost:5000/api/values")
            .then(response => response.json())
            .then(resp => this.setState({...this.state, values: resp }))
    }

    render(){
        return (
            <div>
            <img src="C:\Users\TheSchnipe\Desktop\Website\my-app\assets\products\logo.png"></img>
                <p>Welcome to the Sonnentor USA Website!</p>
                <p>Sorry for the lack of content, we are currently updating the website!</p>
                {this.state.values.map((value, i) => <p key={i}>{value}</p>)}
            </div>
        );
    }
}
