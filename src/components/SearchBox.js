import React, { Component } from 'react'
import SearchIcon from './SVGIcons'
import styles from '../styles/SearchBox.module.scss'

class SearchBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputText: '',
      placeholderText: 'Have a question? Ask here or enter a search term',
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.resetPlaceholer = this.resetPlaceholer.bind(this)
  }

  // Updates inputs value as user types
  handleInput(e) {
    this.setState({
      inputText: e.target.value,
    })
  }

  // Resets the input field and shows and notificaion placeholder
  // for 2.5 sec when user submits the form.
  handleSubmit(e) {
    e.preventDefault()
    this.setState(
      {
        inputText: '',
        placeholderText: 'This is a dummy serach box. Have fun! :)',
      },
      () => {
        setTimeout(this.resetPlaceholer, 2500)
      }
    )
  }

  // Resets the placeholder to default text
  resetPlaceholer() {
    this.setState({
      placeholderText: 'Have a question? Ask here or enter a search term',
    })
  }

  render() {
    const { inputText, placeholderText } = this.state

    return (
      <div className={styles.searchBoxWrapper}>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={inputText}
            placeholder={placeholderText}
            onChange={this.handleInput}
          />
          <SearchIcon handleClick={this.handleSubmit} />
        </form>
      </div>
    )
  }
}

export default SearchBox
