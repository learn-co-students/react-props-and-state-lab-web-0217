const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();

    this.isAdopted = this.isAdopted.bind(this)
    this.adoptPet = this.adoptPet.bind(this)
  }

  isAdopted() {
    if (this.props.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={this.adoptPet}>Adopt pet</button>
    }
  }

  adoptPet(event) {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    const genderIcon = this.props.pet.gender === "male" ? "♂" : "♀"
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} {genderIcon}</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.isAdopted()}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
