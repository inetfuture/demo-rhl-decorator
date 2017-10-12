import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Route } from 'react-router-dom';

import * as actions from './state';
import './index.less';
import Tickets from './Tickets';

const { Sider, Header, Content } = Layout;

@connect(
  (state) => ({ ...state.console }),
  actions
)
export default class Console extends Component {
  static propTypes = {
    siderMenuSelectedKey: PropTypes.string,
  }

  onClickLogo = () => {
    this.props.setState({ siderMenuSelectedKey: 'logs' });
  }

  render = () => {
    return (
      <Layout className="console">
        <Sider className="sider">
          <div className="logo" onClick={this.onClickLogo}>SRE <b>Admin2d</b></div>
          <Menu theme="dark" selectedKeys={[this.props.siderMenuSelectedKey]} mode="inline">
            <Menu.Item key="tickets">
              <Icon type="code-o" />
              <span>Tickets</span>
            </Menu.Item>
            <Menu.Item key="logs">
              <Icon type="exception" />
              <span>Logs</span>
            </Menu.Item>
            <Menu.Item key="alerts">
              <Icon type="exclamation-circle-o" />
              <span>Alerts</span>
            </Menu.Item>
            <Menu.Item key="users">
              <Icon type="usergroup-add" />
              <span>Users</span>
            </Menu.Item>
            <Menu.Item key="settings">
              <Icon type="setting" />
              <span>Settings</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="header" />
          <Content className="content">
            <Breadcrumb className="breadcrumb">
              <Breadcrumb.Item>SRE Admin</Breadcrumb.Item>
              <Breadcrumb.Item>Tickets</Breadcrumb.Item>
            </Breadcrumb>
            <Route path="/tickets" component={Tickets} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}
