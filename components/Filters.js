const React = require('react');

class Filters extends React.Component {
  constructor() {
    super();
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.onHandleClick = this.onHandleClick.bind(this)
  }

  handleFilterChange(event) {
    this.props.onChangeType(event.target.value)
  }

  onHandleClick() {
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleFilterChange} value={this.props.filters.type}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.onHandleClick} className="ui secondary button">Find pets</button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
