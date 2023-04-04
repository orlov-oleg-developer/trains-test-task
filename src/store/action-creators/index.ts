import * as TrainsActionCreators from './trains'
import * as ErrorsActionCreators from './errors'

export default {
  ...TrainsActionCreators,
  ...ErrorsActionCreators,
}
