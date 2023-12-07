const { User} = require('../models');

const {signToken} = require('../utils/auth')

const resolvers = {
  Query: {
    profile: async (parent, args, context) => {
      if(context.user){
        return User.findOne({ _id: context.user._id})
      }
    }
  },
  Mutation: {
    login: async (parent, { email, password }) => {
        const foundUser = await User.findOne({ email });
  
        if (!foundUser) {
          throw AuthenticationError;
        }
  
        const correctPw = await profile.isCorrectPassword(password);
  
        if (!correctPw) {
          throw AuthenticationError;
        }
  
        const token = signToken(profile);
        return { token, profile };
      },
  }
};

module.exports = resolvers;