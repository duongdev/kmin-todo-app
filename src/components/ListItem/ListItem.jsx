import React from 'react'

import { NavLink } from 'react-router-dom'

import styles from './ListItem.module.css'

const ListItem = props => {
  const { name, id } = props
  return (
    <NavLink
      to={`/lists/${id}`}
      activeClassName={styles.ListItemActive}
      className={styles.ListItem}
    >
      {name || '(untitled)'}
    </NavLink>
  )
}

export default ListItem
