import React from 'react';
import ReactDOM from 'react-dom';

//const myfirstelement = <h2>Welcome to my first react app</h2>

/*This is how a class component is built
class Student extends React.Component {
    render(){
        return <h2>I am a student</h2>;
    }
}
ReactDOM.render(<Student />, document.getElementById('root'));*/

/*This is how a function component is built
function Student() {
    return <h1>Iam a student of this ui function</h1>
}

ReactDOM.render(<Student />, document.getElementById('root'));*/

/*This is how a class component is built with constructor*/
class Student extends React.Component {
    constructor(){
        super();
        this.state = {webDesign: "Dislike"};
    }
    render(){
        return <h2>I am a student who {this.state.webDesign} web design</h2>;
    }
}
ReactDOM.render(<Student />, document.getElementById('root'));