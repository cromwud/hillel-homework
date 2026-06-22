import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSwapiData } from '../../store/swapiSlice';
import './SwapiConsole.css';

function SwapiConsole() {
  const [endpoint, setEndpoint] = useState('people/1');
  const dispatch = useDispatch();
  
  const { data, loading, error } = useSelector((state) => state.swapi);

  const handleGetInfo = () => {
    if (!endpoint.trim()) return;
    dispatch(fetchSwapiData(endpoint));
  };

  return (
    <div className="swapi-box">
      <h1 className="swapi-logo">SWAPI</h1>
      
      <div className="input-group">
        <span className="base-url">https://swapi.py4e.com/api/</span>
        <input 
          type="text" 
          value={endpoint} 
          onChange={(e) => setEndpoint(e.target.value)} 
          className="endpoint-input"
        />
        <button onClick={handleGetInfo} className="get-btn">Get info</button>
      </div>

      <div className="badge-container">
        <span className="badge">people</span>
        <span className="badge badge-dark">1</span>
      </div>

      <div className="response-display">
        {loading && <p className="status-text">Завантаження...</p>}
        {error && <p className="status-text error-text">Помилка: {error}</p>}
        {!loading && !error && data && (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )}
        {!loading && !error && !data && <p className="status-text text-muted">Немає даних. Натисніть "Get info".</p>}
      </div>
    </div>
  );
}

export default SwapiConsole;