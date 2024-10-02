import { Component, OnInit } from '@angular/core';
import { Avion } from '../model/avion.model';
import { AvionService } from '../services/avion.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avions',
  templateUrl: './avions.component.html',
})
export class AvionsComponent implements OnInit {

  avions?: Avion[]; // Un tableau des avions

  constructor(private avionService: AvionService, public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.chargerAvions();
  }

  chargerAvions() {
    this.avionService.listeAvion().subscribe(avios => {
      console.log(avios);
      this.avions = avios;
    });
  }

  supprimerAvion(avion: Avion) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.avionService.supprimerAvion(avion.idAvion).subscribe(() => {
        console.log('Avion supprimé');
        this.chargerAvions();
      });
    }
  }
}
