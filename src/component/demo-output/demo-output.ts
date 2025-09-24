import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo-output',
  imports: [],
  templateUrl: './demo-output.html',
  styleUrl: './demo-output.css'
})
export class DemoOutput implements OnInit {
  @Output() parentFct = new EventEmitter<string>();

  ngOnInit(): void {
    this.parentFct.emit("Données envoyées par l'enfant !");
  }

  handleSendData() {
    this.parentFct.emit("On a cliqué sur le bouton présent chez l'enfant !")
  }
}
