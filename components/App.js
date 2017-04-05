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
    this.onChangeType = this.onChangeType.bind(this)
    this.onFindPets = this.onFindPets.bind(this)
    this.onAdoptPet = this.onAdoptPet.bind(this)
  }
    onAdoptPet(id){
      this.setState({
        adoptedPets: [...this.state.adoptedPets, id]
      })
    }
    onFindPets(){
      if (this.state.filters.type === "all") {
        fetch("/api/pets")
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
    }
   }

    onChangeType(filter){
      this.setState({
        filters: {
          type: filter
        }
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
