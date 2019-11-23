/* global history */

import React, { Component } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

export default class AddressBar extends Component {
  state = { address: null }

  handleChange = address => {
    address = address !== '' ? address : null
    if (!address) localStorage.removeItem('address')
    this.setState({ address })
  }

  handleSelect = address => {
    this.setState({ address })
    localStorage.setItem('address', address)

    if (window.history.pushState) {
      var path = window.location.origin + `?address=${address}`;
      window.history.pushState({ path }, '', path);
    }
    
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.onChange(address, latLng))
      .catch(error => console.error(error))
  }

  componentDidMount () {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('address')) return this.handleSelect(urlParams.get('address'))
    if (localStorage.getItem('address')) return this.handleSelect(localStorage.getItem('address'))
  }

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address || localStorage.getItem('address') || ''}
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
            <p className="text-muted text-right"><em>Or, just your City and State if you prefer.</em></p>
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
