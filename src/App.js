import React, { Component } from 'react';
import CardList from './components/CardList';
import Search from './components/Search';
class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())

      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='container-one'>
        <h1 className='title'>Monsters Rolodex</h1>
        <Search
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
