const { GraphQLScalarType } = require('graphql');

const DateScalar = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom type for "date created" in an item listing',
    parseValue(value) {
      return new Date(value);
    },
    serialize(value) {
      return value.getTime(); 
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value);
      }
      return null;
    }
  })
};

module.exports = {
  DateScalar
};
