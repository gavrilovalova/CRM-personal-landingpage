// All page copy, verbatim from design/design/content.md.
// Do not change the wording without the product owner's approval.

import type { IconName } from "../components/ui/icons";

export type Tone = "brand" | "lime" | "pink" | "surface";

export interface Note {
  date: string;
  text: string;
  /** Shown only on desktop, faded out */
  desktopOnly?: boolean;
}

export interface Contact {
  initials: string;
  name: string;
  context: string;
  channels?: string[];
  feedLabel?: string;
  notes: Note[];
}

export const productName = "[Название]";

export const meta = {
  title: `${productName} — Помни людей, а не только их номера`,
  description:
    "Умная записная книжка для тех, кого ты знаешь лично. Кто это, откуда вы знакомы, как связаться и о чём договорились — всё в одной карточке.",
};

export const header = {
  nav: [
    { label: "Как работает", href: "#how" },
    { label: "Возможности", href: "#features" },
    { label: "Вопросы", href: "#faq" },
  ],
  cta: "Открыть",
};

export const hero = {
  title: { before: "Помни", highlight: "людей,", after: "а не только их номера" },
  lead: "Умная записная книжка для тех, кого ты знаешь лично. Кто это, откуда вы знакомы, как связаться и о чём договорились — всё в одной карточке.",
  cta: "Добавить первый контакт →",
  caption: "Не для продаж. Для своих.",
  stickers: {
    top: "вот на чём вы остановились",
    bottom: "напомним 25 окт",
  },
  contact: {
    initials: "АП",
    name: "Аня Петрова",
    context: "Познакомились на UX-конференции",
    channels: ["Телефон", "Почта", "Telegram"],
    notes: [
      { date: "12 окт", text: "Созвонимся, когда она запустит курс по исследованиям." },
      { date: "3 мар", text: "Советовала книгу про интервью с пользователями.", desktopOnly: true },
    ],
  } satisfies Contact,
};

export const problem = {
  label: "Знакомо?",
  title: "Контакт в телефоне есть, а человека в памяти нет",
  cards: [
    {
      tags: ["Аня Конф", "Дима (тот самый)"],
      text: "В записной книжке «Аня Конф» и «Дима (тот самый)». Кто это и откуда, уже не вспомнить.",
    },
    {
      icon: { name: "phone", tone: "lime" },
      text: "Полгода назад договорились созвониться «как будет готово». Что именно должно быть готово, неясно.",
    },
    {
      icon: { name: "scattered", tone: "brand" },
      text: "Важное разбросано: часть в мессенджере, часть в заметках, часть нигде.",
    },
  ] satisfies { tags?: string[]; icon?: { name: IconName; tone: Tone }; text: string }[],
  conclusion: {
    before: "Люди теряются не потому, что неважны. Просто контекст хранится в голове, а",
    highlight: "голова не резиновая.",
  },
};

export const solution = {
  label: "Решение",
  title: "Не CRM для сделок, а записная книжка с памятью",
  text: "У каждого человека своя карточка: имя, телефон, почта, откуда вы знакомы. Под ними лента заметок, куда ты дописываешь пару строк после каждого разговора. Через месяц или через год открываешь карточку и сразу понимаешь, на чём вы остановились.",
  contact: {
    initials: "ДС",
    name: "Дима Соколов",
    context: "Бывший коллега · митап по фронтенду",
    feedLabel: "Лента заметок",
    notes: [
      { date: "12 окт", text: "Созвонимся, когда выйдет его бета. Спросить про найм." },
      { date: "20 апр", text: "Ушёл в стартап, делает сервис для бронирования." },
      { date: "2 фев", text: "Познакомились на митапе, обменялись телеграмом.", desktopOnly: true },
    ],
  } satisfies Contact,
};

export const howItWorks = {
  label: "Как это работает",
  title: "Три шага, и ты больше не теряешь контекст",
  steps: [
    { tone: "brand", title: "Добавь человека", text: "Имя, контакты и откуда знакомы. Остальное потом." },
    {
      tone: "lime",
      title: "Найди за секунду",
      text: "Все контакты собраны по алфавиту, а поиск по имени найдёт нужного, даже если их сотни.",
    },
    {
      tone: "pink",
      title: "Запиши, о чём поговорили",
      text: "Пара строк после звонка или встречи, и заметка ложится в ленту карточки.",
    },
  ] satisfies { tone: Tone; title: string; text: string }[],
};

export const features = {
  label: "Что умеет",
  title: "Ровно то, что нужно, и ничего лишнего",
  tiles: [
    { tone: "brand", glyph: "А–Я", title: "Список по алфавиту", text: "Все свои люди на одном экране." },
    {
      tone: "surface",
      icon: "contact-card",
      title: "Карточка контакта",
      text: "Кто это, откуда знакомы, телефон, почта.",
    },
    {
      tone: "surface",
      icon: "bell",
      title: "Напоминания",
      text: "Отметь, когда написать или позвонить и о чём, — напомним ровно в тот момент, когда пора.",
    },
    {
      tone: "pink",
      icon: "pencil",
      title: "Правка в любой момент",
      text: "Сменил человек номер или работу — обновил за пару кликов.",
    },
    { tone: "lime", icon: "feed", title: "Лента заметок", text: "История общения по датам, от свежего к старому." },
    {
      tone: "surface",
      icon: "devices",
      title: "С любого устройства",
      text: "Тот же адрес в другом браузере показывает те же контакты.",
    },
  ] satisfies { tone: Tone; icon?: IconName; glyph?: string; title: string; text: string }[],
};

export const nonGoals = {
  label: "Чего здесь нет (и это намеренно)",
  title: { before: "Лучшее из мира CRM — для", highlight: "своих людей" },
  items: [
    "Нет сделок, статусов и «этапов продаж».",
    "Нет напоминаний, которые дёргают каждый час.",
    "Нет сложной настройки: открыл и пользуешься.",
  ],
};

export const audience = {
  label: "Для кого",
  title: "Если людей больше, чем помещается в голове",
  items: [
    { icon: "briefcase", text: "Ходишь на конференции и митапы и знакомишься быстрее, чем запоминаешь." },
    { icon: "people", text: "Работаешь с людьми: фрилансеры, менторы, рекрутеры, организаторы." },
    { icon: "heart", text: "Хочешь не терять друзей и старых коллег, а помнить, что у них происходит." },
  ] satisfies { icon: IconName; text: string }[],
};

export const faq = {
  title: "Вопросы",
  items: [
    {
      question: "Чем это отличается от контактов в телефоне?",
      answer:
        "Телефон хранит номер, а здесь хранится история: откуда знакомы, о чём говорили и какой следующий шаг стоит сделать для развития вашего знакомства.",
    },
    {
      question: "А от Notion или заметок?",
      answer:
        "Там всё можно, но всё приходится собирать самому. Здесь каждый человек сразу получает карточку и ленту, а поиск работает из коробки.",
    },
    { question: "Это бесплатно?", answer: "Да, сервис бесплатный." },
    { question: "Кто видит мои контакты?", answer: "Никто, кроме тебя: контакты доступны только тебе." },
  ],
};

export const finalCta = {
  sticker: "займёт минуту",
  title: "Вспомни, о чём вы договорились",
  text: "Добавь одного человека, с которым давно хотел созвониться, и запиши, о чём хочешь поговорить. Это займёт минуту.",
  cta: "Добавить первый контакт →",
};

export const footer = {
  cta: "Открыть приложение",
};
