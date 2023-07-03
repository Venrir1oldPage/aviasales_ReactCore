import defaultState from './defaultState'

const reducer = (state=defaultState, action) =>{
  const newState = structuredClone(state)
  let  filters = newState.filters
  switch (action.type) {
  case('CHECK_FILTER_ALL'): 
    newState.filters = filters.map((i)=> ({value:i.value, key:i.key, checked:true}))
    return newState
  case('CLEAR_FILTER_ALL'): 
    newState.filters = filters.map((i)=> ({value:i.value, key:i.key, checked:false}))
    return newState 
  case('CHANGE_FILTER'):
    newState.filters[action.key].checked = !newState.filters[action.key].checked

    if(filters[1].checked && filters[2].checked , filters[3].checked , filters[4].checked ){
      newState.filters = filters.map((i)=> ({value:i.value, key:i.key, checked:i.checked}))}

    if(filters[0].checked) {
      newState.filters[0].checked = false}

    return newState 
  case('CHANGE_SORT'):
    newState.sort = action.value
    return newState
  case('GOT_TICKETS'):
    newState.tickets=[...newState.tickets, ...action.tickets]
    newState.dataStop = true
    newState.loading = false
    return newState
  case('GOT_ERROR'):
    newState.error=true
    newState.loading=false
    return newState
  case('SHOW_MORE'):
    newState.cutNumber+=5
    return newState
  default: return state
  }}

export default reducer


