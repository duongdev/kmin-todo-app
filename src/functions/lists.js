import store from 'store'

const LISTS_KEY = 'LISTS_KEY'

export const getLists = () => {
  return store.get(LISTS_KEY) || []
}

export const setLists = lists => {
  return store.set(LISTS_KEY, lists)
}

export const getListById = listId => {
  const lists = getLists()
  const list = lists.find(list => list.id === listId) || null

  return list
}

export const setListById = (listId, nextList) => {
  const lists = getLists()
  const listIdx = lists.findIndex(list => list.id === +listId)

  if (listIdx === -1) return lists
  lists[listIdx] = { ...lists[listIdx], ...nextList }

  setLists(lists)

  return lists
}
