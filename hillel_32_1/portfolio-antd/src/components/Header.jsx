
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { UserOutlined, CheckSquareOutlined, GlobalOutlined } from '@ant-design/icons';

const { Header } = Layout;

const AppHeader = () => {
  const location = useLocation();

  const menuItems = [
    { key: '/', label: <Link to="/">Резюме</Link>, icon: <UserOutlined /> },
    { key: '/todo', label: <Link to="/todo">TODO</Link>, icon: <CheckSquareOutlined /> },
    { key: '/swapi', label: <Link to="/swapi">SWAPI API</Link>, icon: <GlobalOutlined /> },
  ];

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', display: 'flex', alignItems: 'center' }}>
      <div style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', marginRight: '40px' }}>
        MyPortfolio
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[location.pathname]}
        items={menuItems}
        style={{ flex: 1, minWidth: 0 }}
      />
    </Header>
  );
};

export default AppHeader;