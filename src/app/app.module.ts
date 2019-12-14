import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";
import { UnitTestResultService } from "./_services/unit-test-result.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BsNavbarComponent } from "./bs-navbar/bs-navbar.component";
import { HomeComponent } from "./home/home.component";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { HttpClientModule } from "@angular/common/http";
import { NonPassingComponent } from "./non-passing/non-passing.component";
import { PassedTestComponent } from "./passed-test/passed-test.component";
import { GetInfoComponent } from "./get-info/get-info.component";
import { GlobalTableComponent } from "./global-table/global-table.component";
import { FailedTestComponent } from "./failed-test/failed-test.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    NonPassingComponent,
    PassedTestComponent,
    GetInfoComponent,
    GlobalTableComponent,
    NonPassingComponent,
    PassedTestComponent,
    FailedTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PaginationModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UnitTestResultService],
  bootstrap: [AppComponent]
})
export class AppModule {}
