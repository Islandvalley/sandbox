const ALERT_SHOWN = 'ALERT_SHOWN'

export default () => {
  return dispatch => {
    alert('Hello World!')

    dispatch(alertShown())
  }
}

export function alertShown() {
  return {
    type: ALERT_SHOWN
  }
}
