import { Injectable } from '@angular/core';
import { FormArray, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
;
@Injectable()
export class PrlnService {
  form !: UntypedFormGroup
  selectedUnitC = new UntypedFormControl('', Validators.required);

  constructor(
    private fb: UntypedFormBuilder,) {
    this.form = this.fb.group({
      prno: new UntypedFormControl('', [Validators.required]),
      prdetail: this.fb.array([this.newPr_n()]),
    })
  }


  addPr_n() {
    this.prdetail.push(this.newPr_n());
  }

  remove_Pr_n(i: number) {
    this.prdetail.removeAt(i);
  }

 
  indexArr :number = 0
  remove_All() {
    this.prdetail.clear()
  }


  get prdetail(): UntypedFormArray {
    return this.form.get("prdetail") as UntypedFormArray
  }

  newPr_n(): UntypedFormGroup {
    return this.fb.group({
      prno: new UntypedFormControl('', [Validators.required]),
      no: new UntypedFormControl('', [Validators.required]),
      des: new UntypedFormControl('', [Validators.required]),
      qty: new UntypedFormControl('', [Validators.required]),
      unit: new UntypedFormControl('', [Validators.required]),
      price: new UntypedFormControl('', [Validators.required]),
      amount: new UntypedFormControl('', [Validators.required]),
      reqdate: new UntypedFormControl('', [Validators.required]),
      supname: new UntypedFormControl('', [Validators.required]),
      assno: new UntypedFormControl('', [Validators.required]),
      over1y: new UntypedFormControl('', [Validators.required]),
      creditTC: new UntypedFormControl('', [Validators.required]),
      acccode: new UntypedFormControl('', [Validators.required]),
      subacccode: new UntypedFormControl('', [Validators.required]),

    })

  }

  amt: number[] = [];
  ttcal !: number;

  onControlChange(event: any, i: number): void {
    if (event.srcElement) {
      const controlName = event.srcElement.name;

      if (controlName === 'qty' || controlName === 'price') {
        this.calculateAmount(i);
      }
    }
  }



  calculateAmount(i: number) {
    const particularsList = this.prdetail;
    const particularGroup = particularsList.controls[i] as UntypedFormGroup;

    const qty = particularGroup.get('qty');
    const price = particularGroup.get('price');
    const amount = particularGroup.get('amount');
    amount?.setValue('');

    let ind = 0;

    if (qty?.value && price?.value) {
      this.amt[i] = qty.value * price.value;
      amount?.setValue(this.amt[i]);
    }

    if (amount?.value) {
      for (ind; ind <= this.amt.length; ind++) {
        const result = this.amt.reduce((sum, number) => {
          return sum + number
        }, 0)
        this.ttcal = result
      }
      console.log("------------tt------------");
      console.log(this.ttcal);

    }
    
  }

  onSet(){
  
      this.prdetail.clear()
    
  }
  initializeFormGroup() {

    this.form.setValue({
      prno: '',
      prdetail: [{
      no: '',
      des: ''}],
      des: '',
      qty: '',
      unit: '',
      price: '',
      amount: '',
      reqdate: '',
      supname: '',
      assno: '',
      over1y: '',
      credit: '',
      acccode: '',
      subacccode: ''
    })
  }


}

