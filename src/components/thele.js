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
              <li>Sinh viên các trường Đại học/ Học viện trên cả nước.</li>
              <li>Các đội dự thi theo, hình thức nhóm, mỗi nhóm từ 3 đến 5 thành viên, các thành viên đều phải đang còn là sinh viên hoặc mới ra trường không quá một năm.</li>
            </ul>
          
            <p>CÁC VÒNG THI</p>
            <ul>
              <li>Vòng 1: Online nộp dự án. </li>
              <li>Vòng 2: Bán kết offline.</li>
              <li>Vòng 3: Chung kết xét duyệt dự án, thuyết trình, tranh biện.</li> 
            </ul>

            <p>CÁC BUỔI TRAINING</p>
            <ul>
              <li>Chuẩn bị cho các đội thi 5 nội dung: Chọn lọc ý tưởng công nghệ, Marketing, Pitching, Quản trị sản phẩm, Kỹ năng hùng biện. </li>
            </ul>
            <p>THỜI GIAN DỰ KIẾN</p>
            <ul>
              <li>Tiến độ thi diễn ra từ 09/10-09/12/2023. Đăng ký tham gia từ 09/10-23/10, nộp dự án trước 04/11.</li>
            </ul>
            <button className='xemthem'>
              <span  className='the-le-redirect'><a href='https://docs.google.com/document/d/1xyh-mHcWRp0O0SYxuyhF9CFJzTM7_x8R/edit?usp=sharing&ouid=107712627729423945239&rtpof=true&sd=true' target="_blank">Xem thêm</a></span></button>

        </div>
        
        
    </div>
    </section>
  )
}