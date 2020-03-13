import React from 'react';
import {Layout,Menu} from 'antd'
import {menu} from "../common/constant";
import LayoutRouter from "./LayoutRouter";


const {Sider,Header,Content,Footer}=Layout;
const {Item,SubMenu}=Menu;
const {Component} = React;


class LayoutContain extends Component {
    constructor(props) {
        super(props);
    }
    renderMenu(){
         return <Menu
             mode="inline"
             theme='dark'
         >
             {
                 this.renderChildMenu(menu)
             }
         </Menu>
    }
    renderChildMenu(menu){
      return   menu.map(menuItem=>{
            return menuItem.children&&menuItem.children.length>0?(
                <SubMenu
                    title={menuItem.name}
                    key={menuItem.id}
                >
                    {this.renderChildMenu(menuItem.children)}
                </SubMenu>
            ):(
                <Item
                    key={menuItem.id}
                >{menuItem.name}</Item>
            );
        })
    }
    render() {
        return (
            <Layout>
                <Sider
                    style={
                        {
                            height:'100vh',
                            overflow:'auto'
                        }
                    }
                >
                   {this.renderMenu()}
                </Sider>
                <Layout style={{
                    display:"flex",
                    height:"100vh",
                    flexDirection:"column",
                }}>
                    <Header
                        style={{
                            backgroundColor:"#fff"
                        }}
                    >头部</Header>
                    <Content style={{
                        overflow: 'scroll'
                    }}>
                        <LayoutRouter></LayoutRouter>
                    </Content>
                    <Footer>Hello,world</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default LayoutContain;