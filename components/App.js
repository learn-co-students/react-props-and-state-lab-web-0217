const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };

    this.handleChangeType = this.handleChangeType.bind(this)
    this.findPets = this.findPets.bind(this)
    this.handleAdoption = this.handleAdoption.bind(this)
  }

  handleChangeType(type) {
    this.setState({
      filters: {type: type}
    })
  }

  findPets() {
    let url = `/api/pets`
    switch (this.state.filters.type) {
      case 'dog':
      url += `?type=dog`
      break
      case 'cat':
      url += `?type=cat`
      break
      case 'micropig':
      url += `?type=micropig`
      break
    }
    fetch(url)
    .then((data) => this.setState({pets: data}))
  }

  handleAdoption(id) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType={this.handleChangeType} onFindPetsClick={this.findPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.handleAdoption}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
