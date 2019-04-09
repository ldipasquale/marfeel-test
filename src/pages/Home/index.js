import React from 'react'

import Header from 'components/Header'
import Posts from 'components/Posts'
import Spinner from 'components/Spinner'

import CustomizationsService from 'services/Customizations'
import PostsService from 'services/Posts'

class Home extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      hideSections: false,
      isFetching: true,
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.handleChangeSection = this.handleChangeSection.bind(this)
  }

  async componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)

    const customizations = await CustomizationsService.get()
    const posts = await PostsService.get()

    return this.setState({
      customizations,
      originalPosts: posts,
      posts,
      isFetching: false,
      activeSection: customizations.sectionsItems[0],
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const { hideSections } = this.state

    const shouldHideSection = window.scrollY > 400

    if (!hideSections && shouldHideSection) {
      return this.setState({
        hideSections: true,
      })
    }

    if (hideSections && !shouldHideSection) {
      return this.setState({
        hideSections: false,
      })
    }

    return null
  }

  handleChangeSection(selectedSection) {
    const { originalPosts, customizations } = this.state

    return this.setState({
      activeSection: selectedSection,
      posts: selectedSection === customizations.sectionsItems[0]
        ? originalPosts
        : originalPosts.filter(post => post.category === selectedSection),
    })
  }

  render() {
    const { hideSections, isFetching, posts, customizations, activeSection } = this.state

    if (isFetching) {
      return (
        <Spinner
          type="Puff"
          color="#00BFFF"
          height="100"
          width="100"
        />
      )
    }

    return (
      <div>
        <Header
          hideSections={hideSections}
          onChangeSection={this.handleChangeSection}
          activeSection={activeSection}
          {...customizations}
        />

        <Posts items={posts} />
      </div>
    )
  }
}

export default Home
