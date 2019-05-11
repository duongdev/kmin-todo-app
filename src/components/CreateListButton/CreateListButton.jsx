import React from 'react'

import styles from './CreateListButton.module.css'

class CreateListButton extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick} className={styles.CreateListButton}>
        +
      </div>
    )
  }
}

export default CreateListButton
