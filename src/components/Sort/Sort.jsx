import {ConfigProvider, Radio } from 'antd'
import { connect } from 'react-redux'

import { changeSort } from '../../Redux/actions'

import classes from './Sort.module.scss'

const options = [
  {label: 'Самый дешёвый',value: 'cheapest'},
  {label: 'Самый быстрый',value: 'fastest'},
  {label: 'Оптимальный', value: 'optimal'},
]

const setting = {
  token: {
    controlHeight: 50,
    colorPrimary: '#2196F3'
  }
}


const Sort =({option, changeSort}) => {

  const onChange = ({ target: { value } }) => changeSort(value)

  return (
    <ConfigProvider theme={setting}>
      <section className={classes['sort']}>
        <Radio.Group options={options} onChange={onChange} 
          className={classes['sort_buttons']} tabIndex={6}
          value={option} optionType="button" buttonStyle="solid"/>
      </section>
    </ConfigProvider>
  )
}

const mapStateToProps = (state) => {
  return { option:state.sort}}

export default connect(mapStateToProps, {changeSort})(Sort)
