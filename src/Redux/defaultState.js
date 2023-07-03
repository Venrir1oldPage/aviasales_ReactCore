const filters = [
  { value: 'Все', key: '0', checked: true },
  { value: 'Без пересадок', key: '1', checked: true },
  { value: '1 пересадка', key: '2', checked: true },
  { value: '2 пересадки', key: '3', checked: true },
  { value: '3 пересадки', key: '4', checked: true },
]
  
const defaultState = {
  filters: filters,
  sort: 'cheapest', // fastest optimal
  tickets: [],
  loading:true,
  error:false,
  dataStop:false,
  cutNumber:5
}
  
export default defaultState