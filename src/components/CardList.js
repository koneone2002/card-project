import React from 'react';
import MonsterItem from '../MonsterItem';

const CardList = props => {
  return (
    <div className='card-list'>
      {props.monsters.map(monster => (
        <MonsterItem key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
