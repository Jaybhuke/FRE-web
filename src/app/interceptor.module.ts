import { Injectable, NgModule} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { do } 'rxjs/operators';


@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const dupReq = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin','http://127.0.0.1:5000') });
    const dupReq = req.clone({ 
        headers: req.headers
          .set('Access-Control-Allow-Origin','http://127.0.0.1:5000')
          .set('Content-Type','application/json')
          // .set('Authorization',`Bearer ${this._authService.getToken()}`) 
        });
    console.log(dupReq);  
    return next.handle(dupReq);
  }
};
@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true }
  ]
})
export class InterceptorModule { }