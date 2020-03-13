import React from 'react';
import {Button,Drawer} from 'antd'
import MyDraw from "./MyDraw";
import DrawForm,{DrawF} from "./MyForm";
const {Component,Fragment} = React;

class DrawContain extends Component {
    constructor(props) {
        super(props);
        this.state={
            visible:false,
        }
    }
    showDrawer=()=>{
        this.setState({visible:true})
    }
    onClose=()=>{
        this.setState({
            visible:false
        })
    }
    render() {
        let {visible}=this.state;
        return (
            <Fragment>
             <Button type='primary' onClick={this.showDrawer}>新建列表</Button>
                <Drawer
                    visible={visible}
                    onClose={this.onClose}
                    closable={true}
                >
                <DrawF></DrawF>
                </Drawer>
            </Fragment>
        );
    }
}

export default DrawContain;