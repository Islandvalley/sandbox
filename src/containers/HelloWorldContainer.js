import { connect } from 'react-redux'
import HelloWorld from '../components/HelloWorld'
import alertHello from '../actions/Alert'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  onClickButton() {
    dispatch(alertHello())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld)
