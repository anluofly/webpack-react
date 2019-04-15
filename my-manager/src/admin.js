import React from 'react'
import { Row, Col  } from 'antd';
import Header from './components/Header' // 不加index.js 因为默认加载index.js
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'

import './style/common.less'

// import { a } from { a, b }

export default class Admin extends React.Component {
    render() {
        return (
            // 只能有一个根组件
            <Row className="container">
                <Col span={4} className="nav-left">
                    <NavLeft/>
                </Col >
                <Col span={20} className="main">
                    <Header />
                    <Row className="content">
                        {/* <Home/> */}
                        {this.props.children}
                    </Row>
                    <Footer/>
                </Col >
            </Row>
        );
    }
}