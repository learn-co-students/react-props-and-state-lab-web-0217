const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {


  render() {
  const petsList = this.props.pets.map(pet => {
    return <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)} />
  })

    return (
      <div className="ui cards">
        <code>&lt;Pet /&gt;</code> &nbsp; components should go here
        {petsList}
      </div>
    );
  }
}

module.exports = PetBrowser;
