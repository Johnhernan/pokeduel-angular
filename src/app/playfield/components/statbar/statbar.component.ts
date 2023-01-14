import { PlayerStats } from './../../../models/PlayerStats';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-statbar',
  templateUrl: './statbar.component.html',
  styleUrls: ['./statbar.component.css']
})
export class StatbarComponent {
  @Input() stats: PlayerStats | undefined;
}
