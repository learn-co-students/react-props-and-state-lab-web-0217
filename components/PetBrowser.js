const React = require('react');

const Pet = require('./Pet');


class PetBrowser extends React.Component {

  render() {
    const petList = this.props.pets.map((pet)=> {
      let adopted = this.props.adoptedPets.includes(pet.id)
      return (
        <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={adopted} />
      )
    })
    return (
      <div className="ui cards">
        {petList}
      </div>
    );
  }
}

module.exports = PetBrowser;
