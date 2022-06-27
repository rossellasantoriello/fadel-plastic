import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChip } from '@angular/material/chips';

@Component({
    selector: 'fadel-plastic',
    templateUrl: './fadel-plastic.component.html',
    styleUrls: ['./fadel-plastic.component.scss']
})

export class FadelPlasticComponent implements OnInit {
    inTrasmission: boolean = false;
	trasmissionStatus = 0;
    trasmissionError: any;
    showTrasmissionError = false;

    isLinear = true;
    principalRequirementIsCompleted = false;
    fiscalFormIsCompleted = false;

    typeWorkFormGroup: FormGroup ;
	characterBagFormGroup: FormGroup ;
	typeBagFormGroup: FormGroup ;
	anagraficFormGroup: FormGroup;
	quantityBagFormGroup: FormGroup ;
	
	
	

    confirmationId: any;
	
	
    constructor(
        private _formBuilder: FormBuilder,
		
    ) { }

	


	gussets: any[] = [
		
		{
			description: '8',
			value: 8
		},
		{
			description: '9',
			value: 9
		},
		{
			description: '10',
			value: 10
		},
		{
			description: '11',
			value: 11
		},
		{
			description: '12',
			value: 12
		},
		{
			description: '13',
			value: 13
		},
		{
			description: '14',
			value: 14
		},
		{
			description: '15',
			value: 15
		},
		{
			description: '16',
			value: 16
		},
		{
			description: '17',
			value: 17
		},
		{
			description: '18',
			value: 18
		},
		{
			description: '19',
			value: 19
		},
		{
			description: '20',
			value: 20
		},
		{
			description: '21',
			value: 21
		},

		{
			description: '22',
			value: 22
		},
		{
			description: '23',
			value: 23
		},
		{
			description: '24',
			value: 24
		},
		{
			description: '25',
			value: 25
		},
		
	]
	colors: any[] = [
		{
			description: 'bianco',
			value: 1
		},
		{
			description: 'trasparente',
			value: 2
		},
		{
			description: 'panna',
			value: 3
		},
		{
			description: 'avorio',
			value: 4
		},
		{
			description: 'crema',
			value: 5
		},
		{
			description: 'giallo limone',
			value: 6
		},
		{
			description: 'giallo ocra',
			value: 7
		},
		{
			description: 'salmone',
			value: 8
		},
		{
			description: 'carota',
			value: 9
		},
		{
			description: 'arancio',
			value: 10
		},
		{
			description: 'rosa',
			value: 11
		},
		{
			description: 'fucsia',
			value: 12
		},
		{
			description: 'rosso',
			value: 13
		},
		{
			description: 'bordeaux',
			value: 14
		},
		{
			description: 'viola',
			value: 15
		},
		{
			description: 'vinaccio',
			value: 16
		},
		{
			description: 'marrone',
			value: 17
		},
		{
			description: 'testa di moro',
			value: 18
		},
		{
			description: 'celeste',
			value: 19
		},
		{
			description: 'azzurro',
			value: 20
		},
		{
			description: 'blu elettrico',
			value: 21
		},
		{
			description: 'blu',
			value: 22
		},
		{
			description: 'blu scuro',
			value: 23
		},
		{
			description: 'senape',
			value: 24
		},
		{
			description: 'verde lime',
			value: 25
		},
		{
			description: 'verde bandiera',
			value: 26
		},
		{
			description: 'verde scuro',
			value: 27
		},
		{
			description: 'oro',
			value: 28
		},
		{
			description: 'argento',
			value: 29
		},
		{
			description: 'rame',
			value: 30
		},
		{
			description: 'nero',
			value: 31
		},
		

	]


	colorsLogo: any[] = [
		{
			description: 'bianco',
			value: 1
		},
		{
			description: 'trasparente',
			value: 2
		},
		{
			description: 'panna',
			value: 3
		},
		{
			description: 'avorio',
			value: 4
		},
		{
			description: 'crema',
			value: 5
		},
		{
			description: 'giallo limone',
			value: 6
		},
		{
			description: 'giallo ocra',
			value: 7
		},
		{
			description: 'salmone',
			value: 8
		},
		{
			description: 'carota',
			value: 9
		},
		{
			description: 'arancio',
			value: 10
		},
		{
			description: 'rosa',
			value: 11
		},
		{
			description: 'fucsia',
			value: 12
		},
		{
			description: 'rosso',
			value: 13
		},
		{
			description: 'bordeaux',
			value: 14
		},
		{
			description: 'viola',
			value: 15
		},
		{
			description: 'vinaccio',
			value: 16
		},
		{
			description: 'marrone',
			value: 17
		},
		{
			description: 'testa di moro',
			value: 18
		},
		{
			description: 'celeste',
			value: 19
		},
		{
			description: 'azzurro',
			value: 20
		},
		{
			description: 'blu elettrico',
			value: 21
		},
		{
			description: 'blu',
			value: 22
		},
		{
			description: 'blu scuro',
			value: 23
		},
		{
			description: 'senape',
			value: 24
		},
		{
			description: 'verde lime',
			value: 25
		},
		{
			description: 'verde bandiera',
			value: 26
		},
		{
			description: 'verde scuro',
			value: 27
		},
		{
			description: 'oro',
			value: 28
		},
		{
			description: 'argento',
			value: 29
		},
		{
			description: 'rame',
			value: 30
		},
		{
			description: 'nero',
			value: 31
		},
		

	]

printTypes: any[] = [
		{
			description: '1 colore',
			value: 1
		},
		{
			description: '2 colori',
			value: 2
		},
		{
			description: '3 colori',
			value: 3
		},
	]

	typeBags: any[] = [
		{
			description: 'HDPE',
			value: 1,
			info: "Materiale plastico ad alta densità. Si presenta opaco e duro al tatto. La normativa prevede uno spessore minimo di 60 my"
		},
		{
			description: 'LDPE',
			value: 2,
			info: "Materiale plastico a bassa densità. Si presenta lucido e morbido al tatto. La normativa prevede uno spessore minimo di 60 my"
		},
		{
			description: 'Bio',
			value: 3,
			info: "Materiale Bio compostabile utilizzato per la produzione di shoppers con manico a 'canottiera' con spessori inferiori a quelli imposti dalla normativa europea per i materiali HDPE e LDPE"
		},
		
	]

	bagHandles: any[] = [
		{
			description: 'Asola',
			value: 1,
			
		},
		{
			description: 'Canottiera',
			value: 2
		},
		{
			description: 'Valigetta',
			value: 3
		},
		{
			description: 'Tracolla',
			value: 4
		},
		{
			description: 'Busta spedizione',
			value: 5
		},
	]

	thicknessMys: any[] = [
		{ description: '60', value: 60 },
	
	];




	url="";
	selectFile(event:any){
		if(event.target.files){
			var reader = new FileReader()
			reader.readAsDataURL(event.target.files[0])
			reader.onload = (event:any) => {
				this.url = event.target.result 
			}
		}
	}

    ngOnInit(): void {

	
        this.typeWorkFormGroup = this._formBuilder.group({
            typeWork: ['', Validators.required],
			orderPrewiusly: [],
			nameAgency: [],
			
			
        });

		this.typeBagFormGroup = this._formBuilder.group({
			bagHandles: ['', Validators.required],
			typeBags: ['', Validators.required],
        });

		this.characterBagFormGroup = this._formBuilder.group({
			thicknessMys: [''],
			color: ['',Validators.required],
			printType: ['', Validators.required],
			width: ['', Validators.required],
			height: ['', Validators.required],
			gussets: ['', Validators.required],
			colorLogo: ['',Validators.required],
			
			
		
        });

		this.quantityBagFormGroup = this._formBuilder.group({
            quantity: ['',],
			totalPrice: [''],
			unitPrice: ['',],
			
			
			
		
        });


		this.anagraficFormGroup = this._formBuilder.group({
            firstname: ['', Validators.required],
			lastname: ['', Validators.required],
			company: [''],
			email: ['', [Validators.email]],
            mobile: ['', [Validators.required, Validators.minLength(9)]],
        });
	}


	formatLabel(value: number) {
		if (value >= 1000) {
		  return Math.round(value / 1000) + 'k';
		}
	
		return value;
	  }


	

	toggleSelection(chip: MatChip) {
		chip.toggleSelected();
	 }
	



	async confirmation() {
        this.inTrasmission = true;
        this.trasmissionStatus = 0;
        this.showTrasmissionError = false;
	}
}
        


