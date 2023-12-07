const { User} = require('../models');

const {signToken, AuthenticationError } = require('../utils/auth')

const resolvers = {
  Query: {
    profile: async (parent, args, context) => {
      if(context.user){
        return User.findOne({ _id: context.user._id})
      }
      else throw 
    }
  },
  Mutation: {
    login: async (parent, { email, password }) => {
        const foundUser = await User.findOne({ email });
  
        if (!foundUser) {
          throw AuthenticationError;
        }
  
        const correctPw = await foundUser.isCorrectPassword(password);
  
        if (!correctPw) {
          throw AuthenticationError;
        }
  
        const token = signToken(foundUser);
        return { token, foundUser };
      },
  }
};

module.exports = resolvers;