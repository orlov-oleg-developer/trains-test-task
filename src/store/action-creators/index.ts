import * as TrainsActionCreators from './trains'
import * as SpeedLimitsActionCreators from './speedLimits'

export default {
  ...TrainsActionCreators,
  ...SpeedLimitsActionCreators,
}
