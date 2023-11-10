import { IToken } from '@easy-generator/easy-generator-database';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserToken = createParamDecorator(
  (data: unknown, context: ExecutionContext): IToken => {
    const request = context.switchToHttp().getRequest();
    return request.userToken;
  },
);
