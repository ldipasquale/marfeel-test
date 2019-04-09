import React from 'react'
import PropTypes from 'prop-types'

const LINE_DISTANCE = 5

class HeaderMenu extends React.PureComponent {
  render() {
    const { color } = this.props

    const style = {
      backgroundColor: color,
      boxShadow: `0 ${LINE_DISTANCE}px 0 0 ${color}, 0 ${LINE_DISTANCE * 2}px 0 0 ${color}`,
    }

    return (
      <div className="marfeel__Header__TopBar__Menu">
        <div className="marfeel__Header__TopBar__Menu__Line" style={style} />
      </div>
    )
  }
}

HeaderMenu.propTypes = {
  color: PropTypes.string.isRequired,
}

export default HeaderMenu
