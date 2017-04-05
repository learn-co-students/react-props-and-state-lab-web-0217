const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    const petsWithAdoptStatus = this.props.pets.map((petInfo) =>
      <Pet pet={petInfo} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(petInfo.id)}/>
    )
  return (
    <div className="ui cards">
      {petsWithAdoptStatus}
    </div>
  );
}
}

module.exports = PetBrowser;
