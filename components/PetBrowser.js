const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map((petItem) => <Pet pet={petItem}
        onAdoptPet={this.props.onAdoptPet}
        isAdopted={this.props.adoptedPets.includes(petItem.id)}
        />)}
      </div>
    );
  }
}

module.exports = PetBrowser;
