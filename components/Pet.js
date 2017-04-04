const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();
    this.isAdopted = this.isAdopted.bind(this)
    this.adoptPet = this.adoptPet.bind(this)
  }

  isAdopted() {
    return this.props.isAdopted
  }

  adoptPet(id) {
    if(this.props.onAdoptPet){
      this.props.onAdoptPet(id)
    }
  }

  render() {
    let button = null
    if(this.isAdopted()){
      button = <button className="ui disabled button">Already adopted</button>
    } else {
      button = <button className="ui primary button" onClick={this.adoptPet(this.props.pet.id)}>Adopt pet</button>
    }
    return (

      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} {this.props.pet.gender === 'male' ? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {button}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
