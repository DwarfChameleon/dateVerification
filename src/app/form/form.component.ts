import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule,FormBuilder, Validators } from '@angular/forms';
import { format, addDays } from 'date-fns';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import * as moment from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';


export const MY_FORMATS = {
   parse: {  dateInput: 'LL',},
   display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

/** @title Datepicker with custom formats */
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
   {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}, ],})

export class FormComponent {
  selectYear: number= 2023; 
  dateForm: FormControl = new FormControl();
  public DateofBirth:FormGroup=this.formBuilder.group({  })
  date = new FormControl(moment());
    startDate = new Date(1960, 0, 1);
  chosenYearHandler(year: Date, datepicker: MatDatepicker<any>) {
    // Handle the chosen year
    console.log(year);
    datepicker.close();
  }
  constructor(private formBuilder: FormBuilder){ }  
  validate(){
  const data = {
    "dateForm": this.DateofBirth.get('dateForm')?.value,
  }
  
}
}
