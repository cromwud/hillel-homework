
import React from 'react';
import { Layout, Space } from 'antd';
import { GithubOutlined, MailOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: 'center', background: '#001529', color: '#rgba(255,255,255,0.65)' }}>
      <div style={{ color: '#fff', marginBottom: '10px' }}>Контакти</div>
      <Space size="large" style={{ fontSize: '20px' }}>
        
        <a href="https://github.com/cromwud" target="_blank" rel="noreferrer" style={{ color: '#fff' }}><GithubOutlined /></a>
        <a href="https://www.linkedin.com/in/oleg-kosharnyi-2171043a5/?locale=ru" target="_blank" rel="noreferrer" style={{ color: '#fff' }}><LinkedinOutlined /></a>
      </Space>
      <div style={{ marginTop: '10px', fontSize: '12px', color: '#8c8c8c' }}>
        ©{new Date().getFullYear()} Створено за допомогою Ant Design
      </div>
    </Footer>
  );
};

export default AppFooter;