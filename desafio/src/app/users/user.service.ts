import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./user";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private userUrl: string = 'http://localhost:3100/api/users';

    constructor(private httpClient: HttpClient){}

    retrieveAll(): Observable<User[]> {
        return this.httpClient.get<User[]>(this.userUrl);
    }

    retrieveById(id: number): Observable<User>{
        return this.httpClient.get<User>(`${this.userUrl}/${id}`);
    }

    save(user: User): Observable<User>{
        if(user.id){
            return this.httpClient.put<User>(`${this.userUrl}/${user.id}`, user);
        }else{
            return this.httpClient.post<User>(`${this.userUrl}`, user);
        }
    }

    deleteById(id: number): Observable<any>{
        return this.httpClient.delete<any>(`${this.userUrl}/${id}`);
    }
}