import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class DataService {
	private baseUrl: string = 'http://localhost:3000';
	header: HttpHeaders = new HttpHeaders();
	constructor(private http: HttpClient) {
		this.header = this.header.append("Accept", "application/json");
		this.header = this.header.append("Content-Type", "application/json");
		if (localStorage.getItem('token')) {
			this.header = this.header.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
		}
	}
	get(path: string) {
		let urlApi = this.baseUrl + path;
		return new Promise((win, lose) => {
			this.http
				.get(urlApi, { headers: this.header })
				.pipe(
					catchError((err) => {
						lose(err);
						return err;
					})
				)
				.subscribe((res) => {
					win(res);
				});
		});
	}
	post(path: string, body: any) {
		let urlApi = this.baseUrl + path;
		return new Promise((resolve, reject) => {
			// RESOLVE: thanh cong; REJECT: that bai
			this.http
				.post(urlApi, body, { headers: this.header })
				.pipe(
					catchError((err) => {
						reject(err);
						return err;
					})
				)
				.subscribe((res) => {
					resolve(res);
				});
		});
	}
	patch(path: string, body: any) {
		let urlApi = this.baseUrl + path;
		return new Promise((resolve, reject) => {
			this.http
				.patch(urlApi, body, { headers: this.header })
				.subscribe(
					(res) => {
						resolve(res);
					},
					(err) => {
						reject(err);
					}
				);
		});
	}
	login(phonenumber: string, password: string) {
		const body = {
			phonenumber: phonenumber,
			password: password
		};
		return new Promise((resolve, reject) => {
			this.http.post(`${this.baseUrl}/login`, body).subscribe((res: any) => {
				// Thêm accept_token vào header
				this.header = this.header.set('Authorization', `Bearer ${res.data.access_token}`);
				localStorage.setItem('token', res.data.access_token);
				localStorage.setItem('phone',phonenumber);
				// console.log("🚀 ~ file: data.service.ts:76 ~ DataService ~ this.http.post ~ res.access_token:", localStorage.getItem('token'))
				resolve(res);
			}, err => reject(err));
		});
	}

	register(username: string, password: string, email: string) {
		const body = {
			username: username,
			password: password,
			email: email
		};
		return this.post('/register', body);
	}
	logout(){
		localStorage.removeItem('token');
		localStorage.removeItem('phone');
	}
}
