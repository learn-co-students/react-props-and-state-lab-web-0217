const React = require('react')

const Pet = require('./Pet')

class PetBrowser extends React.Component {
  render() {
		let petsMap = this.props.pets.map(pet => {
			return <Pet name={pet.name}  gender={pet.gender}  age={pet.age}  weight={pet.weight}  type={pet.type} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id) ? true:false} />
		})
    return (
      <div className="ui cards">
      	
        <code>&lt;Pet /&gt;</code> &nbsp; {petsMap}
      </div>
    )
  }
}

module.exports = PetBrowser
