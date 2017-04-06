const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    let adopt = this.props.onAdoptPet
    let adoptedPets = this.props.adoptedPets

    let pets = this.props.pets.map(function(pet, index) {
      return <Pet pet={pet} key={index} isAdopted={adoptedPets.includes(pet.id)} onAdoptPet={adopt}/>
    })
    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

module.exports = PetBrowser;
