import React from 'react';

// В скобках мы принимаем props (свойства), которые будем передавать карточке
const CharacterCard = ({ name, height, mass, gender, birthYear }) => {
  return (
    // Классы col-12, col-md-6 - это сетка Bootstrap (чтобы на телефоне была 1 колонка, на ПК - 3)
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      
      {/* Класс character-card берется из нашего CSS, а card и h-100 - из Bootstrap */}
      <div className="card character-card h-100 p-3">
        <div className="card-body">
          <h5 className="card-title mb-3">{name}</h5>
          
          <div className="d-flex justify-content-between mb-2">
            <span className="stat-label">Зріст:</span>
            <span className="stat-value">{height} см</span>
          </div>
          
          <div className="d-flex justify-content-between mb-2">
            <span className="stat-label">Вага:</span>
            <span className="stat-value">{mass} кг</span>
          </div>
          
          <div className="d-flex justify-content-between mb-2">
            <span className="stat-label">Стать:</span>
            <span className="stat-value">{gender}</span>
          </div>
          
          <div className="d-flex justify-content-between">
            <span className="stat-label">Рік народження:</span>
            <span className="stat-value">{birthYear}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;