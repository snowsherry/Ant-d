import React from 'react';
import {Switch,HashRouter,Route} from 'react-router-dom'
import TableContain from "../page/Table";
import DrawContain from "../page/Draw";
import ModalContain from '../page/Modal/ModalContain'
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
                    <Route render={()=><div>No thing</div>}></Route>
                </Switch>
            </HashRouter>
        );
    }
}

export default LayoutRouter;