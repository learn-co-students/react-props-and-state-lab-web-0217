const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();
  }

  genderIcon(){
    if (this.props.pet.gender === 'male') {
      return '♂'
    } else if (this.props.pet.gender === 'female') {
      return '♀'
    }
  }

  adoptionButton() {
    if(this.props.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button">Adopt pet</button>
    }
  }

  render() {
    let pet = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">{pet.name} ({this.genderIcon()})</a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.adoptionButton}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
