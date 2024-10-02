import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TypeAv } from '../model/TypeAv.model';

@Component({
  selector: 'app-update-type',
  templateUrl: './update-type.component.html',
  styles: [],
})
export class UpdateTypeComponent implements OnInit {
  @Input()
  type!: TypeAv;

  @Input()
  ajout!: boolean;

  @Output()
  typeUpdated = new EventEmitter<TypeAv>();

  // @Input()
  // data!: String;

  constructor() {}

  ngOnInit(): void {
    //console.log(this.data);
    console.log('ngOnInit du composant UpdateType ', this.type);
  }

  saveType() {
    this.typeUpdated.emit(this.type);
  }
}
