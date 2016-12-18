import React, { Component } from 'react';
import { Link } from 'react-router';

class Profile extends Component {
  render() {
    return (
      <section name="Profile">
        <h1>Profile</h1>
        <Link to="/">
          Go to home
        </Link>
        <Link to="/ramdom">
          Go to ramdom
        </Link>
      </section>
    );
  }
}

export default Profile;
