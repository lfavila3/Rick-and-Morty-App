import { Component, OnInit } from "@angular/core";
import { LocationsService } from "../../services/locations.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-locations",
  templateUrl: "./locations.page.html",
  styleUrls: ["./locations.page.scss"],
})
export class LocationsPage implements OnInit {
  Locations: any = [];
  constructor(
    private locService: LocationsService,
    private routeActive: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.routeActive.snapshot.paramMap.get("id");
    console.log(id);
    this.locService.getLocation(id).subscribe((loc) => {
      console.log(loc);
      this.Locations = loc;
    });
  }
}
