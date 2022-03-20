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
  const dataProductHome = [
    {
      id: 1,
      name: "Z Community Center",
      img: "https://static.wixstatic.com/media/c837a6_c702cc51a7144072b3515edb490ad130~mv2.jpg/v1/fill/w_1453,h_700,al_c,q_85,usm_0.66_1.00_0.01/c837a6_c702cc51a7144072b3515edb490ad130~mv2.webp",
      description:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.​",
    },
    {
      id: 2,
      name: "South Library",
      img: "https://static.wixstatic.com/media/c837a6_98793bd523ee4439afb7e49a7a15fdb0~mv2.jpg/v1/fill/w_1453,h_700,al_b,q_85,usm_0.66_1.00_0.01/c837a6_98793bd523ee4439afb7e49a7a15fdb0~mv2.webp",
      description:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.​",
    },
    {
      id: 3,
      name: "Z Community Center",
      img: "https://static.wixstatic.com/media/c837a6_0dab066d199041ee93ab263afa018116~mv2.jpg/v1/fill/w_1453,h_700,al_t,q_85,usm_0.66_1.00_0.01/c837a6_0dab066d199041ee93ab263afa018116~mv2.webp",
      description:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.​",
    },
    {
      id: 4,
      name: "Z Community Center",
      img: "https://static.wixstatic.com/media/c837a6_79defd1e6757469ab15ce4c4bcdec260~mv2.jpg/v1/fill/w_1453,h_700,al_b,q_85,usm_0.66_1.00_0.01/c837a6_79defd1e6757469ab15ce4c4bcdec260~mv2.webp",
      description:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.​",
    },
  ];
  
  const dataProductCategory = [
    {
      id: 1,
      name: "Căn hộ chung cư",
      img: [
        {
          src: img.src,
          name: "name project"
        },
        {
          src: img.src,
          name: "name project"
        },
        {
          src: img.src,
          name: "name project"
        },
        {
          src: img.src,
          name: "name project"
        },

      ],
    },
    {
      id: 2,
      name: "Nhà ở",
      img: [
        {
          src: img.src,
          name: "name project"
        },
        {
          src: img.src,
          name: "name project"
        },
        {
          src: img.src,
          name: "name project"
        },
        {
          src: img.src,
          name: "name project"
        },

      ],
    },
    {
      id: 3,
      name: "shop quần áo ",
      img: [
        {
          src: img.src,
          name: "name project"
        },
        {
          src: img.src,
          name: "name project"
        },
        {
          src: img.src,
          name: "name project"
        },
        {
          src: img.src,
          name: "name project"
        },

      ],
    },
    {
      id: 4,
      name: "cafe",
      img: [
        {
          src: img.src,
          name: "name project"
        },
        {
          src: img.src,
          name: "name project"
        },
        {
          src: img.src,
          name: "name project"
        },
        {
          src: img.src,
          name: "name project"
        },

      ],
    }
  ]
  
  const Project = [
    {
      id: 1,
      name: "Nội thất nhà ở",
      project: [
        {
          id: 1,
          name: "An House",
          img: AnHouses
        },
        {
          id: 2,
          name: "AP apartment",
          img: APapars,
        },
        {
          id: 3,
          name: "HH apartment",
          img: HHapars,
        },
        {
          id: 4,
          name: "Q apartment",
          img: Qapars,
        },
        {
          id: 5,
          name: "V apartment",
          img: Vapars,
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
        },
        {
          id: 2,
          name: "Moyan Shop",
          img: Moyans,
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
        },
      ]
    },
    {
      id: 4,
      name: "Cafe - Nhà hàng - Trà sữa",
      project: [
        {
          id: 1,
          name: "Restourant HH",
          img: Restous,
        },
        {
          id: 2,
          name: "Star coffe",
          img: startCofees,
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
        },
        {
          id: 2,
          name: "KISS Playgroud",
          img: KissPlays,
        },
      ]
    },
  ]
  return {
    dataProductHome,
    dataProductCategory,
    Project
  };
};
export default data;
