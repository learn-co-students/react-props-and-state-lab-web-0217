const React = require('react');

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.onHandleClick = this.onHandleClick.bind(this)

    this.state = {
      currentType: props.filters.type
    }
  }

  handleFilterChange(event){
    this.props.onChangeType(event.target.value)
    this.setState({
      currentType: event.target.value
    })
  }

  onHandleClick(){
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleFilterChange} value={this.state.currentType}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.onHandleClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
