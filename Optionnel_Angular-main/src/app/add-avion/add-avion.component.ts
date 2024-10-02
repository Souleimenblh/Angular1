import { Component, OnInit } from '@angular/core';
import { Avion } from '../model/avion.model';
import { AvionService } from '../services/avion.service';
import { TypeAv } from '../model/TypeAv.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-avion',
  templateUrl: './add-avion.component.html',
})
export class AddAvionComponent implements OnInit {
  newAvion = new Avion();
  typesAv!: TypeAv[];
  newIdAv!: number;
  newType!: TypeAv;

  message: string = '';

  constructor(private avionService: AvionService, private router: Router) {}
  ngOnInit(): void {
    this.avionService.listeTypes().subscribe((typs) => {
      this.typesAv = typs._embedded.TypesAv;
      console.log(typs);
    });
  }

  // addAvion() {
  //   console.log(this.newIdTyp);
  //  // this.newType = this.avionService.consulterType(this.newIdTyp);
  //   this.newAvion.type = this.newType;
  //   this.avionService.ajouterAvion(this.newAvion);
  //   this.router.navigate(['avions']);

  //   // this.message =
  //   //   'Avion ' + this.newAvion.matriculeAvion + ' ajouté avec succès !';
  // }

  addAvion() {
    
    this.newAvion.typeAv = this.typesAv.find(typ => typ.idAv == this.newIdAv)!;
    this.avionService.ajouterAvion(this.newAvion).subscribe((avio) => {
      console.log(avio);
      this.router.navigate(['avions']);
    });
  }
}
