import React,{useCallback,useEffect,useState,createContext,useRef} from 'react';
import {Modal,Button,Table,Form,Input,Checkbox} from 'antd'
const {Component} = React;
const {Item}=Form;
const {Group}=Checkbox

class MyForm   extends Component {
    constructor(props) {
        super(props);
    }
   // form={};
    // form=Form.useForm()[0];
     Reset=()=>{
        this.form.resetFields();
    }
   // [gender,updateGender]=useState(['male']);
     genders=['male','female'];
  //  const defaultGender=['male'];
      onGenderChange=(value)=>{
            console.log('gender',value);
            //updateGender(value);
    }
     getV=()=>{
       this.form.validateFields().then(res=>{
            console.log('res',res)
          // doSubmit(res);
           //Reset();
       }).catch(e=>{
           console.error('e',e)
       })
    }
    // useEffect(()=>{
    //     form.setFieldsValue({
    //         'gender':gender
    //     })
    // },[]);
    render(){
     return   (
            <Form
                //form={this.form}

            >
                <Item
                    name="title"
                    rules={[{
                        required:true,
                        message:"需要标题"

                    }]}
                    label="标题"
                >
                    <Input  placeholder="输入标题" />
                </Item>

                <Item
                    name="content"
                    rules={[{
                        required:true,
                        message:"需要内容"

                    }]}
                    label="内容"
                >
                    <Input  placeholder="输入内容" />
                </Item>

                <Item
                    name="gender"
                    rules={[{
                        required:true,
                        message:"需要性别"

                    }]}
                    label="性别"
                >
                    <Group
                        options={this.genders}
                        value={this.gender}
                        onChange={this.onGenderChange}
                    ></Group>

                </Item>
                {/*<Input  placeholder="输入标题" value={dv} />*/}
                <Button type={"primary"}  onClick={this.getV}>确定</Button>

            </Form>
        )
    }

}
class MyForm2 extends  Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {getFieldDecorator}=this.props.form;
      return  (
          <div>
          <Item label="标题">
              {getFieldDecorator('name',{
                rules:[
                    {   required:true,
                        message:"inputV"
                    }
                ]
              })(<Input />)}
          </Item>
              <Item label="内容">
                  {getFieldDecorator('content',{
                      rules:[
                          {   required:true,
                              message:"input Content"
                          }
                      ]
                  })(<Input />)}
              </Item>
          </div>
      )
    }
}
class ModalContain extends Component {
    constructor(props) {
        super(props);
    }
    formRef= React.createRef();
    state={
        visible:true,
        dataSource:[],
    }
    onCancel=()=>{
        this.setState({
            visible:false
        })
    }
    onOk=()=>{
        console.log('this.formRef',this.formRef)//React 获取Ref的方法而已
        this.formRef.current.validateFields().then(res=>{
            console.log(res);
          //  this.formRef.current
        }).catch(e=>{

        })
       // console.log('ref',this.refs.rf);
    }
    doSubmit=(item)=>{
        item=Object.assign({key:item.title},item);
        console.log('item',item);
        this.setState({
            visible:false,
            dataSource:[...this.state.dataSource,item],
        })
    }
    columns=[
        {
            dataIndex:"title",
            title:"标题",
            key:"title",

        },
        {
            dataIndex:"content",
            title:"内容",
            key:"content"
        }
    ];
    render() {
        const {visible,dataSource}=this.state;
        return (
            <React.Fragment>
                <Button type='primary' onClick={()=>{this.setState({visible:true})}}>新建行</Button>
                <Table
                    columns={this.columns}
                    dataSource={dataSource}
                ></Table>
                <Modal
                    title={'新建文章'}
                    visible={visible}
                    onCancel={this.onCancel}
                    onOk={this.onOk}
                >
                    {/*<WrapedForm doSubmit={this.doSubmit}  wrappedComponentRef={(inst) => this.formRef = inst}/>*/}
                    <MyForm doSubmit={this.doSubmit}  ref={this.formRef}/>
                </Modal>
            </React.Fragment>

        );
    }
}

export default ModalContain;