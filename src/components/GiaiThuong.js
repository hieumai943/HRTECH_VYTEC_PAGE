import React from 'react';
import achieve1 from "../assets/gold.png";
import achieve2 from "../assets/silver.png";
import achieve3 from "../assets/copper.png";

export const GiaiThuong = () => {
  return (
  
        <section id='giaithuong'>
        <div className="timeline">
            <h1>GIẢI THƯỞNG</h1>
            <div class="achieve">
            <img src={achieve1} />
            <p>
                01 giải Nhất: 10,000,000 VND tiền mặt + giấy chứng nhận + kỷ niệm chương.
            </p>
            </div>
            <div class="achieve">
            <img src={achieve2} />
            <p>
                01 giải Nhì: 6,000,000 VND tiền mặt + giấy chứng nhận + kỷ niệm chương.
            </p>
            </div>
            <div class="achieve">
            <img src={achieve3} />
            <p>
                 01 giải Ba: 4,000,000 VND tiền mặt + giấy chứng nhận + kỷ niệm chương.
            </p>
            </div>
        </div>
        </section>
        
    
  )
}