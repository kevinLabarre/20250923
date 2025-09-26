import { Component, computed, effect, signal, Signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals-page',
  imports: [],
  templateUrl: './signals-page.html',
  styleUrl: './signals-page.css'
})
export class SignalsPage {

  constructor() {
    effect(() => document.title = "Mon compteur: " + this.count())
  }

  count: WritableSignal<number> = signal(0); // 0 est la valeur initiale du signal

  increment() {
    this.count.update((prevCount) => prevCount + 1)
  }

  decrement() {
    this.count.update((prevCount) => prevCount - 1)
  }

  reset() {
    this.count.set(0);
  }

  countCarre = computed(() => this.count() * this.count());
}
