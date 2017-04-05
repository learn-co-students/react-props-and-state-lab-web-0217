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
    this.onFilterChange = this.onFilterChange.bind(this)
    this.getPets = this.getPets.bind(this)
    this.onAdoptPet = this.onAdoptPet.bind(this)
  }

  onFilterChange(filter) {
    this.setState({
      filters: {
        type: filter
      }
    })
  }

  onAdoptPet(id) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  getPets() {
    let resp
    let {filters: {type}} = this.state
    if (type === "all") {
      resp = fetch(`/api/pets`)
    } else {
      resp = fetch(`/api/pets?type=${this.state.filters.type}`)
    }
    resp.then(response => response.json() )
    .then(pets => this.setState({ pets }))
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
              <Filters filters={this.state.filters} onFindPetsClick={this.getPets} onChangeType={this.onFilterChange} />
            </div>
            <div className="twelve wide column">
              <PetBrowser  pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
