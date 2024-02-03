import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  array1 = [10, 20, 30, 40, 6, 50]
  all: number;
  addFrom: any
  forVaote: boolean = false


  constructor(private formBulider: FormBuilder) { }

  ngOnInit(): void {
    this.addFrom = this.formBulider.group({
      address: this.formBulider.array([])
    })

    this.array1.forEach((item,index) => {
      console.log('item', item);
      if (item == 18) {
        this.forVaote = true
      }
      else {
        this.forVaote = false
      }

    })

  }


  // ads(): FormArray {
  //   return this.addFrom.get('address') as FormArray;
  // }


  initialForm(): FormGroup {
    return this.formBulider.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      mobailno: ['', Validators.required],
    })
  }



  addNewAddressForm() {
    // this.ads().push(this.initialForm())
    this.addFrom.get("address").push(this.initialForm()) as FormArray
  }

  removeAddress(index: any) {
    // this.ads().removeAt(index)
  }

  submitData() {
    console.log(this.addFrom.value);
  }
}
