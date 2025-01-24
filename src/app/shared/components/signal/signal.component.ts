import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {
  writableSignal = signal(0);
  computedSignal = computed(() => this.writableSignal() * 2);

  constructor() {
    effect(() => {
      console.log('The computed signal is triggered', this.computedSignal());
    });

    effect(() => {
      console.log('The writable signal is triggered', this.writableSignal());
    }) 
  }

  increaseValue() {
    this.writableSignal.update(value => value + 1);
  }
}
