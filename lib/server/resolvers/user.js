import User from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default {
  Query: {
    hello: () => 'Hello World'
  },
  Mutation: {
    register: async (_, { username, password }) => {
      try {
        const hash = await bcrypt.hash(password, 12);
        const currUser = await User.findOne({ username });
        if (currUser) {
          return {
            ok: false,
            error: {
              path: 'user',
              message: 'user already exists'
            }
          }
        }
        const user = await new User({ username, password: hash }).save();
        return { ok: true, user }
      } catch(err) {
        return {
          ok: false,
          error: {
            path: 'user',
            message: 'Something went wrong'
          }
        }
        next(err);
      }
    },
    changePassword: async (_, { username, newPassword }) => {
      try {
        const newHash = await bcrypt.hash(newPassword, 12);
        try {
          const currUser = await User.findOne({ username });
          if (!currUser) {
            return {
              ok: false,
              error: {
                path: 'user',
                message: 'User does not exists'
              }
            }
          }
          const user = await User.findOneAndUpdate({ username }, { password: newHash });
          return { ok: true, user }
        } catch(err) {
          return { ok: false, error: { path: 'user', message: 'Something went wrong' } }
        }
      } catch(err) {
        return {
          ok: false,
          error: {
            path: 'user',
            message: 'Something went wrong'
          }
        }
        next(err);
      }
    },
    login: async (_, { username, password }, { SECRET }) => {
      try {
        const user = await User.findOne({ username });
        if (!user) {
          return {
            ok: false,
            error: {
              path: 'user',
              message: 'User not found'
            }
          }
        }
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
          return {
            ok: false,
            error: {
              path: 'user',
              message: 'Wrong password'
            }
          }
        }
        const token = await jwt.sign({ username }, SECRET);
        return {
          ok: true,
          user,
          token
        }
      } catch(err) {
        return {
          ok: false,
          error: {
            path: 'user',
            message: 'something went wrong'
          }
        }
        next(err);
      }
    }
  }
}
