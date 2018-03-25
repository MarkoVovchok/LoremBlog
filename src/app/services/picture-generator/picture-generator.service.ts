import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PictureGeneratorService {

  constructor(private http: HttpClient) { }

  getRandomPicture(): Observable<string> {
    return this.http.get<string>('https://picsum.photos/894/180/?random');
  }
}
