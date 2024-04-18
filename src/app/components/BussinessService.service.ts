import { Injectable } from "@angular/core";
import { timeout } from "rxjs";

@Injectable()
export class BussinessService {
    async getMessage(): Promise<string> {
        return new Promise<string>(resolve => {
            timeout(1000);
            resolve("API");         
        });
    }
}