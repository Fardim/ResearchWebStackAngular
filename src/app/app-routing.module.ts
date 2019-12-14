import { GetInfoComponent } from "./get-info/get-info.component";
import { NonPassingComponent } from "./non-passing/non-passing.component";
import { PassedTestComponent } from "./passed-test/passed-test.component";
import { FailedTestComponent } from "./failed-test/failed-test.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "failed", component: FailedTestComponent },
  { path: "passed", component: PassedTestComponent },
  { path: "nonpassing", component: NonPassingComponent },
  { path: "searchTest", component: GetInfoComponent },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
