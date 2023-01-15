import { Component, Input, OnInit } from '@angular/core';

import { PlayerStats } from '../shared/models/PlayerStats';
@Component({
  selector: 'app-statbar',
  templateUrl: './statbar.component.html',
  styleUrls: ['./statbar.component.css']
})
export class StatbarComponent implements OnInit {
  @Input() stats: PlayerStats = new PlayerStats();

  ngOnInit() {
    console.log("playerStats rendered")
  }
}
