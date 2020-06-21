import { Component, OnInit } from '@angular/core';
import { Employee } from '@app/helpers/interfaces';
import { EmployeeService } from '@app/helpers/mock/employee.service';

@Component({
	selector: 'app-employee',
	templateUrl: './employee.component.html',
	styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent implements OnInit {
	source: Employee[];
	selected: Employee;
	action: string;
	
	constructor(private service: EmployeeService) {}
	
	displayedColumns: string[] = ['id', 'name', 'position', 'phone_number', 'action'];
	
	ngOnInit() {
		this.getList();
		this.action='idle';
	}
	
	getList(): void {
    this.service.getitem()   
		.subscribe(source => this.source = source);
	}
	
	_name: string;
	_position: string;
	_phone_number: string;
	
	onClick(action: string, elem: Employee): void {
		if (action=='add') {
			this.action='add';
			this.selected=null;
		}
		
		if (action=='edit') {
			this.action='edit';
			this.selected=elem;
			this._name=elem.name;
			this._position=elem.position;
			this._phone_number=elem.phone_number;
		}
		
		if (action=='submitedit')
		{
			if (this._name!=null)
				this.selected.name = this._name;
			if (this._position!=null)
				this.selected.position = this._position;
			if (this._phone_number!=null)
				this.selected.phone_number= this._phone_number;
    
			if (this._name!=null || this._position!=null || this._phone_number!=null)
			{
				this.service.updateitem(this.selected);
				alert("Thông tin cập nhật thành công!");
			}
			else alert("Không có thông tin mới!");

		}
		
		if (action=='remove') {
			if (confirm("Xóa?")){
				this.source = this.source.filter(h => h !== elem);
				this.service.removeitem(elem).subscribe();
				if (elem==this.selected){
					this.selected=null;
					this.action='idle';
				}    
			}
		}
		
		if (action=='cancel') {
			this.action='idle';
			this.selected = null;
			this._name=null;
			this._position=null;
			this._phone_number=null;
		}
	}
	
	add(name: string, position: string, phone_number: string): void {
		if (!name || !position || !phone_number){
			alert("Điền đầy đủ thông tin!");
			return;
		}

		this.service.additem(<unknown>{name, position, phone_number} as Employee)
			.subscribe(elem => {
				this.source.push(elem);
				this.getList();
			});
			alert('Thêm thành công!');
			
	}
}