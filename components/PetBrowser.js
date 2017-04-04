const React = require('react');
const Pet = require('./Pet');

//I had no clue how to start this one or I suppose what the test/readme was asking for. Had to use the solution.
//ask about it on monday
//ask someone about returning this as an object literal (like the solution showed)
class PetBrowser extends React.Component {
  render() {
    const pets = this.props.pets.map((pet, i) => {
      return <Pet pet={pet} key={i} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)} />
    })

    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

module.exports = PetBrowser;
