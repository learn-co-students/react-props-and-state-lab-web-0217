const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

class App extends React.Component {
  constructor() {
    super();

    this.onChangeType = this.onChangeType.bind(this)
    this.onAdoptPet = this.onAdoptPet.bind(this)
    this.onFindPetsClick = this.onFindPetsClick.bind(this)

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all'
      }
    };
  }

  onChangeType(type) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type
      })
    })
  }
  onAdoptPet(id) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  onFindPetsClick() {
    let type = this.state.filters.type
    let pets
    let self = this
    if (type == 'all') {
      fetch('/api/pets')
      .then(function(response) {
        return response.json()
      })
      .then(function(petsAPI) {
        self.setState({
          pets: petsAPI
        })
      })
    } else {
      fetch(`/api/pets?type=${type}`)
      .then(function(response) {
        return response.json()
      })
      .then(function(petsAPI) {
        self.setState({
          pets: petsAPI
        })
      })
    }
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
              <Filters filters={this.state.filters} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
