import {
  GiWaterBottle,
  GiPopcorn,
  GiGlassShot,
  GiPineTree,
  GiPirateCaptain,
  GiBrandyBottle,
  GiLemon,
  GiFlowers
} from "react-icons/gi"
import {
  MdCoffee,
  MdOutlineCoffee,
  MdLiquor
} from "react-icons/md"
import { BiDrink } from "react-icons/bi"
import { IoBeerOutline } from "react-icons/io5"
import { IoIosWine } from "react-icons/io"
import { FaGlassWhiskey } from "react-icons/fa"

export const MenuSectionFrontLeft = [
  {
    icon: <GiWaterBottle size={"35px"}/>,
    title: "NEALKO",
    outlined: false,
    list: [
      {
        title: "Kofola Originál",
        volume: "300/500 ml",
        price: "1,10€/1,50€"
      },
      {
        title: "Coca Cola",
        volume: "330 ml",
        price: "1,50€"
      },
      {
        title: "Fanta",
        volume: "330 ml",
        price: "1,50 €"
      },
      {
        title: "Sprite",
        volume: "330 ml",
        price: "1,50 €"
      },
      {
        title: "Cappy",
        volume: "podľa ponuky 250 ml",
        price: "1,50 €"
      },
      {
        title: "Fuze Tea",
        volume: "podľa ponuky 250 ml",
        price: "1,50 €"
      },
      {
        title: "Kinley Tonic Water",
        volume: "podľa ponuky 250 ml",
        price: "1,50 €"
      },
      {
        title: "Natura minerálna voda",
        volume: "300 ml",
        price: "1,20 €"
      },
      {
        title: "Monster Energy",
        volume: "500 ml",
        price: "2,30 €"
      },
      {
        title: "Romerquelle",
        volume: "Citrónová tráva 330 ml",
        price: "1,50 €"
      },
      {
        title: "ISO Fruit",
        volume: "citrón / grapefruit 500ml",
        price: "1,60 €"
      }
    ]
  },
  {
    icon: <MdCoffee  size={"35px"}/>,
    title: "KÁVIČKA",
    outlined: false,
    list: [
      {
        title: "Espresso / Lungo",
        volume: "7 g",
        price: "1,60 €"
      },
      {
        title: "Espresso tonic",
        volume: "7 g",
        price: "2,20 €"
      },
      {
        title: "Cappuccino",
        volume: "7 g",
        price: "2,00 €"
      },
      {
        title: "Caffe latte",
        volume: "7 g",
        price: "2,00 €"
      },
      {
        title: "Med / Mlieko",
        volume: "20 g / 20 ml",
        price: "0,30 €"
      }
    ]
  },
  {
    icon: <MdOutlineCoffee  size={"35px"}/>,
    title: "ČAJ A HORÚCE NÁPOJE",
    outlined: false,
    list: [
      {
        title: "Čaj",
        volume: "330 ml",
        price: "1,50 €"
      },
      {
        title: "Sypaný čaj",
        volume: "330 ml",
        price: "2,00 €"
      },
      {
        title: "Horúca čokoláda",
        volume: "330 ml",
        price: "2,00 €"
      },
      {
        title: "Hot Cappy",
        volume: "250 ml",
        price: "1,80 €"
      }
    ]
  }
]

export const MenuSectionFrontRight = [
  {
    icon: <GiPopcorn  size={"35px"}/>,
    title: "POCHUTINY",
    outlined: false,
    list: [
      {
        title: "Tyčinky",
        volume: "45g al. 1,11",
        price: "1,00 €"
      },
      {
        title: "Pistácie",
        volume: "75g al. 8",
        price: "2,60 €"
      },
      {
        title: "Arašidy solené",
        volume: "100g al. 5, 8",
        price: "1,40 €"
      },
      {
        title: "Zemiakové lupienky",
        volume: "70 g al. 5, 8",
        price: "1,60 €"
      },
      {
        title: "Arašidové chrumky",
        volume: "60 g al. 5, 8",
        price: "1,00 €"
      },
      {
        title: "Žuvačky",
        volume: "14 g",
        price: "1,00 €"
      },
      {
        title: "Milka čokoláda",
        volume: "100 g al. 1, 7",
        price: "1,80 €"
      },
      {
        title: "Toffifee",
        volume: "100 g al. 1, 6, 7",
        price: "3,30 €"
      }
    ]
  },
  {
    icon: <IoBeerOutline  size={"35px"}/>,
    title: "PIVKO",
    outlined: false,
    list: [
      {
        title: "Desinka -10°",
        volume: "300/500 ml",
        price: "1,10 €/1,60 €",
        outlined: true,
        outlinedTop: true,
      },
      {
        title: "Dvanástka - 12°",
        volume: "300/500 ml",
        price: "1,30 €/1,80 €",
        outlined: true,
      },
      {
        title: "Špeciál",
        volume: "podľa ponuky 500 ml",
        price: "2,30 €",
        outlined: true,
      },
      {
        title: "Zlatý Bažant Radler nealko",
        volume: "Sezónne 300/500 ml",
        price: "1,10 €/1,60 €",
        outlined: true,
        outlinedBottom: true
      },
      {
        title: "Corona",
        volume: "Fľaškové 355 ml",
        price: "2,50 €"
      },
      {
        title: "Desperados",
        volume: "Fľaškové 350 ml",
        price: "2,20 €"
      },
      {
        title: "Strongbow",
        volume: "Podľa ponuky 440 ml",
        price: "1,30 €"
      },
      {
        title: "Zlatý Bažant nealko",
        volume: "Fľaškové podľa ponuky 330/500 ml",
        price: "1,50 €"
      },
      {
        title: "Pilsner Urquell",
        volume: "Podľa ponuky 500 ml",
        price: "1,80 €"
      },
      {
        title: "Fľaškové pivo",
        volume: "Podľa ponuky 500 ml",
        price: "1,40 €"
      }
    ]
  },
  {
    icon: <IoIosWine  size={"35px"}/>,
    title: "VÍNKO",
    outlined: false,
    list: [
      {
        title: "Biele suché",
        volume: "Podľa ponuky 1 dcl",
        price: "1,50 €"
      },
      {
        title: "Červené suché",
        volume: "Podľa ponuky 1dcl",
        price: "1,50 €"
      }
    ]
  }
]

export const MenuSectionBackLeft = [
  {
    icon: <GiGlassShot  size={"35px"}/>,
    title: "VODKA",
    outlined: false,
    list: [
      {
        title: "Vodka 40 %",
        volume: "40 ml",
        price: "1,00 €"
      },
      {
        title: "Vodka Goral 40 %",
        volume: "40 ml",
        price: "1,30 €"
      },
      {
        title: "Vodka Absolut 40 %",
        volume: "40 ml",
        price: "1,60 €"
      },
      {
        title: "Vodka Nemiroff 40 %",
        volume: "40 ml",
        price: "1,60 €"
      },
      {
        title: "Vodka Russiam Standard 40 %",
        volume: "40 ml",
        price: "1,80 €"
      }
    ]
  },
  {
    icon: <GiPineTree  size={"35px"}/>,
    title: "BOROVIČKA",
    outlined: false,
    list: [
      {
        title: "Borovička Slovenská 40 %",
        volume: "40 ml",
        price: "1,00 €"
      },
      {
        title: "Borovička Koniferum 37,5 %",
        volume: "40 ml",
        price: "1,40 €"
      },
      {
        title: "Borec 38 %",
        volume: "40 ml",
        price: "1,40 €"
      },
      {
        title: "Borovička Spišská 40 %",
        volume: "40 ml",
        price: "1,50 €"
      }
    ]
  },
  {
    icon: false,
    title: "CRAFTOVÉ GINY Z DIELNE BVD",
    outlined: true,
    list: [
      {
        title: "Lučky GIN 40 %",
        volume: "40 ml",
        price: "2,10 €"
      },
      {
        title: "BVD Slovenský GIN 43,2 %",
        volume: "40 ml",
        price: "2,70 €"
      },
    ]
  },
  {
    icon: <GiPirateCaptain  size={"35px"}/>,
    title: "RUM",
    outlined: false,
    list: [
      {
        title: "Um tuzemský 40 %",
        volume: "40 ml",
        price: "1,00 €"
      },
      {
        title: "Bacardi OakHeard 38 %",
        volume: "40 ml",
        price: "1,60 €"
      },
      {
        title: "Captain Morgan Spiced Gold 35 %",
        volume: "40 ml",
        price: "1,60 €"
      },
      {
        title: "Diplomatico Reserva Exlcusiva 40 %",
        volume: "40 ml",
        price: "4,20 €"
      },
      {
        title: "Pyrat X.O. 40 %",
        volume: "40 ml",
        price: "3,60 €"
      },
      {
        title: "Pacifico Gran Reserva 40 %",
        volume: "40 ml",
        price: "3,70 €"
      },
      {
        title: "Flor de Caňa Centenario 40 %",
        volume: "40 ml",
        price: "3,60 €"
      },
      {
        title: "Zacapa Centenario 40 %",
        volume: "40 ml",
        price: "6,00 €"
      },
    ]
  },
  {
    icon: <GiBrandyBottle  size={"35px"}/>,
    title: "COGNAC A BRANDY",
    outlined: false,
    list: [
      {
        title: "Hennessy V.S. 40 %",
        volume: "40 ml",
        price: "4,00 €"
      },
      {
        title: "Matyšák VSOP Brandy 40 %",
        volume: "40 ml",
        price: "5,60 €"
      }
    ]
  },
  {
    icon: <GiLemon  size={"35px"}/>,
    title: "TEQUILA",
    outlined: false,
    list: [
      {
        title: "Tequilla Pepe Lopez 40 %",
        volume: "40 ml gold/silver",
        price: "1,80 €"
      }
    ]
  }
]

export const MenuSectionBackRight = [
  {
    icon: <GiFlowers  size={"35px"}/>,
    title: "VOĽBA PRE ŽENY",
    outlined: false,
    list: [
      {
        title: "Lučky Pink GIN 38 %",
        volume: "40 ml",
        price: "2,10 €"
      },
      {
        title: "Baileys likér 17 %",
        volume: "40 ml",
        price: "1,80 €"
      }
    ]
  },
  {
    icon: <FaGlassWhiskey  size={"28px"}/>,
    title: "WHISKEY",
    outlined: false,
    list: [
      {
        title: "Ballantine´s 40 %",
        volume: "40 ml",
        price: "1,70 €"
      },
      {
        title: "Jack Daniels 40 %",
        volume: "40 ml",
        price: "2,60 €"
      },
      {
        title: "Jack Daniels Honey 35 %",
        volume: "40 ml",
        price: "2,60 €"
      },
      {
        title: "Jack Daniels Fire 35 %",
        volume: "40 ml",
        price: "2,60 €"
      },
      {
        title: "Jameson 40 %",
        volume: "40 ml",
        price: "2,50 €"
      },
      {
        title: "Tullamore Dew 40 %",
        volume: "40 ml",
        price: "2,50 €"
      }
    ]
  },
  {
    icon: <MdLiquor  size={"35px"}/>,
    title: "LIKÉR",
    outlined: false,
    list: [
      {
        title: "Fernet Citrus 27 %",
        volume: "40 ml",
        price: "1,40 €"
      },
      {
        title: "Becherovka 38 %",
        volume: "40 ml",
        price: "1,40 €"
      },
      {
        title: "Jägermeister 35 %",
        volume: "40 ml",
        price: "1,80 €"
      }
    ]
  },
  {
    icon: false,
    title: "TATRA TEA",
    outlined: true,
    list: [
      {
        title: "Citrus 32 %",
        volume: "40 ml",
        price: "1,60 €"
      },
      {
        title: "Peach 42 %",
        volume: "40 ml",
        price: "1,70 €"
      },
      {
        title: "Flower 47 %",
        volume: "40 ml",
        price: "1,60 €"
      },
      {
        title: "Originál 52 %",
        volume: "40 ml",
        price: "1,70 €"
      },
      {
        title: "Forest Fruit 62 %",
        volume: "40 ml",
        price: "1,90 €"
      },
      {
        title: "Apple and Pear 67 %",
        volume: "40 ml",
        price: "1,90 €"
      }
    ]
  },
  {
    icon: <BiDrink  size={"35px"}/>,
    title: "DESTILÁTY A LIEHOVINY",
    outlined: false,
    list: [
      {
        title: "Slivovica Bošacka 52 %",
        volume: "40 ml",
        price: "1,70 €"
      },
      {
        title: "Slivovica Jelínek 50 %",
        volume: "40 ml",
        price: "1,80 €"
      },
      {
        title: "Hruškovica Jelínek 40 %",
        volume: "40 ml",
        price: "1,80 €"
      },
      {
        title: "Trnkovica Jelínek 42 %",
        volume: "40 ml",
        price: "1,80 €"
      },
      {
        title: "Marhuľovica BVD 45 %",
        volume: "40 ml",
        price: "3,20 €"
      }
    ]
  }
]