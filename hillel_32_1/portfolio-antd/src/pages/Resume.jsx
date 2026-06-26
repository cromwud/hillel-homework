
import React from 'react';
import { Row, Col, Card, Tag, Timeline, Progress, Divider } from 'antd';
import { MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Typography as AntdTypography } from 'antd';
const { Title, Paragraph, Text } = AntdTypography;

const Resume = () => {
  return (
    <div style={{ padding: '20px 0' }}>
      <Row gutter={[24, 24]}>
      
        <Col xs={24} md={8}>
          <Card text-align="center" bordered={false} style={{ background: '#fafafa' }}>
            <Title level={2}>Олег</Title>
            <Paragraph type="secondary">Frontend Developer (React)</Paragraph>
            <Divider />
            <div style={{ textAlign: 'left' }}>
              <Paragraph><EnvironmentOutlined /> Київ, Україна</Paragraph>
              <Paragraph><MailOutlined /> kosarnijoleg@example.com</Paragraph>
            </div>
            <Divider orientation="left">Навички</Divider>
            <div style={{ marginBottom: 15 }}>
              <Text>JavaScript / TypeScript</Text>
              <Progress percent={85} status="active" />
            </div>
            <div style={{ marginBottom: 15 }}>
              <Text>React / Redux (Saga)</Text>
              <Progress percent={80} status="active" />
            </div>
            <div>
              <Text>HTML5 / CSS3</Text>
              <Progress percent={90} status="active" />
            </div>
          </Card>
        </Col>

      
        <Col xs={24} md={16}>
          <Title level={3}>Про себе</Title>
          <Paragraph style={{ fontSize: '16px' }}>
            Я захоплений розробкою сучасних веб-додатків. Створюю чистий, масштабований код.
          </Paragraph>

          <Divider orientation="left">Стек технологій</Divider>
          <div style={{ marginBottom: '24px' }}>
            <Tag color="blue">React</Tag>
            <Tag color="cyan">TypeScript</Tag>
            <Tag color="purple">Redux Saga</Tag>
            <Tag color="orange">Vite</Tag>
        
          </div>

          <Divider orientation="left">Досвід та Освіта</Divider>
          <Timeline
            items={[
              {
                color: 'green',
                children: (
                  <>
                    <Text strong>Освіта - Спеціальність "Економічна кібернетика та ШІ"</Text>
                    <p>КНЕУ, 2025 - Теперішній час</p>
                  </>
                ),
              },
              {
                color: 'blue',
                children: (
                  <>
                    <Text strong>Курс Frontend Development</Text>
                    <p>Hillel IT School, 2026</p>
                  </>
                ),
              },
              {
                children: (
                  <>
                    <Text strong>Створення власних веб-проєктів</Text>
                    <p>Розробка адаптивних сайтів.</p>
                  </>
                ),
              },
            ]}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Resume;