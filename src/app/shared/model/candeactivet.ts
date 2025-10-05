import { Observable } from "rxjs";


export interface Icandeactivate{
    canDeactivate:()=>boolean|Observable<boolean>|Promise<boolean>
}