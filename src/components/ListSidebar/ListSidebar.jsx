import React from 'react'

import styles from './ListSidebar.module.css'

import ListItem from '../ListItem'
import CreateListButton from '../CreateListButton'

class ListSidebar extends React.Component {
  handleAddList = () => {
    const currentLists = this.props.lists
    this.props.onSetLists(
      currentLists.concat([
        {
          name: '(new list)',
          id: Date.now(),
        },
      ]),
    )
  }

  render() {
    const { lists } = this.props

    return (
      <div className={styles.ListSidebar}>
        {lists.map(list => (
          <ListItem key={list.id} id={list.id} name={list.name} />
        ))}

        <CreateListButton onClick={this.handleAddList} />
      </div>
    )
  }
}

export default ListSidebar
