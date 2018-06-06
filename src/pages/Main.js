/**
 * 首页
 */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import { Row, Col,Menu,Icon,Layout } from 'antd';
import Home from "../components/Home";
import Project from "../components/Project";
import Skill from "../components/Skill";
import Work from "../components/Work";
import 'antd/dist/antd.css';

import '../App.css'
import port from '../asset/img/port.jpg'
const { Header, Content } = Layout;
export  default class Main extends Component {
    render() {
        return (
            <Router>
                <Layout className="layout">
                    <Header>
                        <Row style={{lineHeight:'64px'}}>
                            <Col span={8} offset={2} style={{color:'white'}} className='head' >刘希超的简历：基于react+react-router@4+redux+antd创建</Col>
                            <Col span={12} className='head'>
                                <Menu
                                    theme="dark"
                                    mode="horizontal"
                                    style={{lineHeight:'64px'}}
                                >
                                    <Menu.Item key="mail">
                                        <Link to="/"> <Icon type="idcard" />个人信息</Link>
                                    </Menu.Item>
                                    <Menu.Item key="app">
                                        <Link to="project"><Icon type="folder" />项目经验</Link>
                                    </Menu.Item>
                                    {/*<Menu.Item key="skill">*/}
                                        {/*<Link to="/skill"> <Icon type="tool" />专业技能</Link>*/}
                                    {/*</Menu.Item>*/}
                                    {/*<Menu.Item key="work">*/}
                                        {/*<Link to="/work"> <Icon type="calendar" />工作经历</Link>*/}
                                    {/*</Menu.Item>*/}
                                </Menu>
                            </Col>
                            <Col span={24} className='nav'>
                                <Menu
                                    theme="dark"
                                    mode="horizontal"
                                    style={{lineHeight:'64px'}}
                                >
                                    <Menu.Item key="mail">
                                        <Link to="/"> <Icon type="idcard" />个人信息</Link>
                                    </Menu.Item>
                                    <Menu.Item key="app">
                                        <Link to="project"><Icon type="folder" />项目经验</Link>
                                    </Menu.Item>
                                    {/*<Menu.Item key="skill">*/}
                                    {/*<Link to="/skill"> <Icon type="tool" />专业技能</Link>*/}
                                    {/*</Menu.Item>*/}
                                    {/*<Menu.Item key="work">*/}
                                    {/*<Link to="/work"> <Icon type="calendar" />工作经历</Link>*/}
                                    {/*</Menu.Item>*/}
                                </Menu>
                            </Col>
                            <Col className='head'>
                                <img src={port} style={{height:'58px'}} alt=""/>
                            </Col>
                        </Row>
                    </Header>
                    <Content style={{ padding: '0 50px',marginTop:'50px' }}>
                        <div style={{ background: '#fff', padding: 24, minHeight: 800 }}>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/project" component={Project} />
                                <Route path="/work" component={Work} />
                                <Route path="/skill" component={Skill} />
                            </Switch>
                        </div>
                    </Content>
                    {/*<Footer style={{ textAlign: 'center' }}>*/}
                        {/*Created by liuxichao*/}
                    {/*</Footer>*/}
                </Layout>
            </Router>
        );
    }
}