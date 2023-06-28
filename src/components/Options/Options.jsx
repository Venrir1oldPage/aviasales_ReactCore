import {ConfigProvider, Radio } from 'antd'
import { connect } from 'react-redux'

import { changeOption } from '../Redux/actions'

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


const Options =({option, changeOption}) => {

  const onChange = ({ target: { value } }) => {
    changeOption(value)
  }

  return (
    <ConfigProvider theme={setting}>
      <section className={classes['options']}>
        <Radio.Group options={options} onChange={onChange} 
          className={classes['options_buttons']} 
          value={option} optionType="button" buttonStyle="solid"/>
      </section>
    </ConfigProvider>
  )
}

const mapStateToProps = (state) => {
  return {
    option:state.sort
  }}

export default connect(mapStateToProps, {changeOption})(Options)
