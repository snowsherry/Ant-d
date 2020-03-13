import React from 'react';
import {Drawer} from 'antd';
const {Component} = React;

class MyDraw extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {visible,close,closable,...rest}=this.props;
        return (
            <Drawer
                title={"hello,world"}
                visible={visible}
                onClose={this.close}
                closable={true}
                width={800}
            >

            </Drawer>
        );
    }
}

export default MyDraw;