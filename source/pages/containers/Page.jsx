import React from 'react'
import Header from '../../shared/components/Header.jsx'

import {
  Match,
  Miss
} from 'react-router'

import Home from './Home.jsx'
import Post from './Post.jsx'
import Profile from './Profile.jsx'
import Error404 from './Error404.jsx'

function Pages () {
  return (
    <main role='application'>
      {/* List de artículos */}
      <Header />
      <Match
        pattern='/'
        exactly
        component={Home}
      />
      {/* Detalle de artículo */}
      <Match
        pattern='/post/:id'
        exactly
        component={Post}
      />
      {/* Perfil de usuario */}
      <Match
        pattern='/user/:id'
        exactly
        component={Profile}
      />
      {/* Error 404 */}
      <Miss component={Error404}
      />
    </main>
  )
}

export default Pages
