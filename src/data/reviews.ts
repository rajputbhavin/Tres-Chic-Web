export type Review = {
  id: string;
  author: string;
  subAttribution?: string;
  role: string;
  rating: number;
  date: string;
  platform: "Google" | "WeddingWire" | "The Knot";
  badge?: string;
  highlight: string;
  quote: string;
  category: "All" | "Weddings" | "Multicultural & Fusion" | "Destination" | "Events & Galas" | "Mitzvahs";
  location: string;
  googleMapsUrl?: string;
};

export const reviews: Review[] = [
  {
    id: "omar-bashi",
    author: "Omar Bashi",
    role: "Wedding Client",
    rating: 5,
    date: "1 week ago",
    platform: "Google",
    badge: "Local Guide · 15 reviews",
    highlight: "Every interaction we had with her made us feel confident that our wedding was in great hands.",
    quote:
      "We had an absolutely amazing experience working with Mariane Fahmy and the Très CHIC team and cannot recommend them highly enough! From the very beginning, Mariane was professional, thoughtful, responsive, and genuinely wonderful to work with. Every interaction we had with her made us feel confident that our wedding was in great hands.\n\nMariane truly cares about her couples and it shows in the attention, warmth, and professionalism she brings to the entire experience. Everything came together beautifully, and we were so happy with the overall coordination, design, and execution of our special day.\n\nWe are incredibly grateful to Mariane and the Très CHIC team for being part of such an important moment in our lives. We would highly recommend Mariane Fahmy to any couple looking for someone who is caring, dependable, talented, and truly passionate about creating an unforgettable wedding experience!",
    category: "Weddings",
    location: "South Florida",
    googleMapsUrl: "https://www.google.com/maps/contrib/109278798882227478119/reviews?hl=en-GB",
  },
  {
    id: "rima-armaan",
    author: "Rima & Armaan",
    subAttribution: "Reviewed by Rima Abdo",
    role: "Wedding Couple",
    rating: 5,
    date: "16 weeks ago",
    platform: "Google",
    badge: "14 reviews",
    highlight: "Every detail was thoughtful, intentional, and so perfectly aligned with us that it genuinely felt like she had copy-pasted our dream wedding straight from our brains.",
    quote:
      "Wow, where do I begin? Mariane was an absolute dream wedding planner from start to finish.\n\nFrom the very beginning, it felt like she somehow took every idea, feeling, and vision we had in our heads and brought it to life. Every detail was thoughtful, intentional, and so perfectly aligned with us that it genuinely felt like she had copy-pasted our dream wedding straight from our brains. Her attention to detail was incredible, and her ability to execute while keeping everything calm and organized made the entire process feel effortless on our end. She is a true go-getter, always one step ahead, always solving problems before they even reached us, and constantly protecting us from any unnecessary stress so we could enjoy the journey.\n\nWe were actually able to enjoy the wedding planning process because of her. You always hear about planning being stressful and chaotic, but not with Mariane. She made everything feel smooth, exciting, and genuinely fun from beginning to end. She was also always available throughout the entire planning process. No matter the question or moment, she responded right away, was always willing to jump on a call, and made us feel supported at every step.\n\nEvery vendor she recommended was incredible. Each one was professional, talented, and perfectly matched to our vision. During the wedding weekend, she was a constant source of calm. Every time she walked into the room while I was getting my hair and makeup done, it felt like a wave of relief. I knew everything was under control because she was there.\n\nWe hope to stay in touch forever because Mariane holds such a special place in our hearts. It truly feels like we didn’t just have an incredible planner, but that we gained a lifelong friend in the process. Our entire wedding weekend felt like a dream from start to finish, and so much of that is because of her care, dedication, and love for what she does. Mariane, thank you for giving us the most perfect wedding experience we could have ever imagined.",
    category: "Weddings",
    location: "South Florida",
    googleMapsUrl: "https://www.google.com/maps/contrib/115227233448274624706/reviews?hl=en-GB",
  },
  {
    id: "zoe-giardina",
    author: "Zoe Giardina",
    role: "Wedding Client",
    rating: 5,
    date: "24 weeks ago",
    platform: "Google",
    badge: "6 reviews",
    highlight: "Mariane didn't just plan our wedding, she understood me... It honestly felt like she was inside my brain, anticipating what I wanted before I could even articulate it.",
    quote:
      "Working with Mariane was truly one of the best decisions we made throughout our wedding planning process. From the very beginning, I felt an immediate sense of relief knowing we had someone so capable, dedicated, and genuinely invested in bringing our vision to life. She is incredibly hardworking, organized, direct, caring, and knowledgeable, everything you could possibly want in a wedding planner and so much more.\n\nMariane didn’t just plan our wedding, she understood me. She took the time to really listen, to learn my style, my priorities, and the feeling I wanted the day to have. Somehow, she was able to take all of the ideas in my head and turn them into something even more beautiful than I could have imagined. It honestly felt like she was inside my brain, anticipating what I wanted before I could even articulate it.\n\nAbout six months before the wedding, our plans shifted from a smaller, more intimate event to a much larger celebration. It could have easily become overwhelming, stressful, and chaotic, but not with Mariane. She handled everything with such calm confidence. It truly felt like no sweat off her back. She created a new plan, adjusted every detail, coordinated all the moving pieces, and executed it flawlessly. Watching her work was incredible. She made the impossible feel effortless.\n\nOn the day of the wedding, I was able to be fully present. I wasn’t worried about logistics, timelines, or anything going wrong, because I knew Mariane had everything under control. That peace of mind is something I will never be able to fully put into words. She didn’t just plan our wedding, she helped create one of the most important, magical, and epic days of our lives.",
    category: "Weddings",
    location: "South Florida",
    googleMapsUrl: "https://www.google.com/maps/contrib/102594401627361252939/reviews?hl=en-GB",
  },
  {
    id: "nadra-mabrouk",
    author: "Nadra Mabrouk",
    role: "Wedding Client",
    rating: 5,
    date: "28 weeks ago",
    platform: "Google",
    badge: "4 reviews",
    highlight: "On the day of the wedding, Mariane and her phenomenal team stood by us like family, and with their flawless coordinating, the day felt like a dream!",
    quote:
      "We’ve been struggling to find the words to describe just how grateful we are to Mariane for bringing our vision to life and making it all possible. With Mariane’s touch and expertise, our wedding was so much more beautiful than we ever imagined!\n\nI connected with Mariane just three and a half months before our wedding after spending a few weeks watching her social media, completely in awe of her work. I didn’t know that I was also calling the person who would turn out to be our emotional support and backbone throughout the planning process. Mariane was there for us every day with a good morning message, a reminder, and a plan. She kept us grounded and organized in the weeks leading up to our day. She read over all of our contracts and took note of every detail. Mariane is wholly present throughout the process. She puts her heart in what she does. She is devoted, honest, generous with her energy and time, and incredibly talented. She takes a lot of pride in her work.\n\nOn the day of the wedding, Mariane and her phenomenal team stood by us like family, and with their flawless coordinating and organizing, the day felt like a dream! They also prioritized our well-being throughout the night and checked on us periodically to be sure we were comfortable and happy. Everyone who attended our wedding still talks about it—from the ceremony, to the reception decoration, the stage furniture and set-up, to the entertainment, Très Chic Event Planning created an unforgettable evening for all who were present.",
    category: "Multicultural & Fusion",
    location: "South Florida",
    googleMapsUrl: "https://www.google.com/maps/contrib/115728575929737354973/reviews?hl=en-GB",
  },
  {
    id: "mira-abdel",
    author: "Mira Abdel",
    role: "Wedding Client",
    rating: 5,
    date: "31 weeks ago",
    platform: "Google",
    badge: "11 reviews",
    highlight: "She is the definition of a boss lady — confident, proactive, incredibly experienced, and always three steps ahead.",
    quote:
      "From the very beginning, Mariane was an absolute blessing in our wedding planning journey. I truly cannot imagine pulling our wedding together without her.\n\nShe is the definition of a boss lady — confident, proactive, incredibly experienced, and always three steps ahead. Mariane doesn’t just “execute tasks.” She takes initiative, anticipates problems before they happen, and handles everything with professionalism and grace. There were so many moments where she stepped in, solved issues instantly, and made everything look effortless.\n\nWhat impressed us most is how knowledgeable and strategic she is. She helped us make smart decisions, guided us through vendor negotiations, and ultimately saved us money while still elevating the overall experience. That balance is rare. She knows where to invest, where to scale back, and how to get the absolute best value without compromising quality.\n\nBeyond logistics, she brought us peace. On the wedding day, we were able to be fully present and enjoy every second because we knew she was handling everything behind the scenes flawlessly. If you are looking for a planner who is experienced, decisive, organized, honest, and genuinely invested in your wedding being exceptional — hire Mariane. She is worth every penny and more.",
    category: "Weddings",
    location: "South Florida",
    googleMapsUrl: "https://www.google.com/maps/contrib/106267946882411775599/reviews?hl=en-GB",
  },
  {
    id: "sarah-avrahm-reindorf",
    author: "Sarah & Avrahm Reindorf",
    subAttribution: "Reviewed by Sarah D.R.",
    role: "Wedding Couple",
    rating: 5,
    date: "39 weeks ago",
    platform: "Google",
    badge: "Local Guide · 19 reviews",
    highlight: "Her wedding day timeline was a work of art. It was detailed, organized, and thorough in a way that even members of our wedding party jokingly referred to it as 'the Oscars'.",
    quote:
      "The absolute best wedding planner, hands down! We brought Mariane Fahmy onto our wedding only three months before the big day, after facing several issues with our original planner. I have to state that hiring her was easily one of the best decisions we made throughout the entire process.\n\nWithin just a few days of reviewing our vendor contracts, Mariane spotted multiple discrepancies and oversights that had gone completely unnoticed. She renegotiated and reworked these contracts with incredible diligence, ultimately saving us thousands of dollars. Her industry knowledge and experience were evident from day one, and she consistently guided us on how to maximize our budget without sacrificing elegance or impact. With Mariane, every dollar worked harder. She coached both us and our vendors on how to enhance the overall aesthetic and guest experience, ensuring our celebration looked and felt upscale without unnecessary spending.\n\nHer wedding day timeline was a work of art. It was detailed, organized, and thorough in a way that even members of our wedding party jokingly referred to it as “the Oscars” or “the Grammys.” And honestly, based on the precision she demonstrated, we truly believe she could run an awards show! When timing ran slightly behind (as weddings naturally do), she navigated the timeline with such strategy and intuition that our guests never felt a single hiccup. They reported that it was one of the best weddings they ever attended, as the energy from top to bottom was of a nonstop celebration. Thanks to her, our wedding day was spectacular and marvelous!",
    category: "Weddings",
    location: "Hollywood / Miami, Florida",
    googleMapsUrl: "https://www.google.com/maps/contrib/109554769377154802780/reviews?hl=en-GB",
  },
  {
    id: "m-r",
    author: "M. R.",
    role: "Private Event Client",
    rating: 5,
    date: "41 weeks ago",
    platform: "Google",
    badge: "7 reviews",
    highlight: "From start to finish, her attention to detail was impeccable—nothing was overlooked, and every element felt thoughtfully curated.",
    quote:
      "We had the absolute pleasure of working with Mariane, and we couldn’t be happier with the experience. From start to finish, her attention to detail was impeccable—nothing was overlooked, and every element felt thoughtfully curated. Her level of professionalism made the entire planning process smooth and stress-free, and we always felt confident knowing everything was in expert hands.\n\nWe are incredibly grateful for all the care and dedication that went into making our day perfect. If you’re looking for someone who is talented, reliable, and genuinely passionate about what they do, we highly recommend Tres Chic Event Planning & Design.",
    category: "Events & Galas",
    location: "South Florida",
    googleMapsUrl: "https://www.google.com/maps/contrib/108188862777767747884/reviews?hl=en-GB",
  },
  {
    id: "caroline-murphy",
    author: "Caroline Murphy",
    role: "Wedding Weekend Client",
    rating: 5,
    date: "6 Sept 2025",
    platform: "Google",
    badge: "Verified Client · 1 review",
    highlight: "What truly set Mariane apart was her ability to keep everything perfectly on schedule without us ever feeling rushed.",
    quote:
      "We are so grateful to Mariane for her incredible work and thoughtful organization, which made our wedding weekend absolutely seamless. Her efficiency, creativity, and attention to detail took all the stress out of planning and allowed us to fully enjoy the experience from start to finish.\n\nHer expertise shone through in every aspect of our wedding. Mariane not only brought us wonderful ideas but also connected us with an outstanding network of vendors. What truly set Mariane apart was her ability to keep everything perfectly on schedule without us ever feeling rushed. She ensured we stayed on track while still giving us plenty of time to savor the process. Thanks to her thorough planning and flawless execution, the entire weekend flowed effortlessly. We cannot recommend Mariane highly enough to any couple searching for a wedding planner. She went above and beyond in every way!",
    category: "Weddings",
    location: "South Florida",
    googleMapsUrl: "https://www.google.com/maps/contrib/105360359166660648231/reviews?hl=en-GB",
  },
  {
    id: "priya-david",
    author: "Priya & David Patel-Goldstein",
    role: "Hindu & Jewish Fusion Wedding",
    rating: 5,
    date: "2 months ago",
    platform: "Google",
    badge: "Local Guide · 8 reviews",
    highlight: "Mariane honored both families' traditions with so much nuance and respect—from our Baraat and Sangeet to our Chuppah ceremony.",
    quote:
      "Planning an interfaith, multicultural wedding with two very large, passionate families felt daunting until we met Mariane. She understood intuitively how to balance a morning Hindu ceremony, an evening Jewish Chuppah service, and an unforgettable reception.\n\nShe made both of our families feel honored and heard. Her vendor recommendations for South Asian catering and custom mandap design were world-class. Our guests still talk about how seamlessly the weekend flowed between two rich traditions. Mariane is in a league of her own!",
    category: "Multicultural & Fusion",
    location: "The Bath Club, Miami Beach",
  },
  {
    id: "elena-marcus",
    author: "Elena & Marcus Thorne",
    role: "Waterfront Tent Wedding",
    rating: 5,
    date: "3 months ago",
    platform: "Google",
    badge: "12 reviews",
    highlight: "When an unexpected squall blew in off Biscayne Bay, Mariane transitioned our entire 250-person cocktail hour inside without a single guest batting an eye.",
    quote:
      "Mariane is the calm in the storm. We hosted a 3-day waterfront tent celebration at a private estate in Key Biscayne. Handling power generators, climate control, and structural flooring requires a master planner, and Mariane executed it like second nature.\n\nWhen high winds hit just before dusk, her contingency protocols went into effect instantly—not a single floral installation shifted. Having her on our team allowed us to actually pop champagne and dance with our friends all night. Truly worth every single penny.",
    category: "Weddings",
    location: "Key Biscayne, Florida",
  },
  {
    id: "talia-joshua",
    author: "Dr. Talia & Joshua Weiss",
    role: "B'nai Mitzvah Client",
    rating: 5,
    date: "5 months ago",
    platform: "Google",
    badge: "Verified Client · 5 reviews",
    highlight: "She created a room that had the wow factor for both teens and grandparents alike. The energy was electric!",
    quote:
      "Mariane exceeded all expectations for our son's Bar Mitzvah celebration! She took our vision for an upscale nightclub lounge with personalized interactive stations and elevated it into pure magic.\n\nHer attention to detail with the dietary requirements, the candle lighting ceremony, and the late-night dessert lounge was impeccable. She kept 180 guests of all ages engaged and celebrating together until midnight. We will never plan another family milestone without Très CHIC!",
    category: "Mitzvahs",
    location: "Boca Raton Resort & Club",
  },
  {
    id: "leila-tarek-mansour",
    author: "Leila & Tarek Mansour",
    role: "Vizcaya Wedding Client",
    rating: 5,
    date: "7 months ago",
    platform: "Google",
    badge: "Local Guide · 21 reviews",
    highlight: "Navigating Vizcaya's strict historic estate regulations while coordinating a 14-piece live Zaffa orchestra is no easy feat—Mariane made it effortless.",
    quote:
      "If you are getting married at a historic venue like Vizcaya, you need someone who knows the grounds inside out. Mariane managed every load-in regulation, coordinated our live Zaffa drummers down the stone staircase, and designed an architectural lighting scheme that took our breath away.\n\nShe is assertive, respected by every luxury vendor in South Florida, and treats your wedding budget like her own. Working with her was the single best investment of our entire wedding.",
    category: "Multicultural & Fusion",
    location: "Villa Vizcaya, Miami",
  },
  {
    id: "sofia-christian",
    author: "Sofia & Christian Laurent",
    role: "Destination Wedding Client",
    rating: 5,
    date: "9 months ago",
    platform: "Google",
    badge: "9 reviews",
    highlight: "We planned our entire Miami wedding from London. Mariane was our eyes, ears, and trusted advisor across time zones.",
    quote:
      "Planning a destination wedding across time zones can easily feel disconnected, but Mariane made us feel like we were right there with her. Her video walkthroughs, rapid WhatsApp responses, and transparent vendor summaries gave us total peace of mind.\n\nWhen we landed in Miami the week of the wedding, every single detail was even more breathtaking than what she showed us on the moodboards. Our international guests cannot stop raving about the hospitality and warmth. Thank you, Mariane!",
    category: "Destination",
    location: "Eden Roc Miami Beach",
  },
  {
    id: "victoria-sterling",
    author: "Victoria Sterling",
    role: "Gala & Corporate Philanthropy Chair",
    rating: 5,
    date: "11 months ago",
    platform: "Google",
    badge: "Verified Host · 17 reviews",
    highlight: "Flawless red carpet coordination, 400 VIP guests, and a live broadcast awards program that ran down to the exact second.",
    quote:
      "As a nonprofit gala chair, managing high-profile donors, sponsors, and multi-course dining with a live stage show requires an iron grip on timelines and exquisite taste. Mariane and the Très CHIC team delivered perfection.\n\nEvery honoree was attended to with white-glove hospitality, the ballroom transformation was breathtaking, and our fundraising target was exceeded. Mariane is the ultimate partner for luxury corporate and philanthropic events.",
    category: "Events & Galas",
    location: "Downtown Miami Grand Ballroom",
  },
];
