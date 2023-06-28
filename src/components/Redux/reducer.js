import defaultState from './defaultState'

const reducer = (state=defaultState, action) =>{
  const newState = structuredClone(state)
  let  filters = newState.filters
  switch (action.type) {
  case('changeFilterAll'): 
    newState.filters = filters.map((i)=> ({value:i.value, key:i.key, checked:true}))
    return newState
  case('clearFilterAll'): 
    newState.filters = filters.map((i)=> ({value:i.value, key:i.key, checked:false}))
    return newState 
  case('changeFilter'):
    newState.filters[action.key].checked = !newState.filters[action.key].checked
    if(filters[1].checked && filters[2].checked , filters[3].checked , filters[4].checked ){
      newState.filters = filters.map((i)=> ({value:i.value, key:i.key, checked:true}))}
    if(filters[0].checked) {
      newState.filters[0].checked = false}
    return newState 
  case('changeOption'):
    newState.sort = action.value
    return newState
  default: return state
  }}

export default reducer


// const filters = [
//     { value: 'Без пересадок', key: '0', checked: true },
//     { value: '1 пересадка', key: '1', checked: false },
//     { value: '2 пересадки', key: '2', checked: false },
//     { value: '3 пересадки', key: '3', checked: false },
//   ]
    
//   const defaultState = {
//     filters: filters,
//     sort: 'cheapest', // fastest optimal
//     tickets: {},
//   }

