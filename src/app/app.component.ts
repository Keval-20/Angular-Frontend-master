import {Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Temperature Converter';
  fah: Number ;
     cel: Number;
  constructor (private formBuilder: FormBuilder)
  {
    formGroup: FormGroup;
     fah: Number ;
     cel: Number;
  }
  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32



  }

  getChangeCel(event) {
    const newC = (Number(this.fah) - 32) * (5 / 9);
    this.cel = newC;
    console.log('hello' + newC);
  }
  getChangeFah(event) {
    const newF = Number(this.cel) * (9 / 5) + 32;

    this.fah = newF;

    console.log('hello' + newF);
  }
}
