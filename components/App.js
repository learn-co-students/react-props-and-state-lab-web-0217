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
  }


  onAdoptPet(id){
      this.setState({
        adoptedPets: [...this.state.adoptedPets, id]
      })
  }


  onChangeType(value){
    this.setState({
      filters:{
        type: value
      }
    })
  }

  onFindPets(){
    if(this.state.filters.type=='all'){
          fetch('/api/pets')
    }else{
        fetch(`/api/pets?type=${this.state.filters.type}`)
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
              <Filters onChangeType={this.onChangeType.bind(this)} onFindPetsClick={this.onFindPets.bind(this)}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
