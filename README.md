# Custom scalar Graphql

```bash
npm i custom-scalar-graphql
```

## How use it?

```
import customScalarGraphql from 'custom-scalar-graphql'

const schema = makeExecutableSchema({
  typeDefs: [
    Type
    Mutation,
    Query,
    ...customScalarGraphql,
  ],
  resolvers,
})
```