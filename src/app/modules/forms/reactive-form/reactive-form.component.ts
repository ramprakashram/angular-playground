import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  genders = ['male', 'female'];
  forbiddenNames = ['ram', 'karthik', 'samira'];
  formData: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.setReactiveForm();
  }

  setReactiveForm(): void {
    this.formData = new FormGroup({
      'username': new FormControl(null, [Validators.required, this.nameValidator.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('female', Validators.required),
      'hobbies': new FormArray([])
    })
  }

  onSubmit(): void {
    console.log(this.formData);
  }

  onAddHobby(): void {
    const control = new FormControl('Ram', Validators.required);
    (<FormArray>this.formData.get('hobbies')).push(control);
  }

  getHobbiesControl() {
    return (<FormArray>this.formData.get('hobbies')).controls;
  }

  nameValidator(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenNames.indexOf(control.value) !== -1) {
      return {'isForbiddenName': true}
    }
    return null;
  }

}
