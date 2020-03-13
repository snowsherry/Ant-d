import React from 'react';
import LayoutContain from "./layout";
const {Component} = React;

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<LayoutContain></LayoutContain>);
    }
}

export default Main;