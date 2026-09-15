-- ============ media_assets ============
CREATE TABLE public.media_assets (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text NOT NULL UNIQUE,
  file_name text NOT NULL,
  source_url text,
  source_page text,
  category text NOT NULL,
  tradition text,
  caption text,
  alt_text text NOT NULL,
  orientation text,
  width integer,
  height integer,
  display_order integer NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.media_assets TO anon, authenticated;
GRANT ALL ON public.media_assets TO service_role;
ALTER TABLE public.media_assets ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Media assets are publicly readable"
  ON public.media_assets FOR SELECT TO anon, authenticated
  USING (is_published);

-- ============ reviews ============
CREATE TABLE public.reviews (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  excerpt text NOT NULL,
  attribution text NOT NULL,
  wedding_type text,
  platform text,
  display_order integer NOT NULL DEFAULT 0,
  needs_confirmation boolean NOT NULL DEFAULT true,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.reviews TO anon, authenticated;
GRANT ALL ON public.reviews TO service_role;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Reviews are publicly readable"
  ON public.reviews FOR SELECT TO anon, authenticated
  USING (is_published);

-- ============ faqs ============
CREATE TABLE public.faqs (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  question text NOT NULL,
  answer text NOT NULL,
  category text,
  display_order integer NOT NULL DEFAULT 0,
  needs_confirmation boolean NOT NULL DEFAULT false,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.faqs TO anon, authenticated;
GRANT ALL ON public.faqs TO service_role;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "FAQs are publicly readable"
  ON public.faqs FOR SELECT TO anon, authenticated
  USING (is_published);

-- ============ inquiries ============
CREATE TABLE public.inquiries (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  names text NOT NULL,
  email text NOT NULL,
  phone text,
  event_date date,
  date_undecided boolean NOT NULL DEFAULT false,
  celebration_type text,
  support_level text,
  traditions text,
  location text,
  guest_range text,
  notes text,
  referral_source text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.inquiries TO anon, authenticated;
GRANT ALL ON public.inquiries TO service_role;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit an inquiry"
  ON public.inquiries FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- ============ updated_at trigger ============
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_media_assets_updated_at BEFORE UPDATE ON public.media_assets
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_reviews_updated_at BEFORE UPDATE ON public.reviews
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_faqs_updated_at BEFORE UPDATE ON public.faqs
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_inquiries_updated_at BEFORE UPDATE ON public.inquiries
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ============ media inventory (real photography mirrored from treschiceventplanning.com) ============
INSERT INTO public.media_assets (slug, file_name, source_page, category, tradition, caption, alt_text, orientation, display_order) VALUES
('hero-couple-zaffa-dance','hero-couple-zaffa-dance.jpg','/gallery','celebration','Middle Eastern','The couple mid-celebration as the zaffa band leads the room','A bride and groom dancing beneath a clear tent as a traditional zaffa band with drums surrounds them','landscape',1),
('couple-portrait-bw','couple-portrait-bw.jpg','/gallery','portrait',NULL,'A quiet moment away from the room','Black and white portrait of a bride and groom embracing beside a stone archway','portrait',2),
('tented-waterfront-reception','tented-waterfront-reception.jpg','/gallery','reception','Western','A waterfront reception at blue hour, before the doors open','Clear-top tented waterfront reception with candlelit tables, chandeliers and gold chairs at dusk','landscape',3),
('vizcaya-villa-evening','vizcaya-villa-evening.jpg','/gallery','venue','Western','Villa Vizcaya, dressed for the evening','Historic Vizcaya villa facade lit at night with draped entry, florals and a wide stone staircase','landscape',4),
('ballroom-suspended-florals','ballroom-suspended-florals.jpg','/gallery','reception','Interfaith & Fusion','A suspended floral installation over the head table','Ballroom with suspended white and greenery floral installation above a head table, guests seated in violet light','landscape',5),
('garden-reception-tall-florals','garden-reception-tall-florals.jpg','/gallery','reception','Western','Garden dining under the trees','Outdoor garden reception with tall blush and ivory floral centerpieces and ghost chairs','landscape',6),
('candlelit-head-table','candlelit-head-table.jpg','/gallery','tablescape',NULL,'Candlelight down the length of the table','Long head table covered in candlelight, blush roses, gold flatware and glassware','landscape',7),
('zaffa-procession','zaffa-procession.jpg','/gallery','ceremony','Middle Eastern','The zaffa: the grand entrance','Collage of a zaffa procession with drummers leading a bride and groom down a staircase and onto the floor','landscape',8),
('zaffa-band-stage','zaffa-band-stage.jpg','/gallery','entertainment','Middle Eastern','Zaffa Entertainment on the floor','Traditional zaffa band performing with drums and horns at a wedding reception','landscape',9),
('takht-ensemble-musicians','takht-ensemble-musicians.jpg','/gallery','entertainment','Middle Eastern','A takht ensemble of live musicians','Middle Eastern musicians playing kanun and percussion at a wedding celebration','landscape',10),
('tented-long-table','tented-long-table.jpg','/gallery','reception','Multi-day','One long table under a clear tent','Clear tented reception with one long banquet table, candles and low florals','landscape',11),
('ballroom-blush-florals','ballroom-blush-florals.jpg','/gallery','reception','Western','A ballroom in blush and ivory','Hotel ballroom set with round tables, tall blush floral centerpieces and warm uplighting','landscape',12),
('ballroom-dance-floor','ballroom-dance-floor.jpg','/gallery','celebration',NULL,'The floor, moments before it fills','Custom monogram dance floor surrounded by blush florals and candlelit tables','landscape',13),
('chandelier-reception','chandelier-reception.jpg','/gallery','reception',NULL,'Chandeliers and layered light','Reception room with hanging chandeliers, dramatic lighting and fully set dining tables','landscape',14),
('tall-centerpiece','tall-centerpiece.jpg','/gallery','tablescape',NULL,'A tall centerpiece, built to be looked through','Tall glass centerpiece with white and blush florals above a candlelit table','portrait',15),
('florals-and-shoes','florals-and-shoes.jpg','/gallery','detail',NULL,'Bridal details, styled and photographed before the day begins','Bridal shoes styled beside a bouquet of soft ivory and blush florals','landscape',16),
('invitation-suite-rings','invitation-suite-rings.jpg','/gallery','detail',NULL,'The invitation suite','Wedding invitation suite styled with rings, ribbon and florals','landscape',17),
('rings-detail','rings-detail.jpg','/gallery','detail',NULL,'The rings','Close-up of wedding rings resting on a textured surface','landscape',18),
('invitation-detail','invitation-detail.jpg','/gallery','detail',NULL,'Paper, pressed and gilded','Close-up of a gilded wedding invitation with calligraphy','landscape',19),
('gift-table','gift-table.jpg','/gallery','detail','Middle Eastern','The gift table and the drums, waiting','Wedding gift table beside traditional drums before the celebration begins','landscape',20),
('place-setting-detail','place-setting-detail.jpg','/gallery','tablescape',NULL,'One place setting','Place setting with menu card, gold flatware, charger and glassware','landscape',21),
('best-day-ever-sign','best-day-ever-sign.jpg','/gallery','detail',NULL,'Signage, kept quiet','Calligraphy wedding sign reading best day ever beside florals','landscape',22),
('dessert-table','dessert-table.jpg','/gallery','detail',NULL,'The dessert table','Styled wedding dessert table with pastries, florals and glass stands','landscape',23),
('bridal-bouquet','bridal-bouquet.jpg','/gallery','detail',NULL,'A statement bridal bouquet','Full bridal bouquet of ivory and blush garden roses with trailing greenery','portrait',24),
('wedding-cake','wedding-cake.jpg','/gallery','detail',NULL,'The cake','Tiered white wedding cake decorated with fresh florals','portrait',25),
('floral-detail','floral-detail.jpg','/gallery','detail',NULL,'Florals, close','Close-up of a wedding floral arrangement in ivory, blush and green','landscape',26),
('gold-vase-centerpiece','gold-vase-centerpiece.jpg','/gallery','tablescape',NULL,'A gold vessel and low florals','Gold footed vase centerpiece filled with roses on a candlelit table','landscape',27),
('favors-detail','favors-detail.jpg','/gallery','detail',NULL,'Favors, set out by hand','Wedding favors arranged in rows on a styled table','landscape',28),
('glassware-detail','glassware-detail.jpg','/gallery','tablescape',NULL,'Glassware, catching the light','Crystal glassware and candlelight on a set wedding table','landscape',29),
('tablescape-place-setting','tablescape-place-setting.jpg','/gallery','tablescape',NULL,'The table, finished','Elegant wedding tablescape with layered linens, florals and full place settings','landscape',30),
('reception-collage','reception-collage.jpg','/gallery','reception',NULL,'A reception, in several frames','Collage of reception details including tables, florals and lighting','landscape',31);

-- ============ reviews (paraphrased excerpts — pending Mariane's confirmation) ============
INSERT INTO public.reviews (excerpt, attribution, wedding_type, platform, display_order, needs_confirmation) VALUES
('Within days of reviewing our vendor contracts, Mariane caught discrepancies no one else had noticed — and renegotiated them, saving us real money without cutting a single corner.','A Hollywood, Florida couple','Wedding','WeddingWire',1,true),
('Our venue cancelled at the start of a four-day wedding weekend. We only found out after Mariane had already secured a new one, moved every vendor and rerouted our guests. We never had to solve it.','A four-day wedding weekend','Multi-day wedding','WeddingWire',2,true),
('They described it themselves as a big fat Indian-Italian wedding — a Hindu ceremony, a Catholic ceremony, a reception and an after-party, with guests flying in from everywhere. Mariane held all of it together.','An Indian-Italian celebration','Interfaith & fusion wedding','The Knot',3,true),
('The thing we did not expect was how calm the day felt. We were not managing anything. We were just there, with our families, in it.','A South Florida couple','Wedding','Google',4,true);

-- ============ faqs ============
INSERT INTO public.faqs (question, answer, category, display_order, needs_confirmation) VALUES
('Do you only plan weddings in South Florida?','No. South Florida — Miami, Fort Lauderdale, Coral Gables, Boca Raton and the surrounding area — is home base, but Très CHIC also plans destination weddings elsewhere and works with couples who live outside Florida and are marrying here.','Service area',1,false),
('Do you specialize in a specific culture, or many?','Très CHIC has particular experience with South Asian (Hindu, Sikh and Muslim), Jewish, Middle Eastern, interfaith, Western and fusion celebrations — including multi-day, multi-ceremony weddings that bring more than one culture or family tradition together in a single celebration.','Cultural expertise',2,false),
('What is the difference between full planning, partial planning and coordination?','Full planning means Mariane leads every decision from the first conversation through the wedding day. Partial planning starts with the decisions you have already made and carries them the rest of the way. Coordination — sometimes called month-of — takes over execution in the final weeks so your existing plan runs smoothly on the day.','Services',3,false),
('How far in advance should we book?','Mariane to provide current, honest guidance here before publishing.','Booking',4,true),
('Do you offer day-of or month-of coordination only?','Yes. Coordination is available for couples who have planned their own wedding and want an experienced team managing execution on the day itself.','Services',5,false),
('What happens if something goes wrong on the wedding day?','Handling the unexpected is part of the job. On one four-day wedding, a venue cancelled on the first day — a replacement was secured, vendors were re-coordinated and guests were rerouted within four hours, before the couple was even told there was a problem.','Execution',6,false),
('Do you help with vendor selection, or only design?','Vendor sourcing, contract review and budget management are core parts of full and partial planning — not an add-on.','Services',7,false),
('Do you plan events other than weddings?','Yes — engagement parties, bridal and baby showers, milestone birthdays, Bar and Bat Mitzvahs, vow renewals and other meaningful celebrations.','Services',8,false),
('What is Zaffa Entertainment?','Zaffa Entertainment is Très CHIC''s in-house connection to traditional Middle Eastern wedding entertainment — including grand-entrance zaffa bands, takht ensembles, Arabic and English DJs, and live musicians — available as part of a full planning engagement or as a standalone booking.','Zaffa Entertainment',9,false);