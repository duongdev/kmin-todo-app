import React from 'react'

import styles from './ListViewTitle.module.css'

class ListViewTitle extends React.Component {
  state = {
    editing: false,
  }
  inputRef = null

  handleEditName = () => {
    this.setState({ editing: true }, () => {
      if (this.inputRef) {
        this.inputRef.focus()
        this.inputRef.select()
      }
    })
  }

  handleSetList = event => {
    const { list } = this.props
    this.props.onSetList({
      ...list,
      name: event.target.value,
    })
  }

  render() {
    const { list } = this.props

    return (
      <div className={styles.ListViewTitle}>
        {this.state.editing ? (
          <input
            ref={el => (this.inputRef = el)}
            onBlur={this.handleSetList}
            className={styles.ListNameInput}
            defaultValue={list.name}
            onKeyDown={event => {
              if (event.keyCode === 13) this.handleSetList(event)
            }}
          />
        ) : (
          <div
            className={styles.ListViewTitleName}
            onClick={this.handleEditName}
          >
            {list.name}
          </div>
        )}
        <div style={{ flexGrow: 1 }} />
        <div>Actions</div>
      </div>
    )
  }
}

export default ListViewTitle
