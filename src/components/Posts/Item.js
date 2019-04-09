import React from 'react'
import PropTypes from 'prop-types'

import './styles/index.sass'

const MAX_LENGTH_DESCRIPTION = 100

class PostsItem extends React.PureComponent {
  static truncateDescription(description) {
    if (description.length <= MAX_LENGTH_DESCRIPTION) {
      return description
    }

    return `${description.slice(0, MAX_LENGTH_DESCRIPTION - 1)}...`
  }

  render() {
    const { imageUrl, title, description } = this.props

    const truncatedDescription = PostsItem.truncateDescription(description)

    return (
      <div className="marfeel__Posts__Item">
        {imageUrl && (
          <img className="marfeel__Posts__Item__Image" src={imageUrl} alt={title} />
        )}

        <div>
          <div className="marfeel__Posts__Item__Title">{title}</div>
          <div className="marfeel__Posts__Item__Description">{truncatedDescription}</div>
        </div>
      </div>
    )
  }
}

PostsItem.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

PostsItem.defaultProps = {
  imageUrl: null,
}

export default PostsItem
