import React from 'react';
import {Tabs} from 'antd'
const {TabPane} =Tabs;
const {Component} = React;



export  const  DrawF=(props)=>{
    const tabs=[
        {
            key:"10",
            title:"订购单"
        },
        {
            key:"20",
            title:"采购单"
        }
    ]
    const Context=(i)=> <div>{tabs[i]['title'] + Math.random()}</div>;




    const handleChange=(val)=>{
        console.log('val',val);
    }
    const SetTab=()=>{
      return   <Tabs onChange={handleChange}>
            {(tabs).map(((tabItem,i)=>
                    (
                        <TabPane key={i} tab={tabItem.title}>
                            {Context(i)}
                        </TabPane>
                    )
            ))}
        </Tabs>
    }
    return (
        <div>
            {SetTab()}
        </div>

    )
}
class DrawForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>11</div>
        );
    }
}

export default DrawForm;