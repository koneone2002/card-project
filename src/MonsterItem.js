import React from 'react';

const MonsterItem = ({ monster }) => {
  const { name, email, id } = monster;
  return (
    <div className='container'>
      <div className='card-container'>
        <img
          alt='monster'
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h1 className='name'>{name}</h1>
        <p className='lead'>{email}</p>
      </div>
    </div>
  );
};

export default MonsterItem;
