import { CanActivate, ExecutionContext, Injectable, UnauthorizedException, InternalServerErrorException } from '@nestjs/common';
import clerk from '@clerk/clerk-sdk-node';

@Injectable()
export class ClerkAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const auth = JSON.parse(request.headers['authorization']); console.log(auth, 'auth header')
      const session = await clerk.sessions.verifySession(auth.sessionId, auth.sessionToken);
      if (!session) {
        throw new Error();
      }
    } catch (error) {
      console.log(error)
      if (error instanceof UnauthorizedException) throw new UnauthorizedException('Invalid session');
      throw new InternalServerErrorException('Internal server error');
    }
    return true;
  }
}
