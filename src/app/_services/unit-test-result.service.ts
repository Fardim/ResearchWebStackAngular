import { environment } from "./../../environments/environment";
import { UnitTestResult } from "./../_models/UnitTestResult";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UnitTestResultService {
  constructor(private http: HttpClient) {}

  getUnitTestResultsAll() {
    return this.http.get<UnitTestResult[]>(environment.apiUrl + "UnitTests/");
  }
  getNonPassingTest() {
    return this.http.get<UnitTestResult[]>(
      environment.apiUrl + "UnitTests/GetNonPassingTest"
    );
  }
  getPassingTest() {
    return this.http.get<UnitTestResult[]>(
      environment.apiUrl + "UnitTests/GetPassingTest"
    );
  }
  getFailedTest() {
    return this.http.get<UnitTestResult[]>(
      environment.apiUrl + "UnitTests/GetFailedTest"
    );
  }
  getInfo(obj: { testName: string; filterType: number }) {
    return this.http.get<UnitTestResult[]>(
      environment.apiUrl +
        "UnitTests/GetInfo/?testName=" +
        obj.testName +
        "&filterType=" +
        obj.filterType
    );
  }
}
