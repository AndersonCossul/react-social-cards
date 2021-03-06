import React from 'react'
import styles from './Card.css'
import newPlaceholder from '../../../assets/images/new-placeholder.jpg'

const card = (props) => {
  const date = new Date(props.data.date)
  const formattedDate = date.toLocaleDateString('en-US')

  let image = (
    <img
      src={newPlaceholder}
      alt={props.data.title}/>
  )

  if (props.data.image) {
    image = <img src={props.data.image} alt={props.data.title} />
  }

  return (
    <li className={styles.Card}>
      <div className={styles.Info}>
        <h2>{props.data.title}</h2>
        <small>{props.data.author}</small>
        <small><strong>{props.data.source}</strong></small>
        <small className={styles.Date}>{formattedDate}</small>
        <a href={props.data.url} target="_blank">
          {image}
        </a>
      </div>
    </li>
  )
}

export default card
