const React = require('react');

class Pet extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdoptPet = this.handleAdoptPet.bind(this)
  }

  handleAdoptPet() {
    if (this.props.isAdopted === false) {
      this.props.onAdoptPet(this.props.pet.id)
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name (gender: m or f)</a>
          <div className="meta">
            <span className="date">Pet type</span>
          </div>
          <div className="description">
            <p>Name: {this.props.pet.name}</p>
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
            <p>Type: {this.props.pet.type}</p>
            <p>Gender: {this.props.pet.gender === 'female' ? '♀' : '♂'}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={this.handleAdoptPet}>Adopt pet</button>}
        </div>
      </div>
    )
  }
}

Pet.defaultProps = {
  isAdopted: false,
}

module.exports = Pet;
