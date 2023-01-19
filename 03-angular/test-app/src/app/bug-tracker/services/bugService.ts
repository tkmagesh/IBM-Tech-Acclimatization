import { Injectable } from "@angular/core";
import Bug from "../models/Bug";

@Injectable({
    providedIn : "root",
})
export class BugsService{
    public Toggle(bug : Bug){
        bug.isClosed != bug.isClosed
    }
}