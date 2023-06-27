import CheckboxFilter from '../CheckboxFilter/CheckboxFilter'

import classes from './SideFilters.module.scss'

const SideFilters=() => {
  return(
    <section className={classes['side-filters']}>
      <h2 className={classes['side-filters__description']}>Количество пересадок</h2>
      <ul className={classes['side-filters__list']}>
        <CheckboxFilter value='Все' id='all' />
        <CheckboxFilter value='Без пересадок' id='0' />
        <CheckboxFilter value='1 пересадка' id='1' />
        <CheckboxFilter value='2 пересадки' id='2' />
        <CheckboxFilter value='3 пересадки' id='3' />        
      </ul>
    </section>
  )
}
export default SideFilters