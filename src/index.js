import DateScalar from './scalar/date'
import JSONScalar from './scalar/json'
import StatusScalar from './scalar/status'
import ArrayOrStringScalar from './scalar/arrayOrString'

const resolverMap = {
  Date: DateScalar,
  JSON: JSONScalar,
  Status: StatusScalar,
  ArrayOrString: ArrayOrStringScalar,
}

export default resolverMap
