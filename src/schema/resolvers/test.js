const bookResolvers = {
  Query: {
    books: async (_, _arg, { models }) => {
      return models.Book.find();
    },
  },
  // Otros resolvers relacionados con libros...
};

export default bookResolvers;