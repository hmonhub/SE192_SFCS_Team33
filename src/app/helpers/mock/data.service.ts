import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Ingredient } from '../interfaces';
import { Item } from '../interfaces';
import { Employee } from '../interfaces';
@Injectable({
	providedIn: 'root',
})
export class DataService implements InMemoryDbService {
	createDb() {
		let ingredients = [
			{
				id: 1,
				name: 'Cá',
				stock: 100,
				unit: 'kg'
			},
			{
				id: 2,
				name: 'Thịt bò',
				stock: 150,
				unit: 'kg'
			},
			{
				id: 3,
				name: 'Thịt lợn',
				stock: 75,
				unit: 'kg'
			},
			{
				id: 4,
				name: 'Gạo',
				stock: 200,
				unit: 'kg'
			},
			{
				id: 5,
				name: 'Gà',
				stock: 100,
				unit: 'con'
			},
			{
				id: 6,
				name: 'Cà chua',
				stock: 20,
				unit: 'kg'
			},
			{
				id: 7,
				name: 'Cải bắp',
				stock: 30,
				unit: 'kg'
			},
			{
				id: 8,
				name: 'Trứng',
				stock: 500,
				unit: 'cái'
			},
			{
				id: 9,
				name: 'Sữa',
				stock: 100,
				unit: 'lít'
			},
			{
				id: 10,
				name: 'Táo',
				stock: 50,
				unit: 'kg'
			}
		];
		let items = [
			{
				id: 1,
				name: 'Cơm sườn', 
				des: 'Đĩa cơm tấm với sườn nướng, bì, chả, trứng thường được dùng làm đồ ăn sáng, nhưng nay cơm tấm đã có mặt ở một số quán ăn trưa, chiều hoặc tối với nhiều loại thức ăn đi kèm.',
				price: 20000,
				img: 'assets/images/com_suon.jpg'
			},
			{
				id: 2,
				name: 'Bún bò',
				des: 'Bún bò là một trong những đặc sản của xứ Huế, mặc dù món bún này phổ biến trên cả ba miền ở Việt Nam và cả người Việt tại hải ngoại.',
				price: 25000,
				img: 'assets/images/bun_bo.jpg'
			},
			{
				id: 3,
				name: 'Heo quay', 
				des: 'Lợn quay hay heo quay là món ăn có nguyên liệu từ lợn (heo) và được thực hiện bằng phương pháp quay trên lò than. ',
				price: 30000,
				img: 'assets/images/heo_quay.jpg'
			},
			{
				id: 4,
				name: 'Lẩu',
				des: 'Một nồi lẩu bao gồm một bếp (ga, than hay điện) đang đỏ lửa và nồi nước dùng đang sôi. Các món ăn sống được để xung quanh và người ăn gắp đồ ăn sống bỏ vào nồi nước dùng, đợi chín tới và ăn nóng.',
				price: 50000,
				img: 'assets/images/lau.jpg'
			},
			{
				id: 5,
				name: 'Cháo gà', 
				des: 'Cháo gà hay súp gà là một món súp được làm từ thịt gà, ninh nhừ trong nước, thường kèm với nhiều thành phần nguyên liệu và gia khác.',
				price: 20000,
				img: 'assets/images/chao_ga.jpg'
			}
		];
		let employees = [
			{
				id: 1,
				name: 'Phan Bá Ngọc',
				position: 'Quản lý',
				phone_number: '090299230'
			},
			{
				id: 2,
				name: 'Trần Thị Thu',
				position: 'Trợ lý',
				phone_number: '092930011'
			},
			{
				id: 3,
				name: 'Ngô Viết Tuấn',
				position: 'Đầu bếp',
				phone_number: '072830221'
			},
			{
				id: 4,
				name: 'Hồ Quảng Đại',
				position: 'Đầu bếp',
				phone_number: '0309494333'
			},
			{
				id: 5,
				name: 'Lan Ngọc',
				position: 'Phụ bếp',
				phone_number: ''
			},
			{
				id: 6,
				name: 'Tuấn Kiệt',
				position: 'Phụ bếp',
				phone_number: '032232254'
			},
			{
				id: 7,
				name: 'Thị Hương',
				position: 'Lao công',
				phone_number: ''
			},
		];
		return {ingredients, items, employees};
	}

	genId<T extends Ingredient | Item | Employee>(myTable: T[]): number {
		return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
	}
}