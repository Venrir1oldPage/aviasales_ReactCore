import Checkbox from 'react-custom-checkbox'
import { useState } from 'react'

import iconCheck from '../../images/iconCheck.svg'

import classes from './CheckboxFilter.module.scss'

const CheckboxFilter = ({id, value}) => {
  const [checked, setChecked] = useState(false)
  const check=() => {
    console.log('check', id)
    setChecked((c)=>!c)
  }

  const style= {
    cursor: 'pointer',
    marginRight: '10px',
    borderRadius:'2px',
    borderWidth:1,
  }

  let borderColor = checked?'#2196F3':'#9ABBCE'

  return (
    <li className={classes['side-filters__item']}>
      <label className={classes['side-filters__label']} >
        <Checkbox className={classes['side-filters__checkbox']} size={18} 
          icon={<img src={iconCheck} alt="check" />} style={style}  borderColor={borderColor}
          onChange={check} id={id} />{value}</label></li>
  )
}

export default CheckboxFilter