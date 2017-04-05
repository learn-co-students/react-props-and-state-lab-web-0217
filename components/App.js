const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

class App extends React.Component {
  constructor() {
    super();
    this.onChangeFilterType = this.onChangeFilterType.bind(this)
    this.getPets = this.getPets.bind(this)
    this.onAdoptPet = this.onAdoptPet.bind(this)

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  onChangeFilterType(animal){
    this.setState(
      {
    filters:
      {
        type: animal
      }
    })
  }

  getPets(){
    let species = this.state.filters.type
    if(species === "all"){
      fetch('/api/pets')
      .then(res => res.json()
      )
      .then(json => this.state.pets.concat(json)
      )
    }
  if(species==="cat"){
  fetch('/api/pets?type=cat')
  .then(res => res.json()
  )
  .then(json => this.state.pets.concat(json)
  )
}

  if(species==="dog"){
  fetch('/api/pets?type=dog')
  .then(res => res.json()
  )
  .then(json => this.state.pets.concat(json)
  )
  }

  if(species==="micropig"){
  fetch('/api/pets?type=micropig')
  .then(res => res.json()
  )
  .then(json => this.state.pets.concat(json)
  )
  }

  }


   onAdoptPet(id){
     this.setState({
     adoptedPets:this.state.adoptedPets.concat(id)
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
              <Filters

              onChangeType = {this.onChangeFilterType}
              onFindPetsClick = {this.getPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
              onAdoptPet = {this.onAdoptPet}
               />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
