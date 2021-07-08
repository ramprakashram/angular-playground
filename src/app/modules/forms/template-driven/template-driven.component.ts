import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  @ViewChild('formData') ngFormData: NgForm;

  constructor() { }

  private defaultValues = {
    userData: {
        userName: "asd",
        email: "aads@hmail.com"
    },
    secret: "bike"
}

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('submitted', this.ngFormData);
    // this.ngFormData.setValue(this.defaultValues);
    this.ngFormData.reset();
  }

}
