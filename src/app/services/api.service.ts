import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  getEpisodes() {
      return this.http.get(`https://www.breakingbadapi.com/api/episodes`)
  }
  getQuotes() {
    return this.http.get(`https://www.breakingbadapi.com/api/quotes`)
  }
  getQuotesByAuthor(author) {
    return this.http.get(`https://www.breakingbadapi.com/api/quote?author=${author}`)
  }
  getCharacters(limit, offset) {
    return this.http.get(`https://www.breakingbadapi.com/api/characters?limit=${limit}&offset=${offset}`)
}
  getEpisode(id) {
      return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`)
  }
  getCharacter(id) {
    return this.http.get(`https://breakingbadapi.com/api/characters/${id}`)
  }
  getQuote(id) {
    return this.http.get(`https://breakingbadapi.com/api/quotes/${id}`)
  }
  getTotalDeaths(search) {
    if(search && search.trim() != ""){
      return this.http.get(`https://www.breakingbadapi.com/api/death-count?name=${search}`)
    }
    return this.http.get(`https://www.breakingbadapi.com/api/death-count`)
  } 
}