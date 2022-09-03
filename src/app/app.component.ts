import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Laryssa Lisboa';
  nascimento = 2002;
  counter = 0;
  timer = setInterval(() => {
    this.counter = this.counter + 1;
  }, 1000);

  getIdade() {
    return 2022 - this.nascimento;
  }
  getMinutos() {
    return Math.trunc(this.counter / 60);
  }
  getSegundos() {
    return Math.trunc(this.counter % 60);
  }
  getNumbers() {
    return [25, ]
  }
}