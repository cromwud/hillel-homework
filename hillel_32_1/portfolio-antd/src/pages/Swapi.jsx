
import React, { useState, useEffect } from 'react';
import { Typography, Table, Spin, Alert } from 'antd';
import axios from 'axios';

const { Title } = Typography;

const Swapi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://swapi.py4e.com/api/people/') 
      .then(response => {
     
        const formattedData = response.data.results.map((item, index) => ({
          ...item,
          key: index,
        }));
        setData(formattedData);
        setLoading(false);
      })
      .catch(err => {
        setError('Не вдалося завантажити дані з екосистеми SWAPI.');
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      title: 'Ім\'я',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: 'Рік народження',
      dataIndex: 'birth_year',
      key: 'birth_year',
    },
    {
      title: 'Стать',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Зріст (см)',
      dataIndex: 'height',
      key: 'height',
    },
  ];

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px 0' }}>
        <Spin size="large" tip="Завантаження персонажів далекої-далекої галактики..." />
      </div>
    );
  }

  if (error) {
    return <Alert message="Помилка" description={error} type="error" showIcon style={{ margin: '20px 0' }} />;
  }

  return (
    <div style={{ padding: '20px 0' }}>
      <Title level={2} style={{ marginBottom: 20 }}>Персонажі Star Wars (SWAPI)</Title>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default Swapi;