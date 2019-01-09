import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { Observable } from 'rxjs/Observable':
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  constructor(private httpClient: HttpClient) { }

/*  const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};*/

private extractData(res: Response) {
  let body = res;
  return body || { };
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

  obtenerTodasLasPersonas(): Observable<any> {

    return this.httpClient.get("http://localhost:8079/producer/persona").pipe(map(this.extractData));

  }

getPersonByIdentification(identification): Observable<any>{
  console.log("http://localhost:8079/producer/persona/"+identification+"/");
  return this.httpClient.get("http://localhost:8079/producer/persona/"+identification+"/")
  .pipe(map(this.extractData));;

}

  eliminarPersona(identification): Observable<any>{
    console.log("http://localhost:8079/producer/persona/"+identification+"/");
    return this.httpClient.delete("http://localhost:8079/producer/persona/"+identification+"/");

  }


  addPersona (persona: any): Observable<any> {
    console.log(persona);
    let json= JSON.stringify(persona);
    return this.httpClient.post("http://localhost:8079/producer/persona/",
     json, this.httpOptions);

  }

  updatePersona (persona): Observable<any> {
    return this.httpClient.post("http://localhost:8079/producer/persona", JSON.stringify(persona), httpOptions).pipe(
      tap(_ => console.log(`updated persona id=${id}`)),
      catchError(this.handleError<any>('updatePersona'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
