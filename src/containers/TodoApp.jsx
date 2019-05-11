import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ListSidebar from '../components/ListSidebar'
import ListViewContent from './ListViewContent/ListViewContent'
import { getLists, setLists, setListById } from '../functions/lists'

class TodoApp extends React.Component {
  state = {
    lists: getLists(),
  }

  handleSetLists = nextLists => {
    this.setState({ lists: nextLists })
    setLists(nextLists)
  }

  handleSetListById = (listId, nextList) => {
    const nextLists = setListById(listId, nextList)

    console.log(listId, nextLists)

    this.handleSetLists(nextLists)
  }

  render() {
    return (
      <Router>
        <div>
          <ListSidebar
            lists={this.state.lists}
            onSetLists={this.handleSetLists}
          />
          <div style={{ marginLeft: 250 }}>
            <Switch>
              <Route
                path="/lists/:listId"
                component={props => (
                  <ListViewContent
                    onSetList={nextList =>
                      this.handleSetListById(
                        props.match.params.listId,
                        nextList,
                      )
                    }
                    {...props}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default TodoApp
