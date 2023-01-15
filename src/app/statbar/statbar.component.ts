import { Component, Input} from '@angular/core';

import { PlayerStats } from '../shared/models/PlayerStats';
@Component({
  selector: 'app-statbar',
  templateUrl: './statbar.component.html',
  styleUrls: ['./statbar.component.css']
})
export class StatbarComponent {
  @Input() stats: PlayerStats | undefined;
}
