import React from 'react';
import Bgr from '../assets/thele.jpg';

export const Thele = () => {
  return (
    <section  id='thele'>
    <div className='main2'>
        <div className="overlay"></div>
        <div className="content">
            <h1>THỂ LỆ</h1>
            <p>ĐỐI TƯỢNG THAM GIA</p>
            <ul>
              <li>Sinh viên các trường Đại học/ Học viện trên cả nước</li>
              <li>Các đội dự thi theo, hình thức nhóm, mỗi nhóm từ 3 đến 5 thành viên, các thành viên đều phải đang còn là sinh viên hoặc mới ra trường không quá một năm.</li>
            </ul>

            <button className='xemthem'>Xem thêm</button>

        </div>
        
        
    </div>
    </section>
  )
}