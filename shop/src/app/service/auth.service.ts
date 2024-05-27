import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  isLoggedIn() {
    const token = localStorage.getItem('token');
    if (token) {
      // Kiểm tra xem token có hợp lệ hay không
      // Nếu hợp lệ, return true
      // Nếu không hợp lệ, xóa token khỏi localStorage và return false
      return true;
    }
    return false;
  }
}
