import React from 'react'
import Cards from './Cards'
import styles from '../styles/SupportSection.module.scss'

const SupportSection = () => {
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
      <div className={styles.supportContentWrapper}>
        <h2>Support Topics</h2>
        <Cards cardItems={supportItems} />
      </div>
    </section>
  )
}

export default SupportSection
