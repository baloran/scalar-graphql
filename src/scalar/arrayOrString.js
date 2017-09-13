import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'

export default new GraphQLScalarType({
  name: 'ArrayOrString',
  description: 'ArrayOrString.. explicit no ? :3',
  parseValue(value) {
    return value
  },
  serialize(value) {
    return value
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return ast.value
    } else if (ast.kind === Kind.LIST) {
      return ast.value
    }
    return null
  },
})
