import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form-assignment',
  templateUrl: './reactive-form-assignment.component.html',
  styleUrls: ['./reactive-form-assignment.component.scss']
})
export class ReactiveFormAssignmentComponent implements OnInit {

  projectForm: FormGroup;
  invalidProjectTitles = ['test'];

  constructor () { }

  ngOnInit(): void {
    this.initializeProjectForm();
  }

  initializeProjectForm(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required, this.projectTitleCustomValidator.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('stable', Validators.required)
    })
  }

  onSubmit(): void {
    console.log('projectForm : ', this.projectForm);
  }

  projectTitleCustomValidator(control: FormControl): Promise<any> | Observable<any> {
    const projectTitleValidatorPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.invalidProjectTitles.indexOf((control.value as string).toLowerCase()) !== -1) {
          resolve({ 'isInvalidProjectTitle': true })
        } else {
          resolve(null)
        }
      }, 3000);
    });
    return projectTitleValidatorPromise;
  }

}
