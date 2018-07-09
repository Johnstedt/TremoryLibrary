import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import main from './reducers/mainReducer'
import profile from './reducers/profileReducer'
import image from './reducers/imageReducer'
import key from './reducers/keyReducer'
import album from './reducers/albumReducer'
import current from './reducers/currentReducer'
import notification from './reducers/notificationReducer'
import search from './reducers/searchReducer'
import settings from './reducers/settingsReducer'
import edit from './reducers/editReducer'
import explore from './reducers/exploreReducer'
import share from './reducers/shareReducer'

import { isProduction } from './Config'

export default createStore(
    combineReducers({main, profile, image, key, album, current, notification, search, settings, edit, explore, share}), {},
    isProduction() ? applyMiddleware( thunk, promise()) : applyMiddleware(createLogger(), thunk, promise())
);