export interface GiftData {
  senderName: string;
  receiverName: string;
  envelopeImage: string;
  cardMessage: string;
  birthdayImage: string;
  birthdayTitle: string;
  birthdayText: string;
  balloonImage: string;
  birthdayWishesTitle: string;
  birthdayWishesMessage: string;
  thingsWeWannaDo: string[];
  loveLetterTitle?: string;
  loveLetterSubtitle?: string;
  loveLetterParagraphs?: string[];
  musicCoverImage: string;
  musicUrl: string;
  songTitle: string;
}

const defaultThings: string[] = [
  "نقابل ندي",
  "نتمشي سوا بليل ف الشتا ",
  "نقعد عالبحر نحكي ",
  "تكبر واشوفك ناجح ومبسوط ومحقق كل الي نفسك فيه",
 
];

export const defaultLoveLetterParagraphs: string[] = [
  `بحب فيك بجد كل حاجه مش مجامله بس بجد كل حاجه حنيتك وكلامك ولعبنا سوا هزارنا وكلامنا حتي الطبيعي مواساتك ليا ف كل زعل حتي لو الموضوع ميستاهلش حتي تريقتنا علي بعض بحبها صبور كدا وحنين وهادي ف كل حاجه حتي لو الدنيا بتولع هادي وبتحب تطمني دايما موجود عشاني حتي لو مشغول ومش بتحب تزعلني او تشوف حد مزعلني حتي لو كنت غلطانه لو هتمني حاجه هتمني نفضل موجودين ف حياه بعض ❣️`
];

const ahmedGift: GiftData = {
  senderName: "Rahma",
  receiverName: "Hany",
  envelopeImage: "/images/envelope-placeholder.png",
  cardMessage: "Check out these awesome surprises made just for you, Hany! ✨",
  birthdayImage: "/images/kid-placeholder.jpg",
  birthdayTitle: "To my favorite person,",
  birthdayText:
    "4 years,  I still never get tired of you. Not even for a second. And I don't think I ever will.❣️",
  balloonImage: "/images/cat.png",
  birthdayWishesTitle: "Happy 20th Birthday, Hany! 🎂✨",
  birthdayWishesMessage:
    `فرحانه اوي بجد اننا بنكبر سوا بقالنا 4 سنين كل يوم مع بعض محدش زهق من التاني ولا عمري زهقت منك ف يوم محدش عارف عني حقيقي كل تفصيله ف حياتي زيك ولا حتي حد هيبقي زيك بتحلي اي مكان بتبقي فيه وروحك خفيفه وجميله عالناس الي حواليك مش معايا بس اقرب شخص ليا بتمنالك تبقي اشطر وانجح واحد ف الدنيا دايما بتسمعني ودايما معايا وجمبي بجد اي كلام مش هيوفي حقكك بحبك اوي وربنا يخليك ليا ،كل سنه وانت طيب وبخير يهنون وتحقق كل الي نفسك فيه يارب 
ربنا ما يحرمنا من وجودك ❣️`,
  thingsWeWannaDo: defaultThings,
  loveLetterTitle: "The little things I love about you",
  loveLetterSubtitle: "",
  loveLetterParagraphs: defaultLoveLetterParagraphs,
  musicCoverImage: "/images/song-cover.jpg",
  musicUrl: "/music/our-song.mp3",
  songTitle: "Our Special Track",
};

const giftData: Record<string, GiftData> = {
  ahmed: ahmedGift,
  amir: ahmedGift,
  aya: {
    ...ahmedGift,
    senderName: "Aya",
    cardMessage: "Check out these awesome surprises for YOU!",
  },
};

export default giftData;