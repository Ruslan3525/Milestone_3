import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-qwerty',
  templateUrl: './qwerty.component.html',
  styleUrls: ['./qwerty.component.css']
})
export class QwertyComponent {
@Input() deviceXs: boolean;
}
