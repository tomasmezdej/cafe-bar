import { GiWaterBottle, GiPopcorn } from "react-icons/gi"
import { MdCoffee, MdOutlineCoffee } from "react-icons/md"
import { IoBeerOutline } from "react-icons/io5"
import { IoIosWine } from "react-icons/io"
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
    outlined: true,
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