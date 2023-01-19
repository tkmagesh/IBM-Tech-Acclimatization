import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Bug from "../models/Bug";

@Injectable({
    providedIn : 'root'
})
export class BugApiService {
    constructor(private http : HttpClient){

    }
    public GetAll() : Observable<Bug[]> {
        return this.http
            .get<Bug[]>('http://localhost:3030/bugs')
            
    }

    public Save(bugToSave : Bug) : Observable<Bug> {
        if (bugToSave.id === 0) /* new bug */ {
            return this.http
                .post<Bug>('http://localhost:3030/bugs', bugToSave)
        } else {
            return this.http
                .put<Bug>(`http://localhost:3030/bugs/${bugToSave.id}`, bugToSave)
        }
    }

    public Remove(bugToRemove : Bug) : Observable<any> {
        return this.http
            .delete<any>(`http://localhost:3030/bugs/${bugToRemove.id}`)
    }
}