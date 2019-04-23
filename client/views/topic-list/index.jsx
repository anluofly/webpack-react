import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import { AppState } from '../../store/app-state'

// @inject('appState') @observable

class TopicList extends React.Component {
  static propTypes = {
    appState: PropTypes.instanceOf(AppState).isRequired,
  }

  componentDidMount() {
    // do something here
  }

  changName = (event) => {
    // this.props.appState.name = event.target.value // 不推荐使用 不规范
    const { appState } = this.props
    appState.changName(event.target.value)
  }

  render() {
    const { appState } = this.props
    return (
      <div>
        <input type="text" onChange={this.changName} />
        <span>{ appState.msg }</span>
      </div>
    )
  }
}

// export default TopicList
export default inject('appState')(observer(TopicList))

// TopicList.propTypes = {
//   appState: PropTypes.instanceOf(AppState).isRequired,
// }
