import React from 'react';

const MonsterItem = ({ monster }) => {
  const { name, email } = monster;
  return (
    <div className='container'>
      <div className='card-container'>
        <h1 className='name'>{name}</h1>
        <p className='lead'>{email}</p>
      </div>
    </div>
  );
};

export default MonsterItem;
