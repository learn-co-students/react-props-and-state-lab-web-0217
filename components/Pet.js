const React = require('react');

class Pet extends React.Component {
  constructor() {
    super()

    this.handleAdopt = this.handleAdopt.bind(this)
  }

  genderIcon (){
    if (this.props.pet.gender == "male"){
      return '♂'
    } else {
      return '♀'
    }
  }

  handleAdopt (){
    this.props.onAdoptPet(this.props.pet.id)  
  }

  adoptButton(){
    if (this.props.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button onClick={this.handleAdopt} className="ui primary button">Adopt pet</button>
    }
  }


  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} {this.genderIcon()}</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>{this.props.pet.age}</p>
            <p>{this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.adoptButton()}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
