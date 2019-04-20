import React, { Component } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

export default class AddressBar extends Component {
  state = { address: null }

  handleChange = address => {
    this.setState({ address })
  }

  handleSelect = address => {
    this.setState({ address })
    
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.onChange(address, latLng))
      .catch(error => console.error(error))
  }

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address || ''}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        searchOptions={{
          componentRestrictions: { country: 'us' }
        }}
        classNames={{
          input: 'places-search-input form-control',
          autocompleteContainer: 'search-autocomplete-container'
        }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "What's your address?",
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#ddd', cursor: 'pointer', borderRadius: '4px', padding: '2px' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    )
  }
}
