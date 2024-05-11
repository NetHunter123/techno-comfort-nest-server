import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  // : boolean | Promise<boolean> | Observable<boolean>
  // це функціонал захисту маршрутів і перевірки чи людина авторизована
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    return request.isAuthenticated();
  }
}
