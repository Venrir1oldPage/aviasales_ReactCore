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
      newState.filters = filters.map((i)=> ({value:i.value, key:i.key, checked:true}))}
    if(filters[0].checked) {
      newState.filters[0].checked = false}
    return newState 
  case('CHANGE_SORT'):
    newState.sort = action.value
    return newState
  case('GOT_TICKETS'):
    newState.tickets=action.tickets
    newState.dataStop = true
    newState.loading = false
    return newState
  case('GOT_ERROR'):
    newState.error=true
    newState.loading=false
    return newState
  case('SHOW_MORE'):
    console.log('shoooow mooore')
    return newState
  default: return state
  }}

export default reducer// пока что остановка на первой порции

// export const initData = (tickets, isStop) => ({ type: 'GOT_TICKETS', tickets:tickets, dataStop: isStop })
// export const initErr = () => ({ type: 'GOT_ERROR'})
// export const getTickets = async (dispatch) => {
//   try {
//     if (!Api.searchId) await Api.getId()
//     let { tickets, dataLoadStop } = await Api.getTickets()
//     initData(tickets, dataLoadStop)
//   }
//   catch (e) {
//     dispatch(initErr())
//   }}


   
// const defaultState = {
//   filters: filters,
//   sort: 'cheapest', // fastest optimal
//   tickets: [],
//   loading:false,
//   error:false,
//   dataStop:false
// }

