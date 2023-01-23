import { Component, Input, OnInit } from '@angular/core';

import { PlayerStats } from '../shared/models/PlayerStats';
@Component({
  selector: 'app-statbar',
  templateUrl: './statbar.component.html',
  styleUrls: ['./statbar.component.css']
})
export class StatbarComponent implements OnInit {
  @Input() playerStats!: PlayerStats;
  lives: number[] = [];
  rerolls: number[] = [];
  wins: number[] = [];
  ngOnInit() {
    this.lives = Array(this.playerStats.lives).fill(0);
    this.rerolls = Array(this.playerStats.rerolls).fill(0);
  }


}
