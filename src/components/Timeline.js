import React from "react";
import line from "../assets/line.png";
import "./Timeline.css";
export const Timeline = () => {
  return (
    <section id="timeline">
      <div className="timeline">
        <h1>TIMELINE</h1>
        <div className="content_tl">
          <img src={line} id="line"></img>
          <div className="vongDon">
            <h2 className="textVongDon">VÒNG ĐƠN</h2>
            <p id="pre" className="paragraphDon">
            <span>Thời gian:</span> 03/10 - 04/11
            <br />
               <span>Hình thức:</span> Online
               <br />
               <span>Đăng ký cá nhân:</span> Các cá nhân có nhu cầu tham gia đăng ký theo form của BTC và được add vào group ghép đội VYTEC’23
              <br />
              <span>Đăng ký theo đội:</span> Thí sinh dự thi theo nhóm từ 3 - 5 thành viên, các thành viên đều phải đang còn là sinh viên hoặc mới ra trường không quá một năm.

             
            </p>
          </div>
          <div className="banKet">
            <h2 className="textBanKet">BÁN KẾT</h2>
            <p id="pre" className="paragraphBan">
            <span>Hình thức:</span> Online
              <br />
              <span>Thể lệ: </span>
Mỗi đội thi sẽ có 12 phút cho sản phẩm của mình, bao gồm:
<ul>
  <li>7 phút thuyết trình về bản mô tả sản phẩm chi tiết, ý tưởng.</li>
  <li>5 phút trả lời câu hỏi của Ban giám khảo.</li>
</ul>
           
            </p>
          </div>
          <div className="chungKet">
            <h2 className="textChungKet">CHUNG KẾT</h2>
            <p id="pre" className="paragraphChung">
            <span>Thành phần tham gia:</span>  5 đội xuất sắc vượt qua vòng Bán kết
            
            <br />
               <span>Thể lệ:</span> 3 phần thi
               <ul>
  <li> <span>Phần 1:</span>  Thuyết trình về kế hoạch kinh doanh và kêu gọi Hỗ trợ đầu tư từ Hội đồng Nhà đầu tư.</li>
  <li><span>Phần 2:</span>  Mỗi đội sẽ có khoảng 6 phút để suy nghĩ, trả lời các câu hỏi tình huống từ phía BTC cuộc thi và lắng nghe nhận xét từ Hội đồng Nhà đầu tư.</li>

  <li><span>Phần 3:</span>  Tranh biện </li>

</ul>
              
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
};
