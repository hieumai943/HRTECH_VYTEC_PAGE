import React from 'react';
import achieve1 from "../assets/gold.png";
import achieve2 from "../assets/silver.png";
import achieve3 from "../assets/copper.png";
import achieve4 from "../assets/yeuthich.png";
import achieve5 from "../assets/trienvong.png";

import './GiaiThuong.css'

export const GiaiThuong = () => {
  return (
  
        <section id='giaithuong'>
        <div className="timeline">
            <h1>GIẢI THƯỞNG</h1>
            <div class="achieve">
            <img src={achieve1} />
            <p><span>01 giải Nhất:</span> 10,000,000 VND tiền mặt + giấy chứng nhận + kỷ niệm chương.
            </p>
            </div>
            <div class="achieve">
            <img src={achieve2} />
            <p> <span>01 giải Nhì:</span> 6,000,000 VND tiền mặt + giấy chứng nhận + kỷ niệm chương.
            </p>
            </div>
            <div class="achieve">
            <img src={achieve3} />
            <p><span>01 giải Ba:</span> 4,000,000 VND tiền mặt + giấy chứng nhận + kỷ niệm chương.
            </p>
            </div>
            <div class="achieve">   
            <img src={achieve4} />
            <p><span>01 giải Đội thi được yêu thích nhất:</span> 500,000 VND tiền mặt + giấy chứng nhận + kỷ niệm chương.
            </p>
            </div>
            <div class="achieve">
            <img src={achieve5} />
            <p><span>01 giải Đội thi triển vọng nhất:</span> 01 giải Đội thi triển vọng nhất: 500,000 VND tiền mặt + giấy chứng nhận + kỷ niệm chương.
            </p>
            </div>
        </div>
        </section>
        
    
  )
}