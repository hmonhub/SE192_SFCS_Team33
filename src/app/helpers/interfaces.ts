export interface User {
	id: number;
	name: string;
	role: string;
	uname: string;
	upass: string;
}

export interface Role {
	id: number;
	title: string;
}
//------------------------------------------------------------------------------------------
export interface Ingredient {
	id: number;
	name: string;
	stock: number;
	unit: string;
}

export interface Item {
	id: number;
	name: string;
	des: string;
	price: number;
	//list_ingredient: Ingredient[];
	img: string;
}

export interface ItemOrder {
	id: number;
	name: string;
	price: number;
	no: number;
}

export interface Order {
	id: number;
	customer: string;
	time_created: string;
	time_receive: string;
	order_status: string;
	list_item: ItemOrder[];
	total: number;
	order_type: string;
}

export interface Employee {
	id: number;
	name: string;
	position: string;
	phone_number: string;
}