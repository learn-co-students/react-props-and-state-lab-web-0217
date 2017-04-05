const React = require('react');

class Pet extends React.Component {
  constructor(props) {
    super(props);
    // this.onAdoptPet = this.onAdoptPet.bind(this)
    this.handleAdopt = this.handleAdopt.bind(this)
    this.renderButton = this.renderButton.bind(this)
    // this.isAdopted = this.isAdopted.bind(this)
    if (this.props.pet.gender == 'male') {
      this.genderSymbol = '♂'
    } else {
      this.genderSymbol = '♀'
    }
  }
  // onAdoptPet(petId){
  //   this.setState({adopted: true})
  // }
  handleAdopt(){
    this.props.onAdoptPet(this.props.pet.id)
  }

  renderButton(){
    if (this.props.isAdopted){
      return <button className="ui disabled button" >Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={this.handleAdopt}>Adopt pet</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name:{this.props.pet.name} gender: {this.genderSymbol} </a>
          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age} </p>
            <p>Weight: {this.props.pet.weight} </p>
          </div>
        </div>
        <div className="extra content">
          {this.renderButton()}

        </div>
      </div>
    );
  }
}

module.exports = Pet;
