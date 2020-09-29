import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teams = [];
  

  constructor() { }

  saveTeam( team ) {
    this.teams.push( team );
    console.log(this.teams)
  }

  getTeam( name ) {
    return this.teams.filter( team => team.name === name);
  }

  updateTeam( updatedTeam ) {
    this.teams  = this.teams.map( team => {
      if ( team.name === updatedTeam.name ) {
        return team = {...updatedTeam};
      }
    });
  }

  deleteTeam( name ) {
    this.teams = this.teams.filter( team => team.name !== name );
  }
}
