import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss']
})
export class FlightEditComponent implements OnInit {

  public flightId: string;

  constructor(private  route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params
      .subscribe(
        (params) => {
          this.flightId = params.id
        }
      )
  }

}
