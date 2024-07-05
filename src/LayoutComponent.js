import React, { useState } from 'react';
import { Layout, Menu, Button, theme } from 'antd';
import { 
  MenuFoldOutlined, 
  MenuUnfoldOutlined, 
  UploadOutlined, 
  UserOutlined, 
  VideoCameraOutlined 
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const LayoutComponent = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  const items = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'Home',
      onClick: () => navigate('/'),
    },
    {
      key: '2',
      icon: <VideoCameraOutlined />,
      label: 'Performance',
      onClick: () => navigate('/perf'),
    },
    {
      key: '3',
      icon: <UploadOutlined />,
      label: 'Documentation',
      onClick: () => navigate('/doc'),
    },
  ];

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: '24px',
            paddingRight: '24px',
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <span style={{ fontSize: '18px', fontWeight: 'bold', marginRight: 'auto' }}>AI ASSISTANT</span>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 75,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
