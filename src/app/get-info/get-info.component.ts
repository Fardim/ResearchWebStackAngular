import { UnitTestResult } from "./../_models/UnitTestResult";
import { UnitTestResultService } from "./../_services/unit-test-result.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-get-info",
  templateUrl: "./get-info.component.html",
  styleUrls: ["./get-info.component.css"]
})
export class GetInfoComponent implements OnInit {
  UnitTestResultList: UnitTestResult[];
  showSpinner: boolean = false;
  title = "Searched Test Results";
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
  filterTypes = [
    { id: 0, name: "Contains" },
    { id: 1, name: "StartsWith" },
    { id: 2, name: "EndsWith" }
  ];
  searchForm: FormGroup;
  constructor(
    private unitTestResultService: UnitTestResultService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.showSpinner = true;
    this.unitTestResultService
      .getInfo({ testName: "", filterType: 0 })
      .subscribe(data => {
        this.UnitTestResultList = [...data];
        this.showSpinner = false;
      });
    this.searchForm = this.fb.group({
      testName: ["", []],
      filterType: ["0", []]
    });
  }
  searchBy() {
    console.log("obj", this.searchForm.value);
    this.unitTestResultService.getInfo(this.searchForm.value).subscribe(
      data => {
        this.UnitTestResultList = [...data];
        this.showSpinner = false;
      },
      error => {
        alert(error.message);
        this.UnitTestResultList = [];
      }
    );
  }
}
