import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/Cards.module.scss'

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
