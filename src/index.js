import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import App from './App'

import 'bootstrap/dist/css/bootstrap.css'
import './index.scss'
import 'animate.css'

import * as serviceWorker from './serviceWorker'

// Setup FontAwesome Library
import {
  faAngleDoubleUp, faBars, faGavel, faHeart, faLink, faMapMarkerAlt, faPhone, faGlobeAmericas, faDemocrat, faRepublican, faVoteYea
} from '@fortawesome/free-solid-svg-icons'

library.add(
  fab,
  faAngleDoubleUp,
  faBars,
  faGavel,
  faHeart,
  faLink,
  faMapMarkerAlt,
  faPhone,
  faGlobeAmericas,
  faDemocrat,
  faRepublican,
  faVoteYea
)

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()