import { asset } from "../utils/asset"
export type Bread = {
    id: string,
    name : string,
    en : string,
    price : string,
    time : string,
    desc : string,
    tip: string,
    img: string,
    photo : string,
}

export const BREADS: Bread[] = [
    { id: "croissant",  name: "크루아상", en: "Croissant",  price: "3,500원", time: "08:00",
      desc: "버터를 27겹 접어 겉은 바삭하고 속은 촉촉해요.",
      tip: "따뜻할 때 손으로 찢어 드세요.",
      img: asset("images/croissant-cutout.png"), photo: asset("images/croissant.jpg") },
    { id: "salt-bread", name: "소금빵",   en: "Salt Bread", price: "2,800원", time: "09:30",
      desc: "버터를 품은 반죽 위에 굵은 소금을 톡톡.",
      tip: "버터 날개가 생기면 성공!",
      img: asset("images/salt-bread-cutout.png"), photo: asset("images/salt-bread.jpg") },
    { id: "milk-bread", name: "우유식빵", en: "Milk Bread", price: "4,800원", time: "08:30",
      desc: "물 없이 우유로만 반죽해 결대로 쭉쭉 찢어지는 부드러운 식빵.",
      tip: "다음 날엔 살짝 구워 버터와 함께.",
      img: asset("images/milk-bread-cutout.png"), photo: asset("images/milk-bread.jpg") },
    { id: "baguette",   name: "바게트",   en: "Baguette",   price: "4,500원", time: "13:00",
      desc: "하루 두 번 굽는 겉바속쫄 바게트예요.",
      tip: "샌드위치용으로 반 잘라드려요.",
      img: asset("images/baguette-cutout.png"), photo: asset("images/baguette.jpg") },
    { id: "scone",      name: "스콘",     en: "Scone",      price: "3,000원", time: "12:30",
      desc: "차가운 버터를 넣어 겉은 바삭, 속은 포슬포슬해요.",
      tip: "반으로 갈라 버터와 딸기잼을 듬뿍.",
      img: asset("images/scone-cutout.png"), photo: asset("images/scone.jpg") },
    { id: "campagne",   name: "깜빠뉴",   en: "Campagne",   price: "4,000원", time: "13:00",
      desc: "천연 발효종 '르방이'로 구워 겉은 단단, 속은 쫀득해요.",
      tip: "얇게 썰어 수프에 곁들여 보세요.",
      img: asset("images/campagne-cutout.png"), photo: asset("images/campagne.jpg") },
]

export const findBread = (id: string) => BREADS.find((b) => b.id === id);

/* "13:00" → "오후 1:00" */
export const ampm = (time: string) => {
    const [h, m] = time.split(":").map(Number);
    return `${h < 12 ? "오전" : "오후"} ${h > 12 ? h - 12 : h}:${String(m).padStart(2, "0")}`;
};