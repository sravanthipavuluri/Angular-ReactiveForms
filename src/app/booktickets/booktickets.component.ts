import { Component , OnChanges } from '@angular/core';
import { FormControl , FormGroup , FormBuilder , Validators} from '@angular/forms';
import {Movie, locations } from '../datamodel';

@Component({
  selector: 'app-booktickets',
  templateUrl: './booktickets.component.html',
  styleUrls: ['./booktickets.component.css']
})
export class BookticketsComponent{

    //   bookTcktForm = new FormGroup ({
    //   name: new FormControl()
    // });


    bookTcktForm: FormGroup; 
    address: FormGroup;
    locations = locations;
    movie:Movie;
    constructor(private fb: FormBuilder) {
      this.createForm();
    }    

   createForm() {
    this.bookTcktForm = this.fb.group({// <-- the parent FormGroup
      name:['Krishna', Validators.required ], // <--- the FormControl called "name"
      address: this.fb.group({ // <-- the child FormGroup
        street: ['', Validators.required ],
        city: ['', Validators.required ],
        location: ['', Validators.required ],
        zip: ['', Validators.compose([Validators.required ,Validators.minLength(5),Validators.pattern('\\d{5}')])]
       })      
    });

    // this.bookTcktForm.setValue({
    //   name:    this.movie.name,      
    // });

    // this.bookTcktForm.patchValue({
    //      name:    this.movie.name,      
    // });
  }
  ngOnChanges() {
    this.bookTcktForm.reset({
      name: "",
      address: ""
    });
  }
  

}
