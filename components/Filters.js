const React = require('react');

// Should have a filters prop that contains all of the filters in the App state (see below).
// Hook up this value to the select component.
// Should have an onChangeType callback prop. This callback prop gets called whenever the value
// of the <select> element changes. It calls the onChangeType callback prop with one argument: the value of the select.
// Should have an onFindPetsClick callback prop. This callback prop gets called when the users
// clicks the 'Find pets' button.

// The app's initial state is already defined. Pass the right state properties to the <Filters /> and <PetBrowser /> components.
// When the <Filters /> component calls the onChangeType prop you pass into it, <App />'s state needs to be updated accordingly.
// When the <Filters /> component calls the onFindPetsClick prop you pass into it, the <App /> component should fetch a list of pets using fetch.
// The URL of the API is /api/pets with an optional query parameter.
// If the type is 'all', send a request to /api/pets.
// If the type is 'cat', send a request to /api/pets?type=cat. Do the same thing for dog and micropig.
// Finally, set the pet data on the state property pets to properly pass them to the <PetBrowser /> component.
// When the <PetBrowser /> component calls the onAdoptPet prop you pass into it, add the pet ID to the the adoptedPets array in the state.

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  handleSelectChange(e) {
    this.props.onChangeType(e.target.value)
  }

  render() {
    const filters = this.props.filters
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={filters.type} onChange={this.handleSelectChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>

      </div>
    );
  }
}

module.exports = Filters;
