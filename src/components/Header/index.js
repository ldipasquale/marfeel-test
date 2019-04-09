import React from 'react'
import PropTypes from 'prop-types'

import Menu from './Menu'
import Sections from './Sections'

import './styles/index.sass'

class Header extends React.PureComponent {
  render() {
    const {
      hideSections,
      menuColor,
      logoUrl,
      logoSize,
      backgroundColor,
      backgroundGradient,
      sectionsColor,
      sectionsTextColor,
      sectionsTextSize,
      sectionsItems,
      onChangeSection,
      activeSection,
    } = this.props

    const style = backgroundGradient.from && backgroundGradient.to ? {
      background: `linear-gradient(${backgroundGradient.from}, ${backgroundGradient.to})`,
    } : { backgroundColor }

    return (
      <div className="marfeel__Header" style={style}>
        <div className="marfeel__Header__TopBar">
          <Menu color={menuColor} />

          <img
            className="marfeel__Header__TopBar__Logo"
            src={logoUrl}
            height={logoSize}
            alt="Marfeel"
          />
        </div>

        <Sections
          isHidden={hideSections}
          items={sectionsItems}
          color={sectionsColor}
          textColor={sectionsTextColor}
          textSize={sectionsTextSize}
          onChange={onChangeSection}
          activeItem={activeSection}
        />
      </div>
    )
  }
}

Header.propTypes = {
  hideSections: PropTypes.bool,
  onChangeSection: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
  menuColor: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
  logoSize: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string,
  backgroundGradient: PropTypes.shape({
    from: PropTypes.string,
    to: PropTypes.string,
  }),
  sectionsColor: PropTypes.string.isRequired,
  sectionsTextColor: PropTypes.string.isRequired,
  sectionsTextSize: PropTypes.number.isRequired,
  sectionsItems: PropTypes.arrayOf(PropTypes.string).isRequired,
}

Header.defaultProps = {
  hideSections: false,
  backgroundColor: '#fff',
  backgroundGradient: {},
}

export default Header
