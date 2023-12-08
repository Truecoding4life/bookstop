const { User } = require("../models");

const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    profile: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      } else {
        throw AuthenticationError;
      }
    },
    profiles: async (parent, args)=>{
      return User.find({})
    }
  },
  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const createdSuccess = User.create({ username, email, password });
      const token = signToken(createdSuccess);

      return { token, createdSuccess};
    },
    login: async (parent, { email, password }) => {
      const foundUser = await User.findOne({ email });
      if (!foundUser) {
        throw new AuthenticationError();
      }

      const correctPw = await foundUser.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError();
      }

      const token = signToken(foundUser);
      return { token, foundUser };
    },
  //   addBook: async (parent, {userId, description, title}) => {
  //   const updateUser = User.findOneAndUpdate(
  //     { _id: userId },
  //     {
  //       $addToSet: { savedBooks: {title, description} },
  //     },
  //     {
  //       new: true,
  //       runValidators: true,
  //     }
  //   );
  // },
  },
  
};

module.exports = resolvers;
