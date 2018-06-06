import React, { Component } from 'react';
import { List,Row,Col } from 'antd';
import 'antd/dist/antd.css';

const data=[
    {key:'姓名', value:'刘希超'},
    {key:'性别',value:'男'},
    {key:'工作年限',value:'2年'},
    {key:'联系方式',value:'13780607152'},
    // {key:'邮箱',value:'13520120436@163.com'},
    {key:'学校',value:'江苏大学'},
    {key:'学历',value:'本科'},
    {key:'毕业时间',value:'2016年6月'},
    {key:'英语等级',value:'CET-6'},
    {key:'现居地',value:'山东青岛'},
    {key:'户口所在地',value:'山东烟台'}
];
export  default class Home extends Component {
    render() {
        return (
            <List
                bordered
                dataSource={data}
                renderItem={item => (<List.Item>
                    <Row style={{width:'100%'}}>
                        <Col span={10}  style={{textAlign:'right'}}>{item.key}:&nbsp;&nbsp;&nbsp;</Col>
                        <Col span={14}>{item.value}</Col>
                    </Row>
                </List.Item>)}
            />
        );
    }
}