import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Todo } from "./../models/todo.class";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  public API: string = "https://5d8db435370f02001405c26a.mockapi.io/items";

  constructor(public http: HttpClient) {}

  // getAllTodos() : Observable<HttpEvent<any>> {
  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API);
  }
}
