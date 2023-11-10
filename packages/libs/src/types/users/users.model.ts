import mongoose from 'mongoose';
import { type IUser } from './users.interface';
import { ObjectId } from 'bson';

const usersSchema = new mongoose.Schema<IUser>(
  {
    password: {
      type: String,
      required: true,
      validate: {
        validator: function (v: any) {
          const passwordRegex =
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
          return passwordRegex.test(v);
        },
        message: 'Password does not meet the requirements.',
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    userName: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    collection: 'users',
  }
);
export const Users = mongoose.model<IUser>('users', usersSchema);
