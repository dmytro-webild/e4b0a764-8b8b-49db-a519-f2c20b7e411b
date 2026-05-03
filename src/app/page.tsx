"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { Zap, Coffee, Gift, Truck } from "lucide-react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="small"
        sizing="largeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav" className="pt-8">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Ana Səhifə", id: "hero" },
        { name: "Haqqımızda", id: "about" },
        { name: "Məhsullar", id: "products" },
        { name: "Əlaqə", id: "contact" },
      ]}
      brandName="Cadoro"
      button={{ text: "İndi Sifariş Et", href: "https://wolt.com/en/aze/baku/venue/cadoro?srsltid=AfmBOorQuEQSN0ndSk1NAU8lsQbLY3YRhqG0Z6hUznpl4lKOfJwMO03E" }}
    />
  </div>

  <div id="hero" data-section="hero" className="pt-12">
      <HeroBillboardCarousel
      background={{ variant: "radial-gradient" }}
      title="Azərbaycanın 1-ci Gelateria-sı"
      description="Nadir Belçika və İtalyan şokoladları, həmçinin əl istehsalı dondurmalarımızla dad dünyasını kəşf edin. Şirin mükəmməlliyi sevənlər üçün xüsusi hazırlanıb."
      buttons={[{ text: "Menyumuz", href: "#products" }]}
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/fruit-with-cakes-side-view_141793-4438.jpg?_wi=1", imageAlt: "Premium cakes and fruits" },
        { imageSrc: "http://img.b2bpic.net/free-photo/hand-dark-glove-is-holding-waffle-cone-with-delicious-creamy-ice-cream-background-lemon-sorbet-decorated-with-mint-waffle-cones-which-are-served-stone-slate-black-bac_639032-538.jpg?_wi=1", imageAlt: "Artisanal Gelato" },
        { imageSrc: "http://img.b2bpic.net/free-photo/indulgent-chocolate-truffles-wrapped-ornate-paper-generated-by-ai_188544-17978.jpg?_wi=1", imageAlt: "Belgian Chocolate Selection" }
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Cadoro Standartı"
      description="Biz Belçika şokolad ustalıq ənənələrini və İtalyan dondurma sənətini Bakının mərkəzinə gətiririk. Hər bir şokolad və dondurma topu keyfiyyətli inqrediyentlərin bayramıdır."
      bulletPoints={[
        { title: "Premium İnqrediyentlər", description: "Belçika və İtaliyanın ən yaxşı təsərrüfatlarından gətirilir." },
        { title: "Əl İstehsalı", description: "Qayğı və diqqətlə əllə hazırlanır." },
        { title: "Yüksək Keyfiyyət", description: "Hər bir yaradıcılığımız mükəmməlliyə olan öhdəliyimizi əks etdirir." }
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/smiling-young-woman-applying-cream-baked-cookies-baking-tray_23-2148027925.jpg?_wi=1"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        { title: "Şirniyyat Sənəti", description: "Müasir dadlar üçün yenidən şərh edilmiş orijinal reseptlər.", buttonIcon: Zap, imageSrc: "http://img.b2bpic.net/free-photo/woman-puts-cinnabon-plate-family-party_169016-45009.jpg" },
        { title: "Hər Gün Təzə", description: "Dondurmalarımız hər səhər təzə hazırlanır.", buttonIcon: Coffee, imageSrc: "http://img.b2bpic.net/free-photo/fruit-with-cakes-side-view_141793-4438.jpg?_wi=2" },
        { title: "Lüks Hədiyyələr", description: "Hər fürsət üçün zərif qablaşdırma.", buttonIcon: Gift, imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-woman-applying-cream-baked-cookies-baking-tray_23-2148027925.jpg?_wi=2" },
        { title: "Bakıda Çatdırılma", description: "Evinizin rahatlığında Cadoro-nun dadını çıxarın.", buttonIcon: Truck, imageSrc: "http://img.b2bpic.net/free-photo/hand-dark-glove-is-holding-waffle-cone-with-delicious-creamy-ice-cream-background-lemon-sorbet-decorated-with-mint-waffle-cones-which-are-served-stone-slate-black-bac_639032-538.jpg?_wi=1" },
      ]}
      title="Niyə Cadoro?"
      description="Kolleksiyamızı unikal edən nədir kəşf edin."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "1", brand: "Cadoro", name: "Belçika Şokoladlı Truff", price: "9.80 AZN", rating: 5, reviewCount: "120", imageSrc: "http://img.b2bpic.net/free-photo/hand-dark-glove-is-holding-waffle-cone-with-delicious-creamy-ice-cream-background-lemon-sorbet-decorated-with-mint-waffle-cones-which-are-served-stone-slate-black-bac_639032-538.jpg?_wi=2" },
        { id: "2", brand: "Cadoro", name: "Əl İstehsalı Dondurma", price: "4.90 AZN", rating: 5, reviewCount: "95", imageSrc: "http://img.b2bpic.net/free-photo/leaves-kernels-around-present_23-2147886041.jpg" },
        { id: "3", brand: "Cadoro", name: "Şokoladlı Lampone", price: "12.50 AZN", rating: 5, reviewCount: "80", imageSrc: "http://img.b2bpic.net/free-photo/delectable-wafer-rolls-chocolate-coated-wafer-wooden-plate-marble_114579-84025.jpg" },
        { id: "4", brand: "Cadoro", name: "Dondurmalı Truff", price: "15.00 AZN", rating: 4, reviewCount: "45", imageSrc: "http://img.b2bpic.net/free-photo/indulgent-chocolate-truffles-wrapped-ornate-paper-generated-by-ai_188544-17978.jpg?_wi=2" },
        { id: "5", brand: "Cadoro", name: "Premium İsti Şokolad", price: "7.50 AZN", rating: 5, reviewCount: "200", imageSrc: "http://img.b2bpic.net/free-photo/close-up-shot-stone-slate-tray-served-with-tasty-creamy-orange-ice-cream-set-decorated-with-mint-waffle-cones-dark-table-black-background-metal-scoop-is-laying-nearby-sum_639032-560.jpg" },
        { id: "6", brand: "Cadoro", name: "Şirniyyat Seçimləri", price: "55.00 AZN", rating: 5, reviewCount: "65", imageSrc: "http://img.b2bpic.net/free-photo/cupcake-still-life_23-2148097701.jpg" }
      ]}
      title="İmza Menyumuz"
      description="Zəngin şokoladlardan dondurmalara qədər, kolleksiyamızı araşdırın."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "Leyla M.", handle: "@leyla_foodie", testimonial: "Bakıda yediyim ən yaxşı dondurma. Sadəcə ilahi!", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-dark-long-hair-smiling-coffee-shop_273609-2807.jpg" },
        { id: "2", name: "Elvin K.", handle: "@elvin_k", testimonial: "Fantastik Belçika şokoladları. Hədiyyə üçün idealdır.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-woman-blue-wall-celebrates-birthday-holds-piece-cake-happy-bites-cake_343596-7527.jpg" },
        { id: "3", name: "Aydan S.", handle: "@aydan_sweet", testimonial: "İnanılmaz müxtəliflik və keyfiyyət ən üst səviyyədədir.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/photo-cheerful-young-woman-straw-summer-hat-white-blouse-eats-delicious-cake-restaurant-being-satisfied-with-good-service-has-pleasant-conversation-with-someone-laughs-joyfully_273609-2449.jpg" },
        { id: "4", name: "Rashad H.", handle: "@rashad_h", testimonial: "Şirniyyat sevənlər üçün mütləq ziyarət edilməli yer. Tövsiyə edirəm!", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/curly-haired-beautiful-woman-bites-lips-looks-appetizing-piece-cake-with-raspberries-has-sweet-tooth-feels-temptation-eat-delicious-dessert-isolated-blue-background-sugar-addiction_273609-61590.jpg" },
        { id: "5", name: "Nigar A.", handle: "@nigar_dessert", testimonial: "Dadına baxdığım hər şey çox dadlı idi. Mütləq yenidən gələcəyəm.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-woman-eating-delicious-tiramisu-cafe_1303-25270.jpg" }
      ]}
      showRating={true}
      title="Bakı Cadoro-nu Sevir"
      description="Müştərilərimizin bizə dedikləri."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "Çatdırılmanız var?", content: "Bəli, biz Wolt vasitəsilə Bakının Səbail, Nəsimi və Yasamal kimi mərkəzi rayonlarına 30-45 dəqiqə ərzində çatdırılma edirik." },
        { id: "q2", title: "Şokoladlarınız Belçikadır?", content: "Bütün tünd və süd kolleksiyalarımızda ən yaxşı Belçika şokoladından istifadə edirik." },
        { id: "q3", title: "Mağazaya gələ bilərəm?", content: "Bəli, tam təcrübə üçün sizi Cadoro-ya gözləyirik." },
      ]}
      title="Ümumi Suallar"
      description="Şirniyyatlarımız və xidmətimiz haqqında bilməli olduğunuz hər şey."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Naviqasiya",          items: [
            { label: "Menyu", href: "#products" },
            { label: "Haqqımızda", href: "#about" },
            { label: "Əlaqə", href: "#contact" }
          ],
        },
        {
          title: "Sosial",          items: [
            { label: "Instagram", href: "https://www.instagram.com/cadoro.shop/" },
            { label: "Wolt", href: "https://wolt.com/en/aze/baku/venue/cadoro" }
          ],
        },
      ]}
      bottomLeftText="© 2026 Cadoro Shop. Bütün hüquqlar qorunur."
      bottomRightText="Sevgi ilə hazırlanmışdır."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
