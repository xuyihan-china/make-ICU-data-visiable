import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb , Row, Col} from 'antd'
import Card from './SonComponent/card'
import store from '../store/index';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import '../ComponentCss/layOut.css'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class LayOut extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        store.subscribe(this.getData)
    }
    
    render() {
        return (
            <div>
                <Layout>
                    <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%' }} >
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} >
                            <Menu.Item key="1">blank</Menu.Item>
                            <Menu.Item key="2">blank2</Menu.Item>
                            <Menu.Item key="3">查看信息</Menu.Item>
                            <Menu.Item key="4">添加信息</Menu.Item>
                            <Menu.Item key="5">返回首页</Menu.Item>

                        </Menu>
                    </Header>
                    <Layout>
                        <Sider width={200} className="site-layout-background" style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            zIndex: 1,
                            paddingTop: 64
                        }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}

                            >
                                <SubMenu key="sub1" icon={<UserOutlined />} title="监护数据">
                                    <Menu.Item key="1">1号病房</Menu.Item>
                                    <Menu.Item key="2">2号病房</Menu.Item>
                                    <Menu.Item key="3">3号病房</Menu.Item>
                                    <Menu.Item key="4">4号病房</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined />} title="生命体征">
                                    <Menu.Item key="5">1号病房</Menu.Item>
                                    <Menu.Item key="6">2号病房</Menu.Item>
                                    <Menu.Item key="7">3号病房</Menu.Item>
                                    <Menu.Item key="8">4号病房</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined />} title="预警信息">
                                    <Menu.Item key="9">ICU大厅</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                className="site-layout-background"
                                style={{ margin: '24px 16px 24px 224px', overflow: 'initial', backgroundColor: '#e6f7ff' }}
                            >
                                
                                    <Row className="cardRow">
                                        <Col span={6}><Card /></Col>
                                        <Col span={6}><Card /></Col>
                                        <Col span={6}><Card /></Col>
                                        <Col span={6}><Card /></Col>
                                    </Row>
                                
                                    <Row className="cardRow">
                                        <Col span={6}><Card /></Col>
                                        <Col span={6}><Card /></Col>
                                        <Col span={6}><Card /></Col>
                                        <Col span={6}><Card /></Col>
                                    </Row>

                                    <Row className="cardRow">
                                        <Col span={6}><Card /></Col>
                                        <Col span={6}><Card /></Col>
                                        <Col span={6}><Card /></Col>
                                        <Col span={6}><Card /></Col>
                                    </Row>

                                    <Row className="cardRow">
                                        <Col span={6}><Card /></Col>
                                        <Col span={6}><Card /></Col>
                                        <Col span={6}><Card /></Col>
                                        <Col span={6}><Card /></Col>
                                    </Row>

                                    <Row className="cardRow">
                                        <Col span={6}><Card /></Col>
                                        <Col span={6}><Card /></Col>
                                        <Col span={6}><Card /></Col>
                                        <Col span={6}><Card /></Col>
                                    </Row>

                                    <Row className="cardRow">
                                        <Col span={6}><Card /></Col>
                                        <Col span={6}><Card /></Col>
                                        <Col span={6}><Card /></Col>
                                        <Col span={6}><Card /></Col>
                                    </Row>

                                    <Row className="cardRow">
                                        <Col span={6}><Card /></Col>
                                        <Col span={6}><Card /></Col>
                                        <Col span={6}><Card /></Col>
                                        <Col span={6}><Card /></Col>
                                    </Row>

                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        );
    }
    getData =()=>{
        this.setState(store.getState())
    }
     

}

export default LayOut;