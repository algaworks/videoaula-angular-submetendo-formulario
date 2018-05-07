import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  contatosUrl = 'http://localhost:8080/contatos';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Array<any>>(this.contatosUrl);
  }

  criar(contato: any) {
    return this.http.post(this.contatosUrl, contato);
  }
}
