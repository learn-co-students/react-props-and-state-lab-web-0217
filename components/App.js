const React = require('react')
const Filters = require('./Filters')
const PetBrowser = require('./PetBrowser')

class App extends React.Component {
  constructor(props) {
    super()

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    }
    this.rootApiURL = '/api/pets'
    this.handleFilterTypeChange = this.handleFilterTypeChange.bind(this)
    this.handleAdoptPet = this.handleAdoptPet.bind(this)
    this.handleFindPets = this.handleFindPets.bind(this)
  }


  handleFindPets() {
    let url = (this.state.filters.type === 'all') ? this.rootApiURL : `${this.rootApiURL}?type=${this.state.filters.type}`
    fetch(url)
      .then((data) => {
        return data.json()
      })
      .then((petsData) => {
        this.setState({ petsData })
      })
  }

  handleFilterTypeChange(newType) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: newType,
      })
    })
  }

  handleAdoptPet(id) {
    this.setState({
      adoptedPets: this.state.adoptedPets.concat(id)
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
              <Filters filters={this.state.filters}
                       onChangeType={this.handleFilterTypeChange}
                       onFindPetsClick={this.handleFindPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.handleAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = App
