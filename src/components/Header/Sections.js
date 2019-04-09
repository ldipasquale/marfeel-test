import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class HeaderSections extends React.PureComponent {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.renderItem = this.renderItem.bind(this)
  }

  handleChange(event) {
    const { onChange } = this.props
    const selectedItem = event.target.innerHTML

    return onChange(selectedItem)
  }

  renderItem(item) {
    const { activeItem, color, textColor, textSize } = this.props

    const style = {
      borderBottomColor: color,
      color: textColor,
      fontSize: `${textSize}px`,
    }

    return (
      <div
        key={item}
        onClick={this.handleChange}
        className={cx({
          marfeel__Header__Sections__Item: true,
          'marfeel__Header__Sections__Item--active': activeItem === item,
        })}
        style={style}
      >
        {item}
      </div>
    )
  }

  render() {
    const { items, isHidden } = this.props

    return (
      <div
        className={cx({
          marfeel__Header__Sections: true,
          'marfeel__Header__Sections--hidden': isHidden,
        })}
      >
        {items.map(this.renderItem)}
      </div>
    )
  }
}

HeaderSections.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  activeItem: PropTypes.string.isRequired,
  isHidden: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  textSize: PropTypes.number.isRequired,
}

export default HeaderSections
