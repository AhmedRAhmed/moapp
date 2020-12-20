import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private http: HttpClient) { }

  getNews(){
    return this.http.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=35ee6b0476304439bd6969a7181ff1e2")
  }

  getnews2(){
    return this.http.get("https://mostakbalwatan.000webhostapp.com/api/allnews")
  }
}
