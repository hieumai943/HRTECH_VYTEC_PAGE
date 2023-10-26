import React from 'react';
import Bgr from '../assets/thele.jpg';

export const Thele = () => {
  return (
    <section  id='thele'>
    <div className='main2'>
        <div className="overlay"></div>
        <div className="content">
            <h1>THỂ LỆ</h1>
            <h4>ĐỐI TƯỢNG THAM GIA</h4>
            <ul>
              <li>Sinh viên các trường Đại học/ Học viện trên cả nước.</li>
              <li>Các đội dự thi theo, hình thức nhóm, mỗi nhóm từ 3 đến 5 thành viên, các thành viên đều phải đang còn là sinh viên hoặc mới ra trường không quá một năm.</li>
            </ul>
          
            <h4>CÁC VÒNG THI</h4>
            <ul>
              <li>Vòng 1: Online nộp dự án. </li>
              <li>Vòng 2: Bán kết offline.</li>
              <li>Vòng 3: Chung kết xét duyệt dự án, thuyết trình, tranh biện.</li> 
            </ul>

            <h4>CÁC BUỔI TRAINING</h4>
            <ul>
              <li>Chuẩn bị cho các đội thi 5 nội dung: Chọn lọc ý tưởng công nghệ, Marketing, Pitching, Quản trị sản phẩm, Kỹ năng hùng biện. </li>
            </ul>
            <h4>THỜI GIAN DỰ KIẾN</h4>
            <ul>
              <li>Thời gian cuộc thi diễn ra từ 09/10-09/12/2023. Đăng ký tham gia từ 09/10-25/10, nộp dự án trước 11/11.</li>
            </ul>
            <button className='xemthem'>
              <span  className='the-le-redirect'><a href='https://drive.google.com/file/d/1quxjtueBl8yOKO-q0CJ-hh0vt-cMwlE-/view?fbclid=IwAR2cdubVB-b9AaXGGOoIvyQZPeDAt2Ca7EzelEvpRNxttP6VAv7IA1xs6kg' target="_blank">Xem thêm</a></span></button>

        </div>
        
        
    </div>
    </section>
  )
}