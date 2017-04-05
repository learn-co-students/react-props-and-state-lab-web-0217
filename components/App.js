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
    this.handleChangeFilterType = this.handleChangeFilterType.bind(this);
    this.handleAdoptedPet = this.handleAdoptedPet.bind(this);
    this.fetchPets = this.fetchPets.bind(this);
  }

  handleChangeFilterType(type){
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type,
      })
    })
  }

  handleAdoptedPet(id){
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  fetchPets(){
    let url = '/api/pets';

    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({ pets }));
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
              <Filters
                filters={this.state.filters}
                onChangeType={this.handleChangeFilterType}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pet={this.state.pets}
                onAdoptPet={this.handleAdoptedPet}
                adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
