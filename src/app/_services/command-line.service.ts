import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CommandLineService {
  constructor(private http: HttpClient) {}

  executeCommand(
    command: string,
    obj: { testName: string; filterType: number } = {
      testName: "",
      filterType: 0
    }
  ) {
    if (command == "g") {
      return this.http.get<any[]>(
        environment.apiUrl +
          "CLI/" +
          command +
          "?testName=" +
          obj.testName +
          "&filterType=" +
          obj.filterType
      );
    }
    return this.http.get<any[]>(environment.apiUrl + "CLI/" + command);
  }
}
