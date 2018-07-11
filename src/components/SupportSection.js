import React from 'react'
import Container from '../layouts/Container'
import Cards from './Cards'
import styles from '../styles/SupportSection.module.scss'

const SupportSection = () => {
  // New cards can be added by simply adding a object property
  // in this array. The <Cards/> component itarates over this
  // array and generates cards.
  const supportItems = [
    {
      title: 'UFC Pay-Per-View',
      link: '#',
      id: 1,
    },
    {
      title: 'UFC Flight Pass',
      link: '#',
      id: 2,
    },
    {
      title: 'Device Coverage',
      link: '#',
      id: 3,
    },
    {
      title: 'Non UFC Content',
      link: '#',
      id: 4,
    },
    {
      title: 'Streamig Issues',
      link: '#',
      id: 5,
    },
    {
      title: 'My Subscription',
      link: '#',
      id: 6,
    },
    {
      title: 'Frequently Asked Questions',
      link: '#',
      id: 7,
    },
  ]

  return (
    <section className={styles.supportSection}>
      <Container>
        <h2>Support Topics</h2>
        <Cards cardItems={supportItems} />
      </Container>
    </section>
  )
}

export default SupportSection
