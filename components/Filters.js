const React = require('react');

class Filters extends React.Component {
  constructor() {
    super();
    this.onChangeType = this.onChangeType.bind(this)
    this.petClick = this.petClick.bind(this)
  }

  onChangeType(event){
    this.props.onChangeType(event.target.value)
  }

  petClick(value){
    this.props.onFindPetsClick(value)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select value={this.props.filters.type} name="type" id="type" onChange={this.onChangeType}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.petClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
