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

    this.changeType = this.changeType.bind(this)
    this.onFindPetsClick = this.onFindPetsClick.bind(this)
    this.adoptPet = this.adoptPet.bind(this)
  }

  changeType(value) {
    this.setState( {
      filters: { type: value }
    })
  }

  onFindPetsClick(){
    let url = '/api/pets'
    if (this.state.filters.type !== 'all') {
      url = url + "?type=" + this.state.filters.type
    }
    fetch(url)
    .then((resp) => {
      this.setState({
        pets: resp
      })
    })
  }

  adoptPet(id){
    this.setState({adoptedPets: Object.assign([], id, this.state.adoptedPets).join('')})
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
              <Filters filters={this.state.filters} onChangeType={this.changeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
