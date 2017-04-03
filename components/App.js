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

    this.onChangeType = this.onChangeType.bind(this);
    this.onFindPetsClick = this.onFindPetsClick.bind(this);
    this.onAdoptPet = this.onAdoptPet.bind(this);
  }

  onChangeType(type) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type,
      })
    });
  }

  onFindPetsClick() {
    if (this.state.filters.type == 'all') {
      fetch('/api/pets').then(res => res.json())
      .then(pets => this.setState({ pets }));
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`).then(res => res.json())
      .then(pets => this.setState({ pets }));
    }
  }

  onAdoptPet(id) {
    this.setState({
      adoptedPets: Object.assign([], this.state.adoptedPets, id).join('')
    });   
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
              <Filters filters={this.state.filters}
                       onChangeType={this.onChangeType}
                       onFindPetsClick={this.onFindPetsClick}/>
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
