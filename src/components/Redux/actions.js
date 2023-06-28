export const checkAll = () =>({type: 'changeFilterAll'})
export const clearAll = () =>({type: 'clearFilterAll'})
export const changeFilter = (key) =>({type: 'changeFilter', key:key}) 
export const changeOption = (value) => ({type:'changeOption', value:value})