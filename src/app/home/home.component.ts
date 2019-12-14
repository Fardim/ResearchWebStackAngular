import { UnitTestResult } from "./../_models/UnitTestResult";
import { UnitTestResultService } from "./../_services/unit-test-result.service";
import { Component, OnInit } from "@angular/core";
import * as _ from "underscore";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  UnitTestResultList: UnitTestResult[];
  showSpinner: boolean = false;
  title = "All Unit Test Result";
  columns = [
    { title: "Test Name", key: "TestName", isSortable: false },
    { title: "Class Name", key: "ClassName", isSortable: false },
    {
      title: "Fully Quantified Name",
      key: "FullyQuantifiedName",
      isSortable: false
    },
    { title: "Status", key: "Status", isSortable: false }
  ];
  constructor(private unitTestResultService: UnitTestResultService) {}

  ngOnInit() {
    this.showSpinner = true;
    this.unitTestResultService.getUnitTestResultsAll().subscribe(data => {
      this.UnitTestResultList = [...data];
      this.showSpinner = false;
    });
  }
}
