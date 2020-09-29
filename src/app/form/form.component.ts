import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {
  teamForm: FormGroup;
  error: string;
  search: FormControl;
  teamSearched: any;

  constructor( private teamService: TeamService ) { }

  ngOnInit(): void {
    this.teamForm = new FormGroup({
      estate: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      nickname: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      year: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{4}')
      ])
    });
    this.search = new FormControl('', [Validators.required]);
  }

  saveTeam() {
    if ( this.teamForm.valid ) {
      const team = this.teamForm.value;
      this.teamService.saveTeam( team );
    } else {
      this.error = 'Error al guardar equipo.';
    }
  }

  updateTeam() {
    if ( this.teamForm.valid ) {
      const team = this.teamForm.value;
      this.teamService.updateTeam(team);
    } else {
      this.error = 'Error al actualizar equipo.';
    }
  }

  searchTeam() {
    if (this.search.valid) {
      this.teamSearched = this.teamService.getTeam(this.search.value);
      console.log(this.teamSearched)
    } else {
      this.error = 'Error al Buscar equipo.';
    }
  }

  deleteTeam() {
    if (this.search.valid) {
      this.teamService.deleteTeam(this.search.value);
    } else {
      this.error = 'Error al Buscar equipo.';
    }
  }


}
