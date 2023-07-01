import Checkbox from 'react-custom-checkbox'
import { connect } from 'react-redux'

import * as actions from '../../Redux/actions'
import iconCheck from '../../images/iconCheck.svg'

import classes from './Checkboxes.module.scss'

const Checkboxes = ({filters, checkAll, clearAll, changeFilter}) => {
  
  const style= {
    cursor: 'pointer',
    marginRight: '10px',
    borderRadius:'2px',
    borderWidth:1,
  }
  
  const checkboxes = filters.map(({value,key, checked})=>{
    let borderColor = checked?'#2196F3':'#9ABBCE'

    const check=() => {
      switch(key) {
      case ('0'):checked?clearAll():checkAll() 
        break
      case ('1'):
      case ('2'):
      case ('3'):
      case ('4'):changeFilter(key)
      }
    }
    return (
      <li className={classes['side-filters__item']} key={key}>
        <label className={classes['side-filters__label']} >
          <Checkbox className={classes['side-filters__checkbox']} size={18} 
            icon={<img src={iconCheck} alt="check" />} style={style}  borderColor={borderColor} checked={checked}
            onChange={check} />{value}</label></li>
    )
  }
  )
  return checkboxes
}

const mapStateToProps = (state) => {
  return {
    filters:state.filters
  }}
  
export default connect(mapStateToProps, actions)(Checkboxes)

