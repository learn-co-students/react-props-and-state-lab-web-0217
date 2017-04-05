const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();

  }

  genderIcon(){
    if(this.props.pet.gender==="male"){
      return "♂"
    }else{
      return "♀"
    }
  }

  onHandleAdopt(){
    this.props.onAdoptPet(this.props.pet.id)
  }


  renderButton(){
    if(this.props.isAdopted){
      return <button className="ui disabled button" >Already adopted</button>
    }else{
      return <button className="ui primary button" onClick={this.onHandleAdopt.bind(this)}>Adopt pet</button>
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
            <p>{this.props.pet.age} </p>
            <p>{this.props.pet.weight} </p>
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
