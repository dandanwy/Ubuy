import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import { Layout, Menu, Breadcrumb, Icon, Carousel, BackTop } from 'antd';
import * as ciaAction from './ciaAction';
import { browserHistory } from 'react-router';
import './cia.scss';
const { Header, Footer, Content } = Layout;
class ciaComponent extends React.Component {

    render(){
        return(
            <div id="box">
                <Layout>
                    <Header className="header_yj">
                        <div className="title_yj">
                            <div className="back" onClick={this.props.router.goBack}><Icon type="left" /></div>
                            <div className="cia_title">低价情报局 优惠送给你</div>
                            <div className="right"></div>
                        </div>
                    </Header>
                    <Content className="main_yj">
                        <div className="cia_box">
                            <div className="cia_pic">
                                <img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/09/1506748278032.jpg"/>
                                <img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/10/1509095685409.jpg" />
                            </div>
                            <div className="cia_pic2">
                                <img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513592111712.jpg"/>
                            </div>
                            <div className="cia_pic3">
                                <img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1513592146151.jpg" />
                            </div>
                            <div className="cia_pic4">
                                <img src="https://i1.ygimg.cn/pics/mobile/homepage/2017/12/1514197625968.jpg" />
                            </div>
                        </div>
                    </Content>
                    <Footer className="footer_yj">
                        <img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/10/1509095998782.jpg"/>
                    </Footer>
                </Layout>
            </div>
        )
    }
}

const ciaStateToProps = function (state) {
    console.log(state)
    return {
        // loading: state.search.loading,
        dataset: state.cia || []
    }

}

export default connect(ciaStateToProps, ciaAction)(ciaComponent)