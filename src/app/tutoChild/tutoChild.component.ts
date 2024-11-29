import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tutoChild',
  standalone: true,
  imports: [],
  templateUrl: './tutoChild.component.html',
  styleUrl: './tutoChild.component.scss'
})

export class TutoChildComponent {
  @Input() count!: number;
  @Output() valueChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  addCount() {
    this.count++;
    this.valueChange.emit(this.count);
  }
}
