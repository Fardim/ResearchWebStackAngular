import { CommandLineService } from "./../_services/command-line.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-command-line",
  templateUrl: "./command-line.component.html",
  styleUrls: ["./command-line.component.css"]
})
export class CommandLineComponent implements OnInit {
  commandLineCommands: any[] = [
    { id: "a", name: "app.exe runNodeJs FilePath ...." },
    { id: "b", name: "app.exe runPython FilePath ...." },
    { id: "c", name: "app.exe cmd FilePath ...." },
    { id: "d", name: "app.exe cmd script 'code' ...." },
    { id: "e", name: "app.exe ps Script ...." },
    { id: "f", name: "app.exe ps FilePath ...." },
    { id: "g", name: "app.exe getTests nameFilter FilterType ...." },
    { id: "h", name: "app.exe getFailedTests...." },
    { id: "i", name: "app.exe getNonPassingTests...." },
    { id: "j", name: "app.exe registry addOrUpdate appnamekey...." },
    { id: "k", name: "app.exe registry delete appnamekey...." },
    { id: "l", name: "app.exe registry add appnamekey...." },
    { id: "m", name: "app.exe registry set appnamekey...." }
  ];
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
  UnitTestResultList: any[];
  category = "a";
  searchForm: FormGroup;
  filterTypes = [
    { id: 0, name: "Contains" },
    { id: 1, name: "StartsWith" },
    { id: 2, name: "EndsWith" }
  ];
  constructor(
    private commandLineService: CommandLineService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      testName: ["", []],
      filterType: ["0", []]
    });
  }

  onClick(command: string) {
    this.commandLineService.executeCommand(command).subscribe(data => {
      console.log(data);
      this.UnitTestResultList = [...data];
      this.category = command;
    });
  }
  searchBy() {
    this.commandLineService
      .executeCommand(this.category, this.searchForm.value)
      .subscribe(
        data => {
          this.UnitTestResultList = [...data];
        },
        error => {
          alert(error.message);
          this.UnitTestResultList = [];
        }
      );
  }
}
