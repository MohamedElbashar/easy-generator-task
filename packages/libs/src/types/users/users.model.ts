import mongoose from 'mongoose';
import { type IUser } from './users.interface';
import { ObjectId } from 'bson';

const usersSchema = new mongoose.Schema<IUser>(
  {
    password: { type: String, required: true },
    email: { type: String, required: true },
    userName: { type: String, required: true },
  },
  {
    collection: 'users',
  }
);
export const Users = mongoose.model<IUser>('users', usersSchema);
