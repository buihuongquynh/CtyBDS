// @flow
import * as React from "react";
import uuid from "react-uuid";
import ProjectCategory from "../../components/Project-category";
import { Row, Col } from "antd";
import vechungtoi from "../../assets/img/gioithieu/ve chung toi 1.jpg"
import tamnhin from "../../assets/img/gioithieu/tam nhinh.jpg"
const Introduct = () => {
  const data = [
    {
      id: 1,
      img: "https://static.wixstatic.com/media/c837a6_353ea927e29d4cec8e2eb25fce034ea7~mv2.jpg/v1/fill/w_917,h_643,al_b,q_85,usm_0.66_1.00_0.01/c837a6_353ea927e29d4cec8e2eb25fce034ea7~mv2.webp",
      title: "Daphne Sark & Aden Devon",
      description:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.​",
    },
    {
      id: 2,
      img: "https://static.wixstatic.com/media/c837a6_353ea927e29d4cec8e2eb25fce034ea7~mv2.jpg/v1/fill/w_917,h_643,al_b,q_85,usm_0.66_1.00_0.01/c837a6_353ea927e29d4cec8e2eb25fce034ea7~mv2.webp",
      title: "Daphne Sark & Aden Devon",
      description:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.​",
    },
    {
      id: 3,
      img: "https://static.wixstatic.com/media/c837a6_353ea927e29d4cec8e2eb25fce034ea7~mv2.jpg/v1/fill/w_917,h_643,al_b,q_85,usm_0.66_1.00_0.01/c837a6_353ea927e29d4cec8e2eb25fce034ea7~mv2.webp",
      title: "Daphne Sark & Aden Devon",
      description:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.​",
    },
  ];
  return (
    <>
      <div className="Introduct">
        <div className="row">
          <div  className="about_me col-lg-6 col-md-6 col-sm-12">
            <img style={{height:'100%'}} src={vechungtoi.src} alt="img" />
          </div>
          <div className="about_me col-lg-6 col-md-6 col-sm-12">
            <div className="Center_tit">
              <div className="tit">
                <h1>VỀ CHÚNG TÔI</h1>
                <p>Với đội ngũ KTS trẻ , nhiệt tình của Phố Thiêt Kế chúng tôi tự tin sẽ tạo ra những thiết kế sáng tạo  chất lượng , an toàn . tiết kiệm chí phí và thiết kế phù hợp phong thủy với cuộc đất của bạn</p>
                <p>Phố thiết kế chuyên thiết kế - thi công Nội Thất phòng Thờ, Nội Thất nhà ở , Shop thời trang , Salon hair , spa makeup, Café , homestay, Nhà Hàng , Showroom …… trọn gói</p>
                <p>Bạn hoàn tòn yên tâm khi đến với Phố Thiết kế cho dù công trình của bạn lớn hay nhỏ, chúng Tôi đều  phục vụ bạn tận tâm và nhiệt tình</p>
                <p>Hãy đến với chúng Tôi để đón nhận được những điều tốt đẹp hơn</p>
              </div>
            </div>
          </div>
          
          <div className="about_me col-lg-6 col-md-6 col-sm-12">
            <div className="Center_tit">
              <div className="tit">
              <h1>TẦM NHÌN – SỨ MỆNH </h1>
              <h2>Tầm nhìn đến năm 2030</h2>
                <p>Trở thành đơn vị tư vấn thiết kế - thi công trọn gói Nội Thất phòng Thờ, Nội Thất nhà ở , Shop thời trang , Salon hair , spa makeup, Café , homestay, Nhà Hàng , Showroom có quy mô tại Việt Nam</p>
                <p>Là đơn vị đầu tiên áp dụng và đề cao yếu tố PHONG THỦY vào trong nhiệm vụ thiết kế , giúp cho khách hàng an tâm hơn , thuận lợi hơn trong công việc mở cửa hang kinh doanh.</p>
                <p>Tạo ra môi trường làm việc chuyên nghiệp . sáng tạo và thu hút nhân tài trong lĩnh vực</p>
              <h2>Sứ mệnh</h2>
              <p>Tạo ra những thiết kế đơn giản nhưng hiệu quả giúp khách hàng  tiết kiệm được thời gian , chi phí. Giúp nhiều người có thể tiếp cận được dịch vụ với chị phí hợp lý .</p>
              <p>Tạo ra những thiết kế phù hợp với Phong Thủy từng cuộc đất giúp khách hàng kinh doanh phát triển bền vững và thuận lợi hơn trong công việc, cuộc sống.</p>
              </div>
            </div>
          </div>
          <div className=" about_me col-lg-6 col-md-6 col-sm-12">
            <img style={{height:'100%'}} src={tamnhin.src} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Introduct;
