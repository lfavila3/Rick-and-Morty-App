import { Component } from "@angular/core";
import { LocationsService } from "../services/locations.service";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page {
  Locations: any = [];
  constructor(private LocService: LocationsService) {}

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations() {
    this.LocService.getLocations().subscribe((loc) => {
      console.log(loc);
      this.Locations = loc;
    });
  }
}
