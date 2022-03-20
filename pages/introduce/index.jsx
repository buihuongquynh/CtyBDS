// @flow
import * as React from "react";
import uuid from "react-uuid";
import ProjectCategory from "../../components/Project-category";
import { Row, Col } from "antd";
import vechungtoi from "../../assets/img/gioithieu/ve chung toi 1.jpg";
import tamnhin from "../../assets/img/gioithieu/81b9e288877c4822116d.jpg";
const Introduct = () => {
  return (
    <>
      <div className="Introduct">
        <div className="row">
          <div className="homeLeft item col-lg-6 col-md-6 col-sm-12">
            <img className=""src={tamnhin.src} alt="img" />
          </div>
          <div className=" homeBannerTop item1 col-lg-6 col-md-6 col-sm-12">
            <div className="Center_tit">
              <div className="">
                <h1>VỀ CHÚNG TÔI</h1>
                <p>
                  - Với đội ngũ KTS trẻ, nhiệt tình của Phố Thiêt Kế. Chúng tôi tự
                  tin sẽ tạo ra những thiết kế sáng tạo chất lượng,
                   an toàn, tiết kiệm chi phí và thiết kế phù hợp phong
                  thủy với ngôi nhà của bạn.
                </p>
                <p>
                  - Phố Thiết Kế chuyên thiết kế - Thi công nội thất phòng thờ,
                  nhà ở, shop thời trang, salon hair, spa makeup, cafe,
                  homestay, nhà hàng, showroom,... trọn gói.
                </p>
                <p>
                  - Bạn hoàn toàn yên tâm khi đến với Phố Thiết Kế cho dù công
                  trình của bạn lớn hay nhỏ, chúng tôi đều phục vụ bạn tận tâm{" "}
                 
                  và nhiệt tình.
                </p>
                <p>
                  - Hãy đến với chúng tôi để đón nhận được những điều tốt đẹp
                  nhất.
                </p>
              </div>
            </div>
          </div>
       
        <div className=" homeBannerBot item col-lg-6 col-md-6 col-sm-12">
          <div className="Center_tit">
            <div className="">
              <br/>
              <br/>
              <h1>TẦM NHÌN – SỨ MỆNH </h1>
              <h2>Tầm nhìn đến năm 2030:</h2>
              <p>
                - Trở thành đơn vị tư vấn thiết kế - Thi công trọn gói nội thất
                phòng Thờ, nhà ở, shop thời trang, salon hair, spa makeup,
                 cafe, homestay, nhà hàng, showroom có quy mô tại Việt
                Nam.{" "}
              </p>
              <p>
                - Là đơn vị đầu tiên áp dụng và đề cao yếu tố PHONG THỦY vào
                trong nhiệm vụ thiết kế, giúp cho khách hàng an tâm hơn, thuận
                lợi hơn trong công việc mở cửa hàng kinh doanh.
              </p>
              <p>
                - Tạo ra môi trường làm việc chuyên nghiệp, sáng tạo và thu hút
                nhân tài trong lĩnh vực.
              </p>
              <h2>Sứ mệnh:</h2>
              <p>
                - Tạo ra những thiết kế đơn giản nhưng hiệu quả giúp khách hàng
                tiết kiệm được thời gian, chi phí. Giúp nhiều người có thể tiếp
                cận được dịch vụ với chi phí hợp lý.
              </p>
              <p>
                - Tạo ra những thiết kế phù hợp với Phong Thủy giúp khách hàng
                kinh doanh phát triển bền vững và thuận lợi hơn trong công việc,
                cuộc sống.
              </p>
            </div>
          </div>
        </div>
        <div className="homeRight item1 col-lg-6 col-md-6 col-sm-12">
          <img
            className=" "
          
            src={vechungtoi.src}
            alt="img"
          />
        </div>
        </div>
      </div>
    </>
  );
};
export default Introduct;
