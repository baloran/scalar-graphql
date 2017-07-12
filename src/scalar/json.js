import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'

export default new GraphQLScalarType({
  name: 'JSON',
  description: 'JSON custom scalar',
  parseValue(value) {
    return value
  },
  serialize(value) {
    return value
  },
  parseLiteral(ast) {
    switch (ast.kind) {
      case Kind.STRING:
      case Kind.BOOLEAN:
        return ast.value
      case Kind.INT:
      case Kind.FLOAT:
        return parseFloat(ast.value)
      case Kind.OBJECT: {
        const value = Object.create(null)
        ast.fields.forEach(field => {
          value[field.name.value] = parseLiteral(field.value)
        })

        return value
      }
      case Kind.LIST:
        return ast.values.map(parseLiteral)
      default:
        return null
    }
  },
})
