export type ChatRole = "user" | "assistant";

export type Source = {
  title: string;
  article: string;
  url?: string;
};

export type ChatMessage = {
  id: string;
  role: ChatRole;
  text: string;
  sources?: Source[];
  createdAt: string;
};

export type Conversation = {
  id: string;
  title: string;
  updatedAt: string;
  preview: string;
};

export const mockUser = {
  name: "Muhammad Fayzulloyev",
  email: "muhammad@huquqai.uz",
  initials: "MF",
  plan: "Bepul foydalanuvchi",
  joined: "2026-yil, mart",
};

export const mockStats = [
  { label: "Berilgan savollar", value: "48" },
  { label: "Saqlangan javoblar", value: "12" },
  { label: "Suhbatlar", value: "9" },
  { label: "Manbalar tekshirildi", value: "126" },
];

export const mockConversations: Conversation[] = [
  {
    id: "c1",
    title: "YATT soliq stavkasi 2026",
    updatedAt: "Bugun, 09:12",
    preview: "Yakka tartibdagi tadbirkor uchun soliq qanday hisoblanadi?",
  },
  {
    id: "c2",
    title: "Mehnat shartnomasini bekor qilish",
    updatedAt: "Kecha, 18:40",
    preview: "Ish beruvchi shartnomani qanday holatlarda bekor qila oladi?",
  },
  {
    id: "c3",
    title: "Notarial ishonchnoma tartibi",
    updatedAt: "18-avgust",
    preview: "Avtomobil uchun ishonchnoma qanday rasmiylashtiriladi?",
  },
  {
    id: "c4",
    title: "MCHJ ro'yxatdan o'tkazish",
    updatedAt: "14-avgust",
    preview: "Ustav fondi va hujjatlar ro'yxati nimalardan iborat?",
  },
  {
    id: "c5",
    title: "Ijara shartnomasi shartlari",
    updatedAt: "9-avgust",
    preview: "Turar joyni ijaraga berishda soliq to'lanadimi?",
  },
];

export const mockSavedAnswers = [
  {
    id: "s1",
    question: "Mehnat ta'tili necha kun?",
    answer:
      "Xodimga har yili kamida 15 ish kunidan iborat haq to'lanadigan asosiy mehnat ta'tili beriladi. Ayrim toifadagi xodimlar uchun uzaytirilgan ta'til belgilanadi.",
    source: { title: "O'zbekiston Respublikasi Mehnat kodeksi", article: "224-modda" },
    savedAt: "20-avgust",
  },
  {
    id: "s2",
    question: "YATT qanday soliq to'laydi?",
    answer:
      "Yakka tartibdagi tadbirkor faoliyat turiga qarab qat'iy belgilangan soliq yoki aylanmadan soliq to'laydi. Yillik daromad chegarasidan oshganda umumbelgilangan tartibga o'tiladi.",
    source: { title: "Soliq kodeksi", article: "437-modda" },
    savedAt: "17-avgust",
  },
  {
    id: "s3",
    question: "Ishonchnoma muddati qancha?",
    answer:
      "Ishonchnoma amal qilish muddati uch yildan oshmasligi kerak. Muddat ko'rsatilmagan bo'lsa, u tuzilgan kundan boshlab bir yil davomida amal qiladi.",
    source: { title: "Fuqarolik kodeksi", article: "137-modda" },
    savedAt: "11-avgust",
  },
];

export const suggestedQuestions = [
  "YATT uchun 2026-yilda soliq stavkasi qanday?",
  "Mehnat shartnomasi qanday bekor qilinadi?",
  "MCHJ ochish uchun qanday hujjatlar kerak?",
  "Notarial ishonchnoma qancha muddatga beriladi?",
];

export function buildMockAnswer(question: string): ChatMessage {
  return {
    id: `a-${Date.now()}`,
    role: "assistant",
    createdAt: new Date().toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" }),
    text:
      `Savolingiz bo'yicha amaldagi qonunchilikka asoslangan qisqa javob:\n\n` +
      `"${question.trim()}" masalasida qonun hujjatlari quyidagini belgilaydi. Tomonlar o'rtasidagi munosabat yozma shaklda rasmiylashtirilishi, ` +
      `belgilangan muddatlar va majburiyatlar aniq ko'rsatilishi shart. Nizo yuzaga kelganda dastlab tinch yo'l bilan hal qilish, ` +
      `natija bo'lmasa sud tartibida murojaat qilish nazarda tutilgan.\n\n` +
      `Eslatma: bu javob umumiy axborot xarakteriga ega va yuridik maslahat o'rnini bosmaydi.`,
    sources: [
      { title: "O'zbekiston Respublikasi Fuqarolik kodeksi", article: "353-modda" },
      { title: "O'zbekiston Respublikasi Mehnat kodeksi", article: "97-modda" },
    ],
  };
}
