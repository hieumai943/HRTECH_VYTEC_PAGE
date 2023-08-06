import React from 'react';
import line from '../assets/line.png';
import './Timeline.css'
export const Timeline = () => {
  return (
  
    <section  id='timeline'>
        
        <div className="timeline">
            <h1>TIMELINE</h1>
            <img src={line} id='line'></img>
            <div className='vongDon'>
              <h2 className='textVongDon'>VÒNG ĐƠN</h2>
              <pre className='paragraphDon'>
                {`
                gì đấy gì đấy
                Cô đơn trên sofa, con tim như tan ra chẳng phải
                yêu anh hơn cả em mà. Trong căn phòng ánh đèn
                `}
              </pre>
            </div>
            <div className='banKet'>
              <h2 className='textBanKet'>BÁN KẾT</h2>
              <pre className='paragraphBan'>
                {`
                gì đấy gì đấy 
                Cô đơn trên sofa, con tim như tan ra chẳng phải
                yêu anh hơn cả em mà. Trong căn phòng ánh đèn
                `}
              </pre>
            </div>
            <div className='chungKet'>
              <h2 className='textChungKet'>CHUNG KẾT</h2>
              <pre className='paragraphChung'>
                {`
                gì đấy gì đấy
                Cô đơn trên sofa, con tim như tan ra chẳng phải 
                yêu anh hơn cả em mà. Trong căn phòng ánh đèn
                `}
              </pre>
            </div>
        </div>
        
    </section>
  )
}