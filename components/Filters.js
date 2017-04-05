const React = require('react');

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentType: props.filters.type
    }
    this.handleFindPets = this.handleFindPets.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleFindPets(){
    this.props.onFindPetsClick()
  }

  handleFilterChange(event){
    this.setState({
      currentType: event.target.value
    })
    this.props.onChangeType(event.target.value)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={this.handleFilterChange} value={this.state.currentType} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.handleFindPets} className="ui secondary button">Find pets</button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
