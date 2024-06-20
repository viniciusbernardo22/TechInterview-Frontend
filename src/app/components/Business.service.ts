import { Injectable } from "@angular/core";
import { timeout } from "rxjs";

/* The service needs to be injected, or you will not be able to use it */
@Injectable({
  providedIn: 'root',
})

export class BusinessService {
    async getMessage(): Promise<string> {
        return new Promise<string>(resolve => {
            timeout(1000);
            resolve("May the force be with you!");
        });
    }
}
