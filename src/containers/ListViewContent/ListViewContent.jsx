import React from 'react'

import Helmet from 'react-helmet'
import ListViewTitle from '../../components/ListViewTitle'

import { getListById } from '../../functions/lists'

class ListViewContent extends React.Component {
  render() {
    const listId = +this.props.match.params.listId
    const list = getListById(listId)

    if (!list) return <div>List not found</div>

    return (
      <div>
        <Helmet title={list.name} />
        <ListViewTitle onSetList={this.props.onSetList} list={list} />
      </div>
    )
  }
}

export default ListViewContent
