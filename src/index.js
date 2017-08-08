import DateScalar from './scalar/date'
import JSONScalar from './scalar/json'
import StatusScalar from './scalar/status'

const resolverMap = {
  Date: DateScalar,
  JSON: JSONScalar,
  Status: StatusScalar,
}

export default resolverMap
