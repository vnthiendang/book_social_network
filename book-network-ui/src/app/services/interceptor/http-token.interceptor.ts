import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest
} from '@angular/common/http';
import {inject, Injectable} from "@angular/core";
import {catchError, Observable, throwError} from "rxjs";
import {TokenService} from "../token/token.service";

export const httpTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService); // Inject the TokenService
  const token: string = tokenService.token; // Get the token from the service

  // Check if the token exists
  if (token) {
    // Clone the request and add the Authorization header with the token
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });

    // Pass the cloned request with the Authorization header to the next handler
    return next(authReq);
  }
  return next(req);
};

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor{
  constructor(
    private tokenService: TokenService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = this.tokenService.token;

    if (token) {
      const clonedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      return next.handle(clonedReq).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 403) {
            console.error('Access forbidden. Check token or permissions.');
          }
          return throwError(() => error);
        })
      );
    }

    return next.handle(req);
  }

}
