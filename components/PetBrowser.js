const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {


  // adopted(pet){
  //   this.props.pets.includes(pet.id)
  // }


  wasAdopted(pet) {

    return this.props.adoptedPets.includes(pet.id)
  }


  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map((pet) => {
          return <Pet
                pet={pet}
                key = {pet.id}
                isAdopted={this.wasAdopted(pet)}
                onAdoptPet={this.props.onAdoptPet} />
        })}

        <code>&lt;Pet /&gt;</code> &nbsp; components should go here
      </div>
    );
  }
}

module.exports = PetBrowser;
