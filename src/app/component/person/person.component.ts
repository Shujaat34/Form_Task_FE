import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/person';
import { PersonService } from 'src/app/person.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {


  checked = false;

  person = new Person();

  p  = new Person; 

  sectorData: string[] = ['Construction materials', 'Electronics and Optics', 'Bakery & confectionery products',
    'Beverages', 'Fish & fish products', 'Meat & meat products',
    'Milk & dairy products', 'Sweets & snack food', 'Furniture', 'Bathroom', 'Bedroom', 'Childrenâ€™s room', 'Kitchen', 'Living room',
    'Office', 'Outdoor', 'Project furniture', 'Blowing', 'Moulding', 'Plastics welding and processing', 'Plastic profiles', 'Other']


  constructor(private http : HttpClient, private service : PersonService) { }
  

  ngOnInit(): void {
    
  }

  onAddPerson() {
    if (this.person.name == '' || this.person.name == null) {
      Swal.fire('Error !!', 'Please Fill the Name', 'error');
      return;
    }

    if (this.person.sector == '' || this.person.sector == null) {
      Swal.fire('Error !!', 'Please Select a Sector', 'error');
      return;
    }
    
    this.p = this.person;

    this.service.addPerson(this.person).subscribe( (event: any) => {
      Swal.fire('Success',' Person Added Successfully', 'success');
    },
    (err: any) => {
      console.log('Got Error '+err.message);
    });
  }

  reset(){
    this.person.name='';
    this.person.sector='';
    this.person.isAgreedToTerms = false;
  }

}
