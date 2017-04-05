const React = require('react');

class Filters extends React.Component {
  constructor(props) {
    super(props)
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.handleFindPet = this.handleFindPet.bind(this)

    this.state = {
      currentFilter: props.filters.type
    }
  }
  handleFilterChange(event) {
    this.props.onChangeType(event.target.value)
    this.setState({
      currentFilter: event.target.value
    })
  }
  handleFindPet() {
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select
            name="type"
            id="type"
            // ref=((input) => {this.selectField = input})
            value={this.state.currentFilter} onChange={this.handleFilterChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.handleFindPet} className="ui secondary button">Find pets</button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
