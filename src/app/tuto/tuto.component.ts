import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Plant } from '../models/plant';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddUser } from '../store/action';
import { User } from '../store/user';
import { TutoChildComponent } from '../tutoChild/tutoChild.component';

@Component({
  selector: 'app-tuto',
  standalone: true,
  imports: [ReactiveFormsModule, TutoChildComponent],
  templateUrl: './tuto.component.html',
  styleUrl: './tuto.component.scss'
})

export class TutoComponent {
  data: Plant[] = [];
  loading: boolean = false;
  usersList: User[] = [];
  userName = new FormControl('');
  dataChild: number = 0;

  constructor(
    private apiService: ApiService,
    private store: Store
  ) { }

  ngOnInit() {
    this.store.select(state => state.users).subscribe(state => {
      this.usersList = state.usersList;
    });

    this.loadPlants();
  }

  addUser() {
    if(this.userName.value) {
      const newUser: User = { id: Date.now() + Math.floor(Math.random() * 1000), name: this.userName.value };
      this.store.dispatch(new AddUser(newUser));
    }
  }

  private loadPlants() {
    this.data = [];
    this.loading = true;
    this.apiService.getPlant('plants?page=1')
      .subscribe({
        next: response => {
          this.data = response.data;
          this.loading = false;
        },
        error: error => {
          console.error('Erreur lors du chargement des données', error);
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        }
      });
  }
}
