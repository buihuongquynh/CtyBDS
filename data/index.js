import img from "../assets/img/thiet-ke-noi-that-chung-cu-1065.jpg"
import * as startCofee from "../assets/img/projectImg/cafeNhahang/startCoffe"
import * as nguyenvi from "../assets/img/projectImg/cafeNhahang/Nguyên Vị cafe"
import * as sunny from "../assets/img/projectImg/cafeNhahang/SunnyCafe"
import * as mesoc from "../assets/img/projectImg/shopThoiTrang/ShopMeSoc"
import * as AnHouse from "../assets/img/projectImg/nhaO/AnHouse"
import * as APapar from "../assets/img/projectImg/nhaO/AP apartment"
import * as HHapar from "../assets/img/projectImg/nhaO/HH apartment"
import * as Qapar from "../assets/img/projectImg/nhaO/Q apartment"
import * as Vapar from "../assets/img/projectImg/nhaO/V apartment"
import * as Sweet from "../assets/img/projectImg/phukienmipham/SWEET"
import * as Berg from "../assets/img/projectImg/shopThoiTrang/Berg _ Lee"
import * as Moyan from "../assets/img/projectImg/shopThoiTrang/Moyan Shop"
import * as anCoffe from "../assets/img/projectImg/cafeNhahang/AnCoffe"
import * as medicine from "../assets/img/projectImg/Show room dược phẩm/Show room dược phẩm"
import * as LinhSpa from "../assets/img/projectImg/phukienmipham/LinhSpa"
import * as Minastore from "../assets/img/projectImg/phukienmipham/Minastore"
import * as Quaybar from "../assets/img/projectImg/cafeNhahang/Quaybar"
import * as HHkitchen from "../assets/img/projectImg/nhaO/HH kitchen"
import * as anTam from "../assets/img/projectImg/Show room dược phẩm/Nhà thuốc An Tâm"
import * as DuplexApartment from "../assets/img/projectImg/nhaO/Duplex Apartment"
import * as tadashi from "../assets/img/projectImg/Show room dược phẩm/Nha khoa tadashi"

const data = () => {
  const tadashis = []
  const DuplexApartments = []
  const HHkitchens = []
  const sunnys = []
  const mesocs = []
  const anTams = []
  const medicines = []
  const anCoffes = []
  const nguyenvis = []
 const startCofees = []
 const AnHouses = []
 const APapars = []
 const HHapars = []
 const Qapars = []
 const Vapars = []
 const Sweets = []
 const Bergs = []
 const Moyans = []
 const LinhSpas = []
 const Quaybars = []
 const Minastores = []
 for (const [key, value] of Object.entries(tadashi)) {
  tadashis.push(value.default.src)
}
 for (const [key, value] of Object.entries(sunny)) {
  sunnys.push(value.default.src)
}
for (const [key, value] of Object.entries(mesoc)) {
  mesocs.push(value.default.src)
}
 for (const [key, value] of Object.entries(DuplexApartment)) {
  DuplexApartments.push(value.default.src)
}
for (const [key, value] of Object.entries(nguyenvi)) {
  nguyenvis.push(value.default.src)
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
 
for (const [key, value] of Object.entries(startCofee)) {
  startCofees.push(value.default.src)
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
          des: "Đầu tư cho không gian sống là một trong những cách tốt nhất để đầu tư vào cuộc sống của bạn và gia đình. Thiết kế ban đầu của căn nhà là một căn nhà ống với hình dáng có thể bắt gặp ở bất kỳ đâu nhưng đội ngũ kiến trúc sư của Phố thiết kế đã vẽ nên một không gian sống cực kỳ sang trọng với cách bố trí và phân chia không gian hợp lý cùng phong cách chủ đạo Morden Luxury. Trong dự Án lần này, KTS đã xử lý không gian để tận dụng tối đa ánh sáng mặt trời và làm cho không gian trở nên thoáng và rộng hơn. ",
          des1: ""
          
        },
        {
          id: 2,
          name: "AP apartment",
          img: APapars,
           des: "Căn hộ AP apartment với cá tính mạnh được thể hiện qua đường nét hiện đại, sử dụng đa dạng nguyên vật liệu cùng phong cách nội thất theo xu hướng metalic (kim loại mạ vàng kết hợp với đá) gia tăng giá trị cảm quan cho không gian trở nên sang trọng, tinh tế hơn. Sự khác biệt với cảm xúc rất riêng giữa lòng thành phố Thanh Hoá!",
          des1: "Liên hệ với đội ngũ KTS của Phố Thiết Kế để được chia sẻ, tư vấn những điều phù hợp nhất với tổ ấm của bạn!"
        },
        {
          id: 3,
          name: "HH apartment",
          img: HHapars,
          des: "Một nét phông  hoa sang trọng giữa lòng thành phố Thanh Hoá, nhà hàng được thiết kế theo phong cách Modern Luxury với một không gian mở cực kỳ rộng rãi, kết hợp với những chất liệu cao cấp như da, đá với những vòm cửa lớn - Một nhà hàng tại Thành phố phồn hoa tráng lệ.",
          des1: "Hiểu rõ tâm lý, sở thích và nhu cầu của khách hàng, Phố Thiết Kế cung cấp dịch vụ thiết kế kế thi công Nhà Hàng, Quán ăn trọn gói với nhiều phong cách nội thấy khách nhau, mang đến cho những nhà đầu tư và khách hàng thật nhiều sự lựa chọn hoàn hảo."
        },
        {
          id: 4,
          name: "Q apartment",
          img: Qapars,
          des: "Indochine là phong cách dành cho ai yêu thích nét đẹp mộc mạc, hoài cổ nhưng vẫn đầy tính thanh lịch, sang trọng. Indochine như một bản giao hưởng đầy sắc màu từ những nét đẹp đầy tinh tế của 2 bản sắc văn hóa Phương Đông và Phương Tây, tạo nên một phong cách mang đậm chất truyền thống nhưng không kém phần sang trọng và thanh lịch. ",
          des1: "Hãy xem những KTS PTK đã chắt lọc nét đẹp kiến trúc đông dương để đưa vào không gian căn hộ Studio một cách đầy tinh tế như thế nào nhé!"
        },
        {
          id: 5,
          name: "V apartment",
          img: Vapars,
          des: "'Nơi nào có sự sống, nơi đó có nghệ thuật' bởi suy cho cùng, nghệ thuật được khai phá, kiến tạo từ con người, từ tâm thức thổi hồn cho những điều tưởng chừng vô tri. Phủ lên một gam màu be trung tính, mang lại cảm giác ấm cúng, nhẹ nhàng, tổng thể không gian là sự sắp xếp khéo léo của từng chi tiết. ",
          des1: "Không gian là tiếng nói, thể hiện nội tâm và câu chuyện của mỗi khách hàng, hãy để PTK tạo nên những điều đó cùng bạn!"
        },
        
        {
          id: 6,
          name: "HH Kitchen",
          img: HHkitchens,
          des: "Để mỗi khi bước chân vào bếp là niềm cảm hứng nấu nướng lại tràn đầy. Phố thiết kế tin rằng gian bếp và khu vực bàn ăn là nơi gắn kết yêu thương giữa các thành viên trong gia đình. Đó là nơi trổ tài nấu nướng của mẹ, của bà. Là nơi thử nghiệm các món mới của con cháu. Cũng là nơi các ông bố nịnh vợ bằng bữa sáng ngon lành dù có phần hơi vụng về. ",
          des1: "Cùng Phố thiết kế ngắm nhìn thiết kế phòng bếp và phòng ăn của dự án nhà phố nhé!"
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
        {
          id: 3,
          name: "ShopMeSoc",
          img: mesocs,
          des: `Một trong những dự án khá dễ thương với tone màu hồng ngọt ngào dành cho mẹ và bé. Các KTS PTK sử dụng chủ yếu kệ tầng bao quanh không gian nhằm tiết kiệm tối đa diện tích để khoảng di chuyển rộng rãi cho mẹ và bé ghé thăm của hàng.`,
          des1: "PTK không chỉ đơn giản là kiến tạo nên không gian mà còn tạo ra hành trình mua sắm thoải mái, thân thiện dành cho khách hàng."  
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
          des: `Để gia tăng diện tích sử dụng cho cửa hàng, các KTS PTK đã thiết kế 2 kệ gỗ full tường được chia nhiều ô trưng bày sản phẩm. Không gian được sử dụng 2 tone màu chính, gỗ đậm và đen, được bố trí dài màu xen kẽ nhằm tạo điểm nhấn hút mắt khách hàng vào vị trí sản phẩm, gia tăng tỷ lệ mua hàng.`,
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
          des: "Một quán coffee theo phong cách industrial với những vật liệu thô làm nổi bật cá tính và sự mạnh mẽ không kém phần tinh tế chắc chắn là địa điểm checkin lý tưởng cho giới trẻ Thanh Hóa trong thời gian tới!",
          des1: "▪️ Tư vấn thiết kế phù hợp với phong thuỷ từng cuộc đất để mang tài lộc đến cho việc kinh doanh thuận lợi",
          des2: "▪️ Định hướng thiết kế sáng tạo, độc đáo đa dạng phong cách - thi công trọn gói tiết kiệm thời gian - ngân sách với cửa hàng thu hút khách hàng ngay từ cái nhìn đầu tiên"
        },
          
        {
          id: 2,
          name: "An Coffee",
          img: anCoffes,
          des: "Không chỉ kiến tạo không gian, chúng tôi kiến tạo trải nghiệm cho khách hàng. Đến với An Coffee, có lẽ, điều khiến các khách hàng say mê ngay từ cái nhìn đầu tiên có lẽ là không gian và kiến trúc nội thất độc nhất ở nơi đây.",
          des1: "Hiện đại, độc đáo, phá cách là những gì mà KTS PTK đem đến cho không gian An Coffee. Không chỉ kỹ càng trong từng khâu lựa chọn nguyên vật liệu, mà việc sử dụng tone màu nâu đỏ ấn tượng làm chủ đạo, cùng phong cách  thiết kế Industrial với những hình khối mạnh mẽ - tất cả đã tạo nên một bức tranh toàn cảnh không gian An đầy tinh tế và mê hoặc lòng người.",
          des1: "An Coffee hứa hẹn là một checkin ấn tượng, một không gian nghệ thuật sang trọng ngay giữa lòng Thanh Hóa đầy huyên náo và nhộn nhịp. "
        },    
        {
          id: 3,
          name: "Quaybar",
          img: Quaybars,
          des: "Sử dụng màu tím trong nội thất liệu có bị Sến? Hay sẽ là một điểm nhấn thú vị, tạo hiệu ứng thị giác độc đáo? tham khảo một thiết kế quầy bar của PTK nếu bạn lỡ yêu màu tím rồi nhé!",
          des1: ""
        },  
        {
          id: 4,
          name: "Nguyên Vị cafe",
          img: nguyenvis,
          des: "Thêm một công trình mới mang hơi vị, nét đẹp Việt Nam. Bạn có thể cảm nhận những nét đẹp đặc trưng về một Việt Nam Xưa Cũ ở bất kỳ một góc nào. Mỗi góc tại quán đều được KTS thiết kế rất “tình”,  mang nét xưa cũ, khiến người ta có cảm giác an yên vô cùng.",
          des1: "Không gian thích hợp cho những trải nghiệm muốn tìm về hương vị nguyên bản, mộc mạc đầy dung dị nhưng cũng thật khó để mà quên đi."
        }, 
        {
          id: 5,
          name: "SunnyCafe",
          img: sunnys,
          des: "Sunny Coffee là một không gian cafe xanh mướt với tổng diện tích 300m2, rộng rãi, thoáng mát. Sunny Coffee khoác lên mình một thiết kế mở theo phong cách Tropical. Quán gồm 2 tầng trong nhà và một khoảng sân siêu rộng rãi um tùm cây xanh với sức chứa lớn, thiết kế với bố cục đường dọc cùng kính ốp bao quanh để đón trọn vẹn ánh sáng, lại tinh tế đưa thêm những giàn cây rủ vào giúp những đường khung bớt thô ráp mà mềm mại và có sức sống hơn.",
          des1: "Những chiếc bàn nhỏ xinh bằng gỗ me tây campuchia tự nhiên với hình thù độc đáo kết hợp vật liệu tái chế như thùng phi , chân máy khâu ... tre trúc nhằm hướng tới thông điệp bảo vệ môi trường  tạo cảm giác thích thú và gần gũi cho bất kỳ ai ghé thăm, phần nào thổi thêm những nét duyên ngầm cho Sunny Coffee."
        },      
      ]
    },
    {
      id: 5,
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
          id: 2,
          name: "Nhà thuốc An Tâm",
          img: anTams,
          des: `"dược phẩm xanh, sống an lành"`,
          des1: `Thiết kế lần này được xây dựng cho một cửa hàng thuốc, chính vì thế yếu tố sáng sủa, thư thái được đặt lên hàng đầu. Trắng, xanh lá là 2 màu đặc trưng của ngành y - dược, có khả năng ""chữa lành cảm xúc"" gợi đến sự sạch sẽ, thanh khiết, sự tin cậy, tận tâm của đội ngũ các y bác sĩ. Chính vì thế mà KTS PTK đã lựa chọn 2 gam màu này là tone màu chủ đạo cho nhà thuốc An Tâm. `,
          des2: `Kệ, tủ được bố trí khéo léo, tạo sự thông thoáng trong không gian, tăng sự thuận tiện và trải nghiệm mua sắm của khách hàng.`
        },
        {
          id: 3,
          name: "Nha khoa tadashi",
          img: tadashis,
          des: ``,
          des1: ``,
          des2: ``
        },
      ]
    },
  ]
  return {
    Project
  };
};
export default data;
