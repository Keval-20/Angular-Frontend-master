import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.scss']
})
export class TemperatureConverterComponent implements OnInit {

  c = "";
  f = "";
  constructor() { }

  ngOnInit() { }

  onChange(value: string | null, type: "c" | "f") {
    if (value === null) {
      this.c = "";
      this.f = "";
      return;
    }

    const temperature = Number(value);
    if (type === "c") {
      this.f = ((temperature * 9) / 5 + 32).toFixed(1);
    } else {
      this.c = (((temperature - 32) * 5) / 9).toFixed(1);
    }
  }
}
