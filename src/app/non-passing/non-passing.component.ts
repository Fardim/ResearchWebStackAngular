import { UnitTestResult } from "./../_models/UnitTestResult";
import { UnitTestResultService } from "./../_services/unit-test-result.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-non-passing",
  templateUrl: "./non-passing.component.html",
  styleUrls: ["./non-passing.component.css"]
})
export class NonPassingComponent implements OnInit {
  UnitTestResultList: UnitTestResult[];
  showSpinner: boolean = false;
  title = "Non Passing Test Results";
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
    this.unitTestResultService.getNonPassingTest().subscribe(data => {
      this.UnitTestResultList = [...data];
      this.showSpinner = false;
    });
  }
}
