import React, { Component, PropTypes} from 'react'
import Post from '../../posts/containers/Post.jsx'
import api from '../../api.js'
import Loading from '../../shared/components/Loading.jsx'

class Profile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {},
      posts: [],
      loading: true
    }
  }

  componentDidMount () {
    this.initialFetch()
  }
  async initialFetch () {
    const [
    user,
    posts
    ] = await Promise.all([
      api.users.getSingle(this.props.params.id),
      api.users.getPosts(this.props.params.id)
    ])

    this.setState({
      user,
      posts,
      loading: false
    })
  }

  render () {
    if (this.state.loading) {
      return <Loading />
    }
    return (
      <section name='Profile'>
        <h2>Profile of {this.state.user.name}</h2>

        <fieldset>
          <legend> basic info</legend>
          <input type='email' value={this.state.user.email} disabled />
        </fieldset>
        {this.state.user.address && (
        <fieldset>
          <legend> Address</legend>
          <address>
            {this.state.user.address.street}<br />
            {this.state.user.address.suite}<br />
            {this.state.user.address.city}<br />
            {this.state.user.address.zipcode}<br />
          </address>
        </fieldset>
        )}

        <section>
          {this.state.posts
            .map(post => <Post key={post.id} user={this.state.user} {...post} />)}
        </section>
      </section>
    )
  }
}

Profile.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string
  })
}

export default Profile
