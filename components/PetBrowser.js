const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
	adopted(pet){
		return this.props.adoptedPets.includes(pet.id)
	}
  render() {
    return (
      <div className="ui cards">
      {this.props.pets.map((pet) => {
      		return <Pet 
      			pet = {pet}
      			isAdopted = {this.adopted(pet)}
      			onAdoptPet = {this.props.onAdoptPet}
      			
      		 />
      }
    )}
        
      </div>
    );
  }
}

module.exports = PetBrowser;
