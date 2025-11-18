export const navItems = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/category",
    label: "Category",
  },
  {
    route: "/blogs",
    label: "Blogs ",
  },
];

export const blogPosts = [
  {
    img: "/react.jpg", // frontend performance optimizatsiyasi uchun maydon
    title: "React’da komponentlarni samarali tashkil qilish",
    expert:
      "Kod strukturasi va komponent ierarxiyasini to‘g‘ri ajratish loyihani boshqarishni osonlashtiradi.",
    author: {
      image: "https://picsum.photos/id/1005/100",
      name: "Anvar Mirsaatov",
    },
  },
  {
    img: "/seo.jpg", // SEO / Next.js sahifasi uchun mos rasm
    title: "Next.js’da SEO optimizatsiyasi bo‘yicha amaliy maslahatlar",
    expert:
      "Server-side rendering yordamida sahifalar tezroq yuklanadi va qidiruv tizimlari uchun qulay bo‘ladi.",
    author: {
      image: "https://picsum.photos/id/1027/100",
      name: "Dilnoza Karimova",
    },
  },
  {
    img: "/ux.jpg", // UI/UX dizayn uchun mos rasm
    title: "UI/UX dizaynda minimalizm kuchi",
    expert:
      "Minimal dizayn foydalanuvchi e’tiborini muhim elementlarga qaratadi va interfeysni soddalashtiradi.",
    author: {
      image: "https://picsum.photos/id/1001/100",
      name: "Azizbek Qodirov",
    },
  },
  {
    img: "/ts.jpg",
    title: "TypeScript bilan React loyihalarini himoyalash",
    expert:
      "TypeScript yordamida xatolarni erta aniqlash va jamoaviy kod sifatini yaxshilash mumkin.",
    author: {
      image: "https://picsum.photos/id/1011/100",
      name: "Malika Islomova",
    },
  },
  {
    img: "/front.jpg",
    title: "Frontend performance optimizatsiyasi: real usullar",
    expert:
      "Lazy loading, memoization va kod splitting orqali ilovangizni tezlashtiring.",
    author: {
      image: "https://picsum.photos/id/1012/100",
      name: "Rustam Yusupov",
    },
  },
];
