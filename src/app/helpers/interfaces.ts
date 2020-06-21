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
	price: string;
	no: number;
}

export interface Order {
	id: number;
	customer_id: number;
	time_created: Date;
	time_receive: Date;
	order_status: string;
	list_item: ItemOrder[];
}

export interface Employee {
	id: number;
	name: string;
	position: string;
	phone_number: string;
}