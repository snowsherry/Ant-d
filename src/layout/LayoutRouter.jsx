import React from 'react';
import {Switch,HashRouter,Route} from 'react-router-dom'
import TableContain from "../page/Table";
import DrawContain from "../page/Draw";
import ModalContain from '../page/Modal/ModalContain'
import Echarts from '../page/Echarts'
const {Component} = React;

class LayoutRouter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path={'/table'} component={TableContain}></Route>
                    <Route path={'/draw'} component={DrawContain}></Route>
                    <Route path={'/modal'} component={ModalContain}></Route>
                    <Route path={'/echarts'} component={Echarts}></Route>

                    <Route render={()=><div>No thing</div>}></Route>
                </Switch>
            </HashRouter>
        );
    }
}

export default LayoutRouter;