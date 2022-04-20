import img from "../assets/img/thiet-ke-noi-that-chung-cu-1065.jpg"
import * as Restou from "../assets/img/projectImg/cafeNhahang/restourant"
import * as startCofee from "../assets/img/projectImg/cafeNhahang/startCoffe"
import * as IfGame from "../assets/img/projectImg/khuvuichoi/IF games"
import * as KissPlay from "../assets/img/projectImg/khuvuichoi/Kiss Playground"
import * as AnHouse from "../assets/img/projectImg/nhaO/AnHouse"
import * as APapar from "../assets/img/projectImg/nhaO/AP apartment"
import * as HHapar from "../assets/img/projectImg/nhaO/HH apartment"
import * as Qapar from "../assets/img/projectImg/nhaO/Q apartment"
import * as Vapar from "../assets/img/projectImg/nhaO/V apartment"
import * as Sweet from "../assets/img/projectImg/phukienmipham/SWEET"
import * as Berg from "../assets/img/projectImg/shopgiaytui/Berg _ Lee"
import * as Moyan from "../assets/img/projectImg/shopgiaytui/Moyan Shop"
import * as H2Home from "../assets/img/projectImg/nhaO/H2 HOMES"
import * as bergsLee from "../assets/img/projectImg/shopQuanAo/bergsLee"
// import * as LinhSpa from "../assets/img/projectImg/phukienmipham/LinhSpa"
const data = () => {
 const Restous = []
 const startCofees = []
 const IfGames = []
 const KissPlays = []
 const AnHouses = []
 const APapars = []
 const HHapars = []
 const Qapars = []
 const Vapars = []
 const Sweets = []
 const Bergs = []
 const Moyans = []
 const H2Homes = []
 const BergsLee = []
 const LinhSpas = []
//  for (const [key, value] of Object.entries(LinhSpa)) {
//   LinhSpas.push(value.default.src)
// }
 for (const [key, value] of Object.entries(bergsLee)) {
  BergsLee.push(value.default.src)
}
 for (const [key, value] of Object.entries(Restou)) {
  Restous.push(value.default.src)
}
for (const [key, value] of Object.entries(startCofee)) {
  startCofees.push(value.default.src)
}
for (const [key, value] of Object.entries(IfGame)) {
  IfGames.push(value.default.src)
}
for (const [key, value] of Object.entries(KissPlay)) {
  KissPlays.push(value.default.src)
}
for (const [key, value] of Object.entries(AnHouse)) {
  AnHouses.push(value.default.src)
}
for (const [key, value] of Object.entries(APapar)) {
  APapars.push(value.default.src)
}
for (const [key, value] of Object.entries(HHapar)) {
  HHapars.push(value.default.src)
}
for (const [key, value] of Object.entries(Qapar)) {
  Qapars.push(value.default.src)
}
for (const [key, value] of Object.entries(Vapar)) {
  Vapars.push(value.default.src)
}
for (const [key, value] of Object.entries(Sweet)) {
  Sweets.push(value.default.src)
}
for (const [key, value] of Object.entries(Berg)) {
  Bergs.push(value.default.src)
}
for (const [key, value] of Object.entries(Moyan)) {
  Moyans.push(value.default.src)
}
for (const [key, value] of Object.entries(H2Home)) {
  H2Homes.push(value.default.src)
}
  const Project = [
    {
      id: 1,
      name: "Nội thất nhà ở",
      project: [
        {
          id: 1,
          name: "An House",
          img: AnHouses,
          des: "",
          des1: ""
          
        },
        {
          id: 2,
          name: "AP apartment",
          img: APapars,
          des: "",
          des1: ""
        },
        {
          id: 3,
          name: "HH apartment",
          img: HHapars,
          des: "",
          des1: ""
        },
        {
          id: 4,
          name: "Q apartment",
          img: Qapars,
          des: "",
          des1: ""
        },
        {
          id: 5,
          name: "V apartment",
          img: Vapars,
          des: "",
          des1: ""
        },
        {
          id: 6,
          name: "H2 HOMES",
          img: H2Homes,
          des: "",
          des1: ""
        },
      ]
    },
    {
      id: 2,
      name: "Shop thời trang",
      project: [
        
        {
          id: 1,
          name: "Berg & Lee",
          img: Bergs,
          des: "Không gian độc đáo nâng tầm giá trị cho store. Không chỉ thiết kế không gian mà chúng tôi còn thiết kế 'Trải nghiệm mua sắm' cho khách hàng  vì trải nghiệm tại điểm bán là điểm chạm quan trọng nhất và là cơ hội cuối cùng để biết được: liệu bạn sẽ chốt được đơn hàng đó hay toàn bộ nỗ lực của bạn để thu hút khách tới cửa hàng đều uổng phí.",
          des1: ""
        },
        {
          id: 2,
          name: "Moyan Shop",
          img: Moyans,
          des: "",
          des1: ""
        },
      ]
    },
    {
      id: 3,
      name: "Shop phụ kiện, mĩ phẩm",
      project: [
        {
          id: 1,
          name: "SWEET",
          img: Sweets,
          des: "",
          des1: ""
        },
        {
          id: 2,
          name: "LINH SPA",
          img: LinhSpas,
          des: "Bản thiết kế mang một tone hồng vô cùng ngọt ngào. Để tăng tính sang trọng, các KTS đã sử dụng đồ mạ vàng, hồng vừa giữ nét nữ tính vừa tăng giá trị không gian để bất kỳ khách hàng nào cũng thấy thoải mái khi ghé qua đây làm đẹp.",
          des1: ""  
        },
      ]
    },
    {
      id: 4,
      name: "Cafe - Nhà hàng - Trà sữa",
      project: [
        {
          id: 1,
          name: "Star coffe",
          img: startCofees,
          des: "",
          des1: ""
        },
        {
          id: 2,
          name: "Restourant HH",
          img: Restous,
          des: "",
          des1: ""
        },      
      ]
    },
    {
      id: 5,
      name: "Khu vui chơi",
      project: [
        {
          id: 1,
          name: "IF games",
          img: IfGames,
          des: "",
          des1: ""
        },
        {
          id: 2,
          name: "KISS Playgroud",
          img: KissPlays,
          des: "",
          des1: ""
        },
      ]
    },
    {
      id: 6,
      name:"Cửa hàng quần áo",
      project: [
        
      ]
    },
  ]
  return {
    Project
  };
};
export default data;
