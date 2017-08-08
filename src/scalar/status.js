import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'

const status = ['publish', 'archive', 'trash', 'draft']

export default new GraphQLScalarType({
  name: 'Status',
  description: 'Status of document',
  parseValue(value) {
    return value
  },
  serialize(value) {
    return value
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return isStatus(ast.value)
    }
    return null
  },
})

function isStatus(value) {
  return states.includes(value) ? value : null
}
