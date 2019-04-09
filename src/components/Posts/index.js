import React from 'react'
import PropTypes from 'prop-types'

import PostsItem from './Item'

import './styles/index.sass'

class Posts extends React.PureComponent {
  static renderItem({ id, imageUrl, title, description }) {
    return (
      <PostsItem
        id={id}
        key={id}
        imageUrl={imageUrl}
        title={title}
        description={description}
      />
    )
  }

  render() {
    const { items } = this.props

    return (
      <div className="marfeel__Posts">
        {items.map(Posts.renderItem)}
      </div>
    )
  }
}

Posts.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(PostsItem.propTypes)),
}

Posts.defaultProps = {
  items: [],
}

export default Posts
