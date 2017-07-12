import DateScalar from './scalar/date'
import JSONScalar from './scalar/json'

const resolverMap = {
  Date: DateScalar,
  JSON: JSONScalar,
}

export default resolverMap
