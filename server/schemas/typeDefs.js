const typeDefs =`
    type Book {
        bookId: ID!
        title: String!
        description: String!
        image: String
        link: String
        authors: [Author]        
    }

    type Author {
        name: String
    }

    type User {
        _id: ID
        email: String!
        password: String!
        savedBooks: [Book]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        profiles: [User]!
        profile(_id: ID!): User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
        addBook(userId: ID!,description: String!, title: String!): User
        removeBook(userId: ID!, name: String!): User    
        login(username: String!, password: String!):User
    }
`;

module.exports = typeDefs;