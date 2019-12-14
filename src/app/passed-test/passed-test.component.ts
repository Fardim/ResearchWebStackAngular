import { UnitTestResultService } from "./../_services/unit-test-result.service";
import { UnitTestResult } from "./../_models/UnitTestResult";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-passed-test",
  templateUrl: "./passed-test.component.html",
  styleUrls: ["./passed-test.component.css"]
})
export class PassedTestComponent implements OnInit {
  UnitTestResultList: UnitTestResult[];
  showSpinner: boolean = false;
  title = "Passing Test Results";
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
    this.unitTestResultService.getPassingTest().subscribe(data => {
      this.UnitTestResultList = [...data];
      this.showSpinner = false;
    });
  }
}
