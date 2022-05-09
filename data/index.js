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
import * as Berg from "../assets/img/projectImg/shopThoiTrang/Berg _ Lee"
import * as Moyan from "../assets/img/projectImg/shopThoiTrang/Moyan Shop"
import * as H2Home from "../assets/img/projectImg/nhaO/H2 HOMES"
import * as anCoffe from "../assets/img/projectImg/cafeNhahang/AnCoffe"
import * as medicine from "../assets/img/projectImg/Show room dược phẩm/Show room dược phẩm"
import * as LinhSpa from "../assets/img/projectImg/phukienmipham/LinhSpa"
import * as Minastore from "../assets/img/projectImg/phukienmipham/Minastore"
import * as Quaybar from "../assets/img/projectImg/cafeNhahang/Quaybar"
import * as HHkitchen from "../assets/img/projectImg/nhaO/HH kitchen"
import * as anTam from "../assets/img/projectImg/Show room dược phẩm/Nhà thuốc An Tâm"
import * as DuplexApartment from "../assets/img/projectImg/nhaO/Duplex Apartment"

const data = () => {
  const DuplexApartments = []
  const HHkitchens = []
  const anTams = []
  const medicines = []
  const anCoffes = []
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
 const LinhSpas = []
 const Quaybars = []
 const Minastores = []
 for (const [key, value] of Object.entries(DuplexApartment)) {
  DuplexApartments.push(value.default.src)
}
 for (const [key, value] of Object.entries(anTam)) {
  anTams.push(value.default.src)
}
 for (const [key, value] of Object.entries(HHkitchen)) {
  HHkitchens.push(value.default.src)
}
for (const [key, value] of Object.entries(medicine)) {
  medicines.push(value.default.src)
}
 for (const [key, value] of Object.entries(anCoffe)) {
  anCoffes.push(value.default.src)
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
for (const [key, value] of Object.entries(LinhSpa)) {
  LinhSpas.push(value.default.src)
}
for (const [key, value] of Object.entries(Quaybar)) {
  Quaybars.push(value.default.src)
}
for (const [key, value] of Object.entries(Minastore)) {
  Minastores.push(value.default.src)
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
        {
          id: 7,
          name: "HH Kitchen",
          img: HHkitchens,
          des: "Để mỗi khi bước chân vào bếp là niềm cảm hứng nấu nướng lại tràn đầy. Phố thiết kế tin rằng gian bếp và khu vực bàn ăn là nơi gắn kết yêu thương giữa các thành viên trong gia đình. Đó là nơi trổ tài nấu nướng của mẹ, của bà. Là nơi thử nghiệm các món mới của con cháu. Cũng là nơi các ông bố nịnh vợ bằng bữa sáng ngon lành dù có phần hơi vụng về. ",
          des1: "Cùng Phố thiết kế ngắm nhìn thiết kế phòng bếp và phòng ăn của dự án nhà phố nhé!"
        },
        {
          id: 8,
          name: "Duplex Apartment",
          img: DuplexApartments,
          des: "Căn hộ Duplex với cá tính mạnh được thể hiện qua đường nét hiện đại, sử dụng đa dạng nguyên vật liệu cùng phong cách nội thất theo xu hướng metalic (kim loại mạ vàng kết hợp với đá) gia tăng giá trị cảm quan cho không gian trở nên sang trọng, tinh tế hơn. Sự khác biệt với cảm xúc rất riêng giữa lòng thành phố Thanh Hoá!",
          des1: "Liên hệ với đội ngũ KTS của Phố Thiết Kế để được chia sẻ, tư vấn những điều phù hợp nhất với tổ ấm của bạn!"
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
          des: `Không gian độc đáo nâng tầm giá trị cho store. Không chỉ thiết kế không gian mà chúng tôi còn thiết kế 'Trải nghiệm mua sắm' cho khách hàng  vì trải nghiệm tại điểm bán là điểm chạm quan trọng nhất và là cơ hội cuối cùng để biết được: liệu bạn sẽ chốt được đơn hàng đó hay toàn bộ nỗ lực của bạn để thu hút khách tới cửa hàng đều uổng phí.`,
          des1: ""
        },
        {
          id: 2,
          name: "Moyan Shop",
          img: Moyans,
          des: `Không gian cửa hàng là một trong những tiêu chí giúp bạn phân định được khách hàng tiềm năng và gia tăng giá trị cho sản phẩm/dịch vụ bạn đang kinh doanh.`,
          des1: `2 chiếc áo giống nhau được đặt trong 2 không gian khác nhau, một cửa hàng chỉnh chu có gout từ bài trí không gian với một cửa hàng bình thường, bạn nghĩ chiếc áo nào sẽ được bán với giá cao hơn? Chính vì thế không gian là một trong những điểm quan trong trong chiến lược kinh doanh của bạn.`,
          des2: `👉 Với kinh nghiệm nhiều năm trong mảng thiết kế cửa hàng, chúng tôi tự tin :
- Tư vấn làm shop, cửa hàng, tối ưu công năng sử dụng và gia tăng trải nghiệm mua sắm sản phẩm dịch vụ cho khách hàng.
- Tư vấn theo từng xu hướng/ phù hợp với đối tượng khách hàng tiềm năng. 
- Vẽ phối cảnh 3D shop, cửa hàng
- Điều quan trọng nhất là GIÁ CẢ luôn cạnh tranh, công trình hoàn thành sẽ mang lại hài lòng cho quý khách hàng.
`
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
          des: `Mở cửa tiệm đẹp thu hút được sự chú ý của khách hàng không chỉ bởi chất lượng dịch vụ thái độ nhân viên mà còn ảnh hưởng rất nhiều bởi phong cách kiến trúc không gian nhất là với mảng spa làm đẹp.`,
          des1: `Mỗi dự án khi thiết kế luôn đảm bảo bạn có được một cửa tiệm hoàn hảo từng chi tiết phù hợp với khả năng tài chính. Cho dù bạn có số vốn nhiều hay ít thì bạn vẫn sở hữu một cửa tiệm đẹp, phong cách cho riêng mình.`
        },
        {
          id: 2,
          name: "LINH SPA",
          img: LinhSpas,
          des: `Bản thiết kế mang một tone hồng vô cùng ngọt ngào. Để tăng tính sang trọng, các KTS đã sử dụng đồ mạ vàng, hồng vừa giữ nét nữ tính vừa tăng giá trị không gian để bất kỳ khách hàng nào cũng thấy thoải mái khi ghé qua đây làm đẹp.`,
          des1: ""  
        },
        {
          id: 3,
          name: "Mina Store",
          img: Minastores,
          des: ``,
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
        {
          id: 3,
          name: "An Coffee",
          img: anCoffes,
          des: "Không chỉ kiến tạo không gian, chúng tôi kiến tạo trải nghiệm cho khách hàng. Đến với An Coffee, có lẽ, điều khiến các khách hàng say mê ngay từ cái nhìn đầu tiên có lẽ là không gian và kiến trúc nội thất độc nhất ở nơi đây.",
          des1: "Hiện đại, độc đáo, phá cách là những gì mà KTS PTK đem đến cho không gian An Coffee. Không chỉ kỹ càng trong từng khâu lựa chọn nguyên vật liệu, mà việc sử dụng tone màu nâu đỏ ấn tượng làm chủ đạo, cùng phong cách  thiết kế Industrial với những hình khối mạnh mẽ - tất cả đã tạo nên một bức tranh toàn cảnh không gian An đầy tinh tế và mê hoặc lòng người.",
          des1: "An Coffee hứa hẹn là một checkin ấn tượng, một không gian nghệ thuật sang trọng ngay giữa lòng Thanh Hóa đầy huyên náo và nhộn nhịp. "
        },    
        {
          id: 4,
          name: "Quaybar",
          img: Quaybars,
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
          des: `1 Dự án khu vui chơi thú vị mà Phố Thiết Kế đã triển khai, một điểm đến lý tưởng cho các bạn trẻ tại thành phố Thanh hóa`,
          des1: `Định hình bản sắc thương hiệu thông qua việc tạo dựng 1 không gian trải nghiệm có cảm xúc hơn cho khách hàng, và cũng là điều mà Phố Thiết Kế muốn gửi gắm vào sản phẩm thiết kế & thi công lần này!`
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
      name:"Show room dược phẩm",
      project: [
        {
          id: 1,
          name: "Nhà thuốc Thanh Hằng",
          img: medicines,
          des: "Khi thiết kế cửa hàng thuốc này, chúng tôi nghĩ ngay đến sử dụng 2 gam màu chủ đạo là trắng và xanh lá để thiết kế không gian. Sở dĩ chọn 2 sắc màu này là vì đây đều là các sắc màu đặc trưng trong ngành dược phẩm. Bên cạnh đó, nó tạo cảm giác về một không gian có tính sạch sẽ cao, không bị nặng nề cho người đến mua hàng.",
          des1: `Ánh sáng tự nhiên cũng được tận dụng tối đa cho một không gian mở, phù hợp với đơn vị kinh doanh chuyên nghiệp.`,
          des2: `Hệ thống tủ kệ trưng bày trong mẫu thiết kế hiệu thuốc được bố trí sát tường và hệ thống tủ thấp được sắp xếp phù hợp. Cách bố trí này sẽ giúp tiết kiệm diện tích cửa hàng, tận dụng được không gian mà không gây ra cảm giác chật chội, tù túng. Đồng thời tạo ra khoảng không rộng lớn ở giữa thoải mái đi lại.`
        },
        {
          id: 1,
          name: "Nhà thuốc An Tâm",
          img: anTams,
          des: `"dược phẩm xanh, sống an lành"`,
          des1: `Thiết kế lần này được xây dựng cho một cửa hàng thuốc, chính vì thế yếu tố sáng sủa, thư thái được đặt lên hàng đầu. Trắng, xanh lá là 2 màu đặc trưng của ngành y - dược, có khả năng ""chữa lành cảm xúc"" gợi đến sự sạch sẽ, thanh khiết, sự tin cậy, tận tâm của đội ngũ các y bác sĩ. Chính vì thế mà KTS PTK đã lựa chọn 2 gam màu này là tone màu chủ đạo cho nhà thuốc An Tâm. `,
          des2: `Kệ, tủ được bố trí khéo léo, tạo sự thông thoáng trong không gian, tăng sự thuận tiện và trải nghiệm mua sắm của khách hàng.`
        },
      ]
    },
  ]
  return {
    Project
  };
};
export default data;
