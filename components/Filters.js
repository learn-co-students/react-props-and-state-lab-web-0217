const React = require('react');

class Filters extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentFilter: props.filters.type
    }
    //
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)

  }

  handleChange(event){
    this.setState({
      currentFilter: event.target.value
    })
    this.props.onChangeType(event.target.value)
  }

  handleClick(){
    this.props.onFindPetsClick(this.state.currentFilter)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select
            name="type"
            id="type"
            value={this.state.currentFilter}
            onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
