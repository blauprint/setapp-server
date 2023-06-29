import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import clerk from '@clerk/clerk-sdk-node';

@Injectable()
export class ClerkAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const auth = JSON.parse(request.headers.authorization);
      const session = await clerk.sessions.verifySession(auth.sessionId, auth.sessionToken);
      if (!session) {
        throw new Error(); 
      }
    } catch (error) {
      console.log(error)
      throw new UnauthorizedException('Invalid session')
    }
    return true;
  }
}
