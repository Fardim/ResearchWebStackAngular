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
    return this.http.get<UnitTestResult[]>(environment.apiUrl);
  }
  getNonPassingTest() {
    return this.http.get<UnitTestResult[]>(
      environment.apiUrl + "GetNonPassingTest"
    );
  }
  getPassingTest() {
    return this.http.get<UnitTestResult[]>(
      environment.apiUrl + "GetPassingTest"
    );
  }
  getFailedTest() {
    return this.http.get<UnitTestResult[]>(
      environment.apiUrl + "GetFailedTest"
    );
  }
  getInfo(obj: { testName: string; filterType: number }) {
    return this.http.get<UnitTestResult[]>(
      environment.apiUrl +
        "GetInfo/?testName=" +
        obj.testName +
        "&filterType=" +
        obj.filterType
    );
  }
}
