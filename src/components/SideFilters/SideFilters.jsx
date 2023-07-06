import Checkboxes from '../Checkboxes/Checkboxes'

import classes from './SideFilters.module.scss'

const SideFilters=() => {

  return(
    <section className={classes['side-filters']}>
      <h2 className={classes['description']}>Количество пересадок</h2>
      <ul className={classes['list']}>
        <Checkboxes />        
      </ul>
    </section>
  )
}


export default SideFilters