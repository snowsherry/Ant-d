import React from 'react';
import {tableData} from "../../common/constant";
import {Table,Tag} from 'antd'

const {Component} = React;
const {data:dataSource}=tableData;
dataSource.splice(100);
dataSource.forEach((item,i)=>{
    dataSource[i]['key']=item.boqCode;
})
console.log('dataSource',dataSource);
let num=0;
const TagItem=({id,children,...rest})=>{
    console.log('children',children,"id",id,'rest',rest)
    return id==1?(
        <Tag color='success'>标配{children}</Tag>
    ):(
        <Tag color='error'>选配{children}</Tag>
    )

}
class TableContain extends Component {
    constructor(props) {
        super(props);
    }
    columns=[
        {
          dataIndex:"boqCode",
            key:"boqCode",
            title:"项目编码"
        },
        {
            dataIndex:"boqItem",
            key:"boqItem",
            title:"项目名称"
        },
        // {
        //     dataIndex:"boqItem",
        //     key:"boqItem",
        //     title:"项目名称"
        // },
        {
            dataIndex:"customType",
            key:"customType",
            title:"选装类型",
            align:"center",
            width:160,
            filters:[
                {
                    text:"标配",
                    value:1
                },
                {
                    text:"选配",
                    value:3
                }
            ],
            onFilter:(value,record)=>{
                console.log(value,record);// value为当前record可以匹配到的值？
                num++;
                console.log('num',num);
               return  record.customType==value;
            },
            render:
                (customType)=>
                    <TagItem id={customType}>hello</TagItem>


        },
        {
            dataIndex:"space",
            key:"space",
            title:"空间"
        },

        {
            dataIndex:"quantity",
            key:"quantity",
            title:"工程量",
            fixed:"right",
            width:100,
            sorter:(a,b)=>a.quantity-b.quantity,
           // sortDirections: ['descend'], //可选的方向
            //defaultSortOrder:'descend',
        },
        {
            dataIndex:"changeQuantity",
            key:"changeQuantity",
            title:"调整工程量",
            fixed:"right",
            width:120,
            render:()=>{
               return <div>888</div>
            }
        },

    ];
    render() {
        return (
            <Table
                pagination={false}
                columns={this.columns}
                dataSource={dataSource}
                scroll={{x:1200}}
            ></Table>
        );
    }
}

export default TableContain;