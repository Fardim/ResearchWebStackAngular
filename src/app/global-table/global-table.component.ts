import { UnitTestResult } from "./../_models/UnitTestResult";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-global-table",
  templateUrl: "./global-table.component.html",
  styleUrls: ["./global-table.component.css"]
})
export class GlobalTableComponent implements OnInit {
  @Input("globalItemsList") globalItemsList: UnitTestResult[];
  @Input("columns") columns: any[];
  @Input("title") title: string = "";
  unitTestResult: UnitTestResult;
  showSpinner: boolean = false;
  selectedRow: number;

  constructor() {}

  ngOnInit() {}

  rowSelected(unitTest: UnitTestResult, selectedRow: number) {
    this.unitTestResult = unitTest;
    this.selectedRow = selectedRow;
  }
}
