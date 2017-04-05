const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');




class App extends React.Component {
  constructor() {
    super();
    this.onAdoptPet = this.onAdoptPet.bind(this)
    this.onChangeType = this.onChangeType.bind(this)
    this.onFindPetsClick = this.onFindPetsClick.bind(this)
    this.fetchPets = this.fetchPets.bind(this)
    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };

    this.fetchPets()
  }

  fetchPets(){
    if (this.state.filters.type === "all") {
      fetch('/api/pets').
      then( res => res.json()).
      then(json => {
        this.setState({
          pets: this.state.pets.concat(json)
        })
      })
    } else {
      fetch('/api/pets?type=' + this.state.filters.type).
      then( res => res.json()).
      then(json => {
        this.setState({
          pets: this.state.pets.concat(json)
        })
      })
    }
  }

  onAdoptPet(id){
    this.setState({
      adoptedPets: this.state.adoptedPets.concat([id])
    })
  }

  onChangeType(value){
    this.setState({
      filters: {
        type: value
      }
    })
  }

  onFindPetsClick(){
    this.fetchPets()
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
              <Filters onChangeType={this.onChangeType} filters={this.state.filters} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
