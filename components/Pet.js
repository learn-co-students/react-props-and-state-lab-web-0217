const React = require('react');

class Pet extends React.Component {
  constructor(props) {
    super();
    this.handleAdoptPet = this.handleAdoptPet.bind(this)
  }


  handleAdoptPet() {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    let pet = this.props.pet

    let gender
    if (pet.gender == "male") {
      gender = '♂'
    } else {
      gender = '♀'
    }

    let adopted = this.props.isAdopted

    return (
      <div className="card">
        <div className="content">
          <a className="header">{pet.name} {gender}</a>
          <div className="meta">
            <span className="date">Species: {pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {adopted && <button className="ui disabled button">Already adopted</button>}
          {!adopted && <button className="ui primary button" onClick={this.handleAdoptPet}>Adopt pet</button>}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
