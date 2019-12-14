import { UnitTestResultService } from "./../_services/unit-test-result.service";
import { UnitTestResult } from "./../_models/UnitTestResult";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-failed-test",
  templateUrl: "./failed-test.component.html",
  styleUrls: ["./failed-test.component.css"]
})
export class FailedTestComponent implements OnInit {
  UnitTestResultList: UnitTestResult[];
  showSpinner: boolean = false;
  title = "Failed Test Results";
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
    this.unitTestResultService.getFailedTest().subscribe(data => {
      this.UnitTestResultList = [...data];
      this.showSpinner = false;
    });
  }
}
