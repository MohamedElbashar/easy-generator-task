import { OmitBaseProps, Omit_id } from '../../types';
import { IUser, Users } from '../../types';

export async function createdUser(data: OmitBaseProps<IUser>): Promise<IUser> {
  const newUser = {
    userName: data.userName,
    password: data.password,
    email: data.email,
    createdAt: new Date(),
    updatedAt: new Date(),
  } as Omit_id<IUser>;

  const result = await Users.create(newUser);
  const user = { _id: result._id, ...newUser };

  return user;
}
