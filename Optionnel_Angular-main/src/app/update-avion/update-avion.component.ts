import { Component, OnInit } from '@angular/core';
import { AvionService } from '../services/avion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Avion } from '../model/avion.model';
import { TypeAv } from '../model/TypeAv.model';

@Component({
  selector: 'app-update-avion',
  templateUrl: './update-avion.component.html',
  styles: [],
})
export class UpdateAvionComponent implements OnInit {
  currentAvion = new Avion();
  types!: TypeAv[];
  updatedTypId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private avionService: AvionService
  ) {}

  ngOnInit(): void {
    this.avionService.listeTypes().subscribe((typs) => {
      this.types = typs._embedded.TypesAv;
      console.log(typs);
    });

    this.avionService
      .consulterAvion(this.activatedRoute.snapshot.params['id'])
      .subscribe((avio) => {
        this.currentAvion = avio;
        this.updatedTypId = this.currentAvion.typeAv.idAv;
      });
  }

  updateAvion() {
    this.currentAvion.typeAv = this.types.find(
      (typ) => typ.idAv == this.updatedTypId
    )!;

    this.avionService.updateAvion(this.currentAvion).subscribe((avio) => {
      this.router.navigate(['avions']);
    });
  }
}
