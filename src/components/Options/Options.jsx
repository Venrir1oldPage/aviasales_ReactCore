import {ConfigProvider, Radio } from 'antd'
import { useState } from 'react'

import classes from './Options.module.scss'

const options = [
  {
    label: 'Самый дешёвый',
    value: 'cheapest',
  },
  {
    label: 'Самый быстрый',
    value: 'fastest',
  },
  {
    label: 'Оптимальный',
    value: 'optimal',
  },
]

const setting = {
  token: {
    controlHeight: 50,
    colorPrimary: '#2196F3'
  }
}


const Options =() => {

  const [value, setValue] = useState('Apple')

  const onChange = ({ target: { value } }) => {
    console.log('radio checked', value)
    setValue(value)
  }

  return (
    <ConfigProvider theme={setting}>
      <section className={classes['options']}>
        <Radio.Group options={options} onChange={onChange} 
          className={classes['options_buttons']} 
          value={value} optionType="button" buttonStyle="solid"/>
      </section>
    </ConfigProvider>
  )
}

export default Options
