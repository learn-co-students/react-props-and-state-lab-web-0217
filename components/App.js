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
    this.updateType = this.updateType.bind(this)
    this.updateAdopt = this.updateAdopt.bind(this)
    this.fetchPets = this.fetchPets.bind(this)
  }

  updateType(type) {
    this.setState({
      filters: {
        type: type
      }
    })
  }

  updateAdopt(id) {
    let adopted = this.state.adoptedPets
    adopted.push(id)
    this.setState({
      adoptedPets: adopted
    })
  }

  fetchPets() {

    let type = this.state.filters.type
    let url = '/api/pets'
    if (type==="all") {
      url = url
    } else {
      url = url + '?type=' + type
    }
    return fetch(url, {method: 'get'}).
    then(res => res.json()).
    then(res => this.setState({pets: res}))
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
              <Filters onChangeType={this.updateType} onFindPetsClick={this.fetchPets} type={this.state.filters.type}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.updateAdopt}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
