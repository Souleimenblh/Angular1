import { Component, OnInit } from '@angular/core';
import { Avion } from '../model/avion.model';
import { AvionService } from '../services/avion.service';

@Component({
  selector: 'app-recherche-par-matricule',
  templateUrl: './recherche-par-matricule.component.html',
  styles: [],
})
export class RechercheParMatriculeComponent implements OnInit {
  matriculeAvion!: string;
  avions!: Avion[];
  allAvions!: Avion[];
  searchTerm!: string;

  constructor(private avionService: AvionService) {}

  ngOnInit(): void {
    this.avionService.listeAvion().subscribe((avios) => {
      console.log(avios);
      this.avions = avios;
    });
  }
  rechercherAvios() {
    this.avionService
      .rechercherParMatricule(this.matriculeAvion)
      .subscribe((avios) => {
        console.log(avios);
        this.avions = avios;
      });
  }

  onKeyUp(filterText: string) {
    this.avions = this.allAvions.filter((item) =>
      item.matriculeAvion.toLowerCase().includes(filterText)
    );
  }
}
