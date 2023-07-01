import Api from '../Api/Api'

export const checkAll = () =>({type: 'CHECK_FILTER_ALL'})
export const clearAll = () =>({type: 'CLEAR_FILTER_ALL'})
export const changeFilter = (key) =>({type: 'CHANGE_FILTER', key:key}) 
export const changeSort = (value) => ({type:'CHANGE_SORT', value:value})
export const showMore = () => ({type:'SHOW_MORE'})
export const initData = (tickets, dataStop) => ({ type: 'GOT_TICKETS', tickets:tickets, dataStop: dataStop })
export const initErr = () => ({ type: 'GOT_ERROR'})
export const getTickets = () => async (dispatch) => {
  try {
    if (!Api.searchId) await Api.getId()
    let data= await Api.getTickets()
    if (data == 500) {data= await Api.getTickets()}
    let { tickets, dataLoadStop }=data
    if (tickets.length && !dataLoadStop)
      dispatch(initData(tickets, dataLoadStop))
  }
  catch (e) {
    dispatch(initErr())
  }}

