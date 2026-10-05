/**
 * Real photography mirrored from treschiceventplanning.com.
 * The inventory (source page, category, tradition, alt text) also lives in the
 * `media_assets` table; these imports are the bundled, optimized files.
 * Image usage rights for all client photography must be confirmed before launch.
 */
import marianePortrait from "@/assets/gallery/mariane-portrait.jpg";
import brandLogo from "@/assets/gallery/Logo.jpg";
import brandLogoLight from "@/assets/gallery/Lite fonts logo.png";
import brandLogoDark from "@/assets/gallery/Dark fonts Logo.png";
import heroCoupleZaffaDance from "@/assets/gallery/hero-couple-zaffa-dance.jpg";
import heroWeddingPartyPalms from "@/assets/social-celebrations/Home Hero/hero-wedding-party-palms.webp";
import cockpitCouple from "@/assets/gallery/cockpit-couple.jpg";
import mariane2 from "@/assets/gallery/mariane-2.webp";
import fireworksCouplePalms from "@/assets/gallery/fireworks-couple-palms.jpg";
import couplePortraitBw from "@/assets/gallery/couple-portrait-bw.jpg";
import tentedWaterfrontReception from "@/assets/gallery/tented-waterfront-reception.jpg";
import fullServicePlanning from "@/assets/gallery/Full-Service Planning.webp";
import finalDetailsLogistics from "@/assets/gallery/Final Details & Logistics.webp";
import vizcayaVillaEvening from "@/assets/gallery/vizcaya-villa-evening.jpg";
import ballroomSuspendedFlorals from "@/assets/gallery/ballroom-suspended-florals.jpg";
import gardenReceptionTallFlorals from "@/assets/gallery/garden-reception-tall-florals.jpg";
import candlelitHeadTable from "@/assets/gallery/candlelit-head-table.jpg";
import zaffaProcession from "@/assets/gallery/zaffa-procession.jpg";
import zaffaBandStage from "@/assets/gallery/zaffa-band-stage.jpg";
import takhtEnsembleMusicians from "@/assets/gallery/takht-ensemble-musicians.jpg";
import tentedLongTable from "@/assets/gallery/tented-long-table.jpg";
import ballroomBlushFlorals from "@/assets/gallery/ballroom-blush-florals.jpg";
import ballroomDanceFloor from "@/assets/gallery/ballroom-dance-floor.jpg";
import chandelierReception from "@/assets/gallery/chandelier-reception.jpg";
import tallCenterpiece from "@/assets/gallery/tall-centerpiece.jpg";
import floralsAndShoes from "@/assets/gallery/florals-and-shoes.jpg";
import invitationSuiteRings from "@/assets/gallery/invitation-suite-rings.jpg";
import ringsDetail from "@/assets/gallery/rings-detail.jpg";
import invitationDetail from "@/assets/gallery/invitation-detail.jpg";
import giftTable from "@/assets/gallery/gift-table.jpg";
import placeSettingDetail from "@/assets/gallery/place-setting-detail.jpg";
import bestDayEverSign from "@/assets/gallery/best-day-ever-sign.jpg";
import dessertTable from "@/assets/gallery/dessert-table.jpg";
import bridalBouquet from "@/assets/gallery/bridal-bouquet.jpg";
import weddingCake from "@/assets/gallery/wedding-cake.jpg";
import floralDetail from "@/assets/gallery/floral-detail.jpg";
import goldVaseCenterpiece from "@/assets/gallery/gold-vase-centerpiece.jpg";
import favorsDetail from "@/assets/gallery/favors-detail.jpg";
import glasswareDetail from "@/assets/gallery/glassware-detail.jpg";
import tablescapePlaceSetting from "@/assets/gallery/tablescape-place-setting.jpg";
import receptionCollage from "@/assets/gallery/reception-collage.jpg";

import homeReview from "@/assets/gallery/home-review.jpg";
import venueCancellation from "@/assets/gallery/venue-cancellation.jpg";
import southAsianCelebrations from "@/assets/gallery/South Asian, Hindu, Sikh & Muslim celebrations.jpg";
import jewishWeddings from "@/assets/gallery/Jewish weddings & simchas.jpg";
import middleEasternWeddings from "@/assets/gallery/Middle Eastern Weddings.jpg";
import interfaithFusionWeddings from "@/assets/gallery/Interfaith & fusion weddings.jpg";
import westernDestinationWeddings from "@/assets/gallery/Western & destination weddings.jpg";
import multiDayCelebrations from "@/assets/gallery/Multi-day, multi-family celebrations.jpg";
import multiculturalFusionWeddings from "@/assets/gallery/Multicultural & Fusion Weddings Perfect.webp";
import nearOrFar from "@/assets/gallery/Near or Far.jpg";
import destinationHero from "@/assets/social-celebrations/Destination-hero.webp";
import multiculturalHero from "@/assets/social-celebrations/Multicultural-hero.webp";
import clientTestimonialsHero from "@/assets/social-celebrations/Client Testimonials-hero.webp";
import questionsHero from "@/assets/social-celebrations/Questions-hero.webp";
import portfolioHero from "@/assets/social-celebrations/Portfolio-hero.webp";
import celebrationsHero from "@/assets/social-celebrations/celebrations-HERO.webp";
import aboutHero from "@/assets/social-celebrations/About-hero.webp";
import weddingHero from "@/assets/social-celebrations/Wedding-hero.webp";
import { allTypesOfWeddingsItems } from "./typesOfWeddingsMedia";

export type MediaItem = {
  slug: string;
  src: string;
  alt: string;
  caption: string;
  category:
    | "reception"
    | "tablescape"
    | "detail"
    | "ceremony"
    | "entertainment"
    | "venue"
    | "celebration"
    | "portrait"
    | "south-asian"
    | "destination"
    | "fusion"
    | "middle-eastern"
    | "jewish";
  tradition?: string | undefined;
  orientation: "landscape" | "portrait";
};

export const media = {
  brandLogo,
  brandLogoLight,
  brandLogoDark,
  heroReceptionLift: heroCoupleZaffaDance,
  heroWeddingPartyPalms,
  heroLoopVideo: "/hero-loop.webm",
  heroPoster: heroCoupleZaffaDance,
  marianePortrait,
  southAsianCeremony: multiDayCelebrations,
  chuppahCeremony: jewishWeddings,
  middleEasternWeddings,
  interfaithFusionWeddings,
  westernDestinationWeddings,
  multiDayCelebrations: southAsianCelebrations,
  multiculturalFusionWeddings,
  nearOrFar,
  destinationHero,
  multiculturalHero,
  clientTestimonialsHero,
  questionsHero,
  portfolioHero,
  celebrationsHero,
  aboutHero,
  weddingHero,
  vizcayaStairsCouple: venueCancellation,
  plannerWithCoupleBw: homeReview,
  sweetheartTableToast: candlelitHeadTable,
  tentedBabysbreathReception: tentedLongTable,
  fireworksCouplePalms,
  blushBallroomLongtable: ballroomBlushFlorals,
  eventDancefloorGreen: ballroomDanceFloor,
  venueCancellation,
  homeReview,
  cockpitCouple,
  mariane2,
  heroCoupleZaffaDance,
  couplePortraitBw,
  tentedWaterfrontReception,
  fullServicePlanning,
  finalDetailsLogistics,
  vizcayaVillaEvening,
  ballroomSuspendedFlorals,
  gardenReceptionTallFlorals,
  candlelitHeadTable,
  zaffaProcession,
  zaffaBandStage,
  takhtEnsembleMusicians,
  tentedLongTable,
  ballroomBlushFlorals,
  ballroomDanceFloor,
  chandelierReception,
  tallCenterpiece,
  floralsAndShoes,
  invitationSuiteRings,
  ringsDetail,
  invitationDetail,
  giftTable,
  placeSettingDetail,
  bestDayEverSign,
  dessertTable,
  bridalBouquet,
  weddingCake,
  floralDetail,
  goldVaseCenterpiece,
  favorsDetail,
  glasswareDetail,
  tablescapePlaceSetting,
  receptionCollage,
};

export const gallery: MediaItem[] = [
  ...allTypesOfWeddingsItems,
  {
    slug: "hero-couple-zaffa-dance",
    src: heroCoupleZaffaDance,
    alt: "A bride and groom dancing beneath a clear tent as a traditional zaffa band with drums surrounds them",
    caption: "The couple mid-celebration as the zaffa band leads the room",
    category: "celebration",
    tradition: "Middle Eastern",
    orientation: "landscape",
  },
  {
    slug: "zaffa-procession",
    src: zaffaProcession,
    alt: "A zaffa procession with drummers leading a bride and groom down a staircase and onto the floor",
    caption: "The zaffa: the grand entrance",
    category: "entertainment",
    tradition: "Middle Eastern",
    orientation: "landscape",
  },
  {
    slug: "tented-waterfront-reception",
    src: tentedWaterfrontReception,
    alt: "Clear-top tented waterfront reception with candlelit tables, chandeliers and gold chairs at dusk",
    caption: "A waterfront reception at blue hour, before the doors open",
    category: "reception",
    tradition: "Western",
    orientation: "landscape",
  },
  {
    slug: "vizcaya-villa-evening",
    src: vizcayaVillaEvening,
    alt: "Historic Vizcaya villa facade lit at night with draped entry, florals and a wide stone staircase",
    caption: "Villa Vizcaya, dressed for the evening",
    category: "reception",
    tradition: "Western",
    orientation: "landscape",
  },
  {
    slug: "ballroom-suspended-florals",
    src: ballroomSuspendedFlorals,
    alt: "A stunning palm-lined wedding aisle with glowing pillar candles under an evening sky",
    caption: "A Stunning Palm Lined Wedding Aisle",
    category: "reception",
    tradition: "Tropical Elegance",
    orientation: "landscape",
  },
  {
    slug: "garden-reception-tall-florals",
    src: gardenReceptionTallFlorals,
    alt: "A joyful bride and groom surrounded by flowers celebrating their wedding ceremony",
    caption: "A Joyful Celebration Surrounded by Flowers",
    category: "reception",
    tradition: "Western",
    orientation: "landscape",
  },
  {
    slug: "candlelit-head-table",
    src: candlelitHeadTable,
    alt: "Outdoor wedding celebration on a white dance floor surrounded by palm trees and guests",
    caption: "Where Every Moment Feels Magical",
    category: "tablescape",
    orientation: "landscape",
  },
  {
    slug: "tented-long-table",
    src: tentedLongTable,
    alt: "Clear tented reception with one long banquet table, candles and low florals",
    caption: "One long table under a clear tent",
    category: "reception",
    tradition: "Multi-day",
    orientation: "landscape",
  },
  {
    slug: "zaffa-band-stage",
    src: zaffaBandStage,
    alt: "Traditional zaffa band performing with drums and horns at a wedding reception",
    caption: "Zaffa Entertainment on the floor",
    category: "entertainment",
    tradition: "Middle Eastern",
    orientation: "landscape",
  },
  {
    slug: "takht-ensemble-musicians",
    src: takhtEnsembleMusicians,
    alt: "Middle Eastern musicians playing kanun and percussion at a wedding celebration",
    caption: "A takht ensemble of live musicians",
    category: "entertainment",
    tradition: "Middle Eastern",
    orientation: "landscape",
  },
  {
    slug: "ballroom-blush-florals",
    src: ballroomBlushFlorals,
    alt: "Hotel ballroom set with round tables, tall blush floral centerpieces and warm uplighting",
    caption: "A ballroom in blush and ivory",
    category: "reception",
    tradition: "Western",
    orientation: "landscape",
  },
  {
    slug: "ballroom-dance-floor",
    src: ballroomDanceFloor,
    alt: "Custom monogram dance floor surrounded by blush florals and candlelit tables",
    caption: "The floor, moments before it fills",
    category: "celebration",
    orientation: "landscape",
  },
  {
    slug: "chandelier-reception",
    src: chandelierReception,
    alt: "Reception room with hanging chandeliers, dramatic lighting and fully set dining tables",
    caption: "Chandeliers and layered light",
    category: "reception",
    orientation: "landscape",
  },
  {
    slug: "tall-centerpiece",
    src: tallCenterpiece,
    alt: "Tall glass centerpiece with white and blush florals above a candlelit table",
    caption: "A tall centerpiece, built to be looked through",
    category: "tablescape",
    orientation: "portrait",
  },
  {
    slug: "tablescape-place-setting",
    src: tablescapePlaceSetting,
    alt: "Elegant wedding tablescape with layered linens, florals and full place settings",
    caption: "The table, finished",
    category: "tablescape",
    orientation: "landscape",
  },
  {
    slug: "place-setting-detail",
    src: placeSettingDetail,
    alt: "Place setting with menu card, gold flatware, charger and glassware",
    caption: "One place setting",
    category: "tablescape",
    orientation: "landscape",
  },
  {
    slug: "gold-vase-centerpiece",
    src: goldVaseCenterpiece,
    alt: "Gold footed vase centerpiece filled with roses on a candlelit table",
    caption: "A gold vessel and low florals",
    category: "tablescape",
    orientation: "landscape",
  },
  {
    slug: "glassware-detail",
    src: glasswareDetail,
    alt: "Crystal glassware and candlelight on a set wedding table",
    caption: "Glassware, catching the light",
    category: "tablescape",
    orientation: "landscape",
  },
  {
    slug: "bridal-bouquet",
    src: bridalBouquet,
    alt: "Full bridal bouquet of ivory and blush garden roses with trailing greenery",
    caption: "A statement bridal bouquet",
    category: "detail",
    orientation: "portrait",
  },
  {
    slug: "florals-and-shoes",
    src: floralsAndShoes,
    alt: "Bridal shoes styled beside a bouquet of soft ivory and blush florals",
    caption: "Bridal details, styled before the day begins",
    category: "detail",
    orientation: "landscape",
  },
  {
    slug: "invitation-suite-rings",
    src: invitationSuiteRings,
    alt: "Wedding invitation suite styled with rings, ribbon and florals",
    caption: "The invitation suite",
    category: "detail",
    orientation: "landscape",
  },
  {
    slug: "invitation-detail",
    src: invitationDetail,
    alt: "Close-up of a gilded wedding invitation with calligraphy",
    caption: "Paper, pressed and gilded",
    category: "detail",
    orientation: "landscape",
  },
  {
    slug: "rings-detail",
    src: ringsDetail,
    alt: "Close-up of wedding rings resting on a textured surface",
    caption: "The rings",
    category: "detail",
    orientation: "landscape",
  },
  {
    slug: "wedding-cake",
    src: weddingCake,
    alt: "Tiered white wedding cake decorated with fresh florals",
    caption: "The cake",
    category: "detail",
    orientation: "portrait",
  },
  {
    slug: "dessert-table",
    src: dessertTable,
    alt: "Styled wedding dessert table with pastries, florals and glass stands",
    caption: "The dessert table",
    category: "detail",
    orientation: "landscape",
  },
  {
    slug: "floral-detail",
    src: floralDetail,
    alt: "Close-up of a wedding floral arrangement in ivory, blush and green",
    caption: "Florals, close",
    category: "detail",
    orientation: "landscape",
  },
  {
    slug: "gift-table",
    src: giftTable,
    alt: "Wedding gift table beside traditional drums before the celebration begins",
    caption: "The gift table and the drums, waiting",
    category: "detail",
    tradition: "Middle Eastern",
    orientation: "landscape",
  },
  {
    slug: "favors-detail",
    src: favorsDetail,
    alt: "Wedding favors arranged in rows on a styled table",
    caption: "Favors, set out by hand",
    category: "detail",
    orientation: "landscape",
  },
  {
    slug: "best-day-ever-sign",
    src: bestDayEverSign,
    alt: "Calligraphy wedding sign reading best day ever beside florals",
    caption: "Signage, kept quiet",
    category: "detail",
    orientation: "landscape",
  },
  {
    slug: "reception-collage",
    src: receptionCollage,
    alt: "Collage of reception details including tables, florals and lighting",
    caption: "A reception, in several frames",
    category: "reception",
    orientation: "landscape",
  },
  {
    slug: "couple-portrait-bw",
    src: couplePortraitBw,
    alt: "Black and white portrait of a bride and groom embracing beside a stone archway",
    caption: "A quiet moment away from the room",
    category: "portrait",
    orientation: "portrait",
  },
];
