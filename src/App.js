import React, { Component } from 'react';
import MonsterItem from './MonsterItem';

class App extends Component {
  state = {
    monsters: []
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())

      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className='container'>
        {this.state.monsters.map(monster => (
          <MonsterItem key={monster.id} monster={monster} />
        ))}
      </div>
    );
  }
}

export default App;
