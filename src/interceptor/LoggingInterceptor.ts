import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class LoggingInterceptor implements NestInterceptor{
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    console.log('interceptor before')
    return next.handle().pipe(
      tap(()=>{console.log('interceptor after')})
    );
  }

}
