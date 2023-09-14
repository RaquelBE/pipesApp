import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  //i18nSelect
  public name: string = 'Raquel';
  public gender: 'male' | 'female' = 'female';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Jose Luis';
    this.gender = 'male';
  }

  //i18nPlural
  public clients: string[] = [
    'Maria',
    'Pablo',
    'Noelia',
    'Javi',
    'Susana',
    'Jesús',
    'Tony',
    'Marga',
  ];
  public clientsMap = {
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas esperando.',
    other: 'tenemos # clientes esperando.',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  //keyValue Pipe
  public person = {
    name: 'Raquel',
    age: 31,
    address: 'Baldosas Amarillas, Ciudad Esmeralda',
  };

  //Async Pipe
  public myObservableTimer:Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap:', value))
  );

  //las promesas no pueden cancelarse
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
    }, 3500);
  });
}
