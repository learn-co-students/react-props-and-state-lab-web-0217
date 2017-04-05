const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();

    this.handleAdopt = this.handleAdopt.bind(this)

 
    }

    handleAdopt(){
        this.props.onAdoptPet(this.props.pet.id)
    }
    
    adoptionButton(){
      if (this.props.isAdopted) {
        return <button className="ui disabled button">Already adopted</button>
      } else {
        return <button onClick={this.handleAdopt} className="ui primary button">Adopt pet</button>
      }  
    }
  

  genderIcon(){
    if(this.props.pet.gender === "female") {
      return "♀"
    } else {
      return "♂"
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet {this.props.pet.name} {this.genderIcon()}</a>
          <div className="meta">
            <span className="date">Pet type {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
            {this.adoptionButton()}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
