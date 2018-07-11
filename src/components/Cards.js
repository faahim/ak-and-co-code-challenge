import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/Cards.module.scss'

// Accepts an Array of objects. Iterates over the Array and generates
// a card for each item of the array.
const Cards = ({ cardItems }) => (
  <div className={styles.cardWrapper}>
    {cardItems.map(item => (
      <div className={styles.card} key={item.id}>
        <a href={item.link}>{item.title}</a>
      </div>
    ))}
  </div>
)

Cards.propTypes = {
  cardItems: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Cards
