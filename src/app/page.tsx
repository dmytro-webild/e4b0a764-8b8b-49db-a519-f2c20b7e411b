"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { Zap, Coffee, Gift, Truck } from "lucide-react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
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
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Products", id: "products" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Cadoro"
      button={{ text: "Order Now", href: "#products" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{ variant: "radial-gradient" }}
      title="Azerbaijan’s 1st Gelateria"
      description="Indulge in our exquisite selection of Belgian and Italian chocolates and artisanal gelato. Crafted for true connoisseurs of sweet perfection."
      buttons={[{ text: "View Our Menu", href: "#products" }]}
      imageSrc="http://img.b2bpic.net/free-photo/fruit-with-cakes-side-view_141793-4438.jpg?_wi=1"
      mediaAnimation="slide-up"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/friends-having-dinner-restaurant_23-2148018734.jpg", alt: "Friends having dinner at a restaurant" },
        { src: "http://img.b2bpic.net/free-photo/crop-shot-cheese-cake_1301-642.jpg", alt: "Crop shot cheese cake" },
        { src: "http://img.b2bpic.net/free-photo/cup-tea-with-ny-cheesecake-with-berry-sauce_114579-2316.jpg", alt: "A cup of tea with NY cheesecake with berry sauce" },
        { src: "http://img.b2bpic.net/free-photo/sugar-powder-is-sprinkled-chocolate-pudding-glasses_140725-5079.jpg", alt: "Sugar powder is sprinkled over chocolate pudding glasses" },
        { src: "http://img.b2bpic.net/free-photo/cream-pastry-bag-lady-with-baking-tool_1157-47274.jpg", alt: "Cream in a pastry bag. Lady with a baking tool." }
      ]}
      marqueeItems={[
        { type: "text", text: "Premium Belgian Chocolate" },
        { type: "text", text: "Handcrafted Gelato" },
        { type: "text", text: "Fresh Daily" },
        { type: "text", text: "Authentic Recipes" },
        { type: "text", text: "Baku's Finest" }
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="The Cadoro Standard"
      description="We bring the finest traditions of Belgian chocolate making and Italian gelato crafting to the heart of Baku. Every piece of chocolate and scoop of gelato is a celebration of quality ingredients."
      bulletPoints={[
        { title: "Premium Ingredients", description: "Sourced from the best farms in Belgium and Italy." },
        { title: "Artisanal Craftsmanship", description: "Handmade with care and attention to detail." },
        { title: "Unmatched Quality", description: "Every creation reflects our commitment to excellence." }
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
        { title: "Artisanal Sweets", description: "Authentic recipes redefined for modern palates.", buttonIcon: Zap, imageSrc: "http://img.b2bpic.net/free-photo/woman-puts-cinnabon-plate-family-party_169016-45009.jpg" },
        { title: "Fresh Daily", description: "Gelato churned fresh every morning.", buttonIcon: Coffee, imageSrc: "http://img.b2bpic.net/free-photo/fruit-with-cakes-side-view_141793-4438.jpg?_wi=2" },
        { title: "Luxury Gifting", description: "Elegant packaging for any special occasion.", buttonIcon: Gift, imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-woman-applying-cream-baked-cookies-baking-tray_23-2148027925.jpg?_wi=2" },
        { title: "Delivery in Baku", description: "Enjoy Cadoro from the comfort of your home.", buttonIcon: Truck, imageSrc: "http://img.b2bpic.net/free-photo/hand-dark-glove-is-holding-waffle-cone-with-delicious-creamy-ice-cream-background-lemon-sorbet-decorated-with-mint-waffle-cones-which-are-served-stone-slate-black-bac_639032-538.jpg?_wi=1" },
      ]}
      title="Why Choose Cadoro"
      description="Discover what makes our collection unique."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "1", brand: "Cadoro", name: "Belgian Chocolate Truffle", price: "9.80 AZN", rating: 5, reviewCount: "120", imageSrc: "http://img.b2bpic.net/free-photo/hand-dark-glove-is-holding-waffle-cone-with-delicious-creamy-ice-cream-background-lemon-sorbet-decorated-with-mint-waffle-cones-which-are-served-stone-slate-black-bac_639032-538.jpg?_wi=2" },
        { id: "2", brand: "Cadoro", name: "Artisan Gelato Scoop", price: "4.90 AZN", rating: 5, reviewCount: "95", imageSrc: "http://img.b2bpic.net/free-photo/leaves-kernels-around-present_23-2147886041.jpg" },
        { id: "3", brand: "Cadoro", name: "Chocolate Lampone", price: "12.50 AZN", rating: 5, reviewCount: "80", imageSrc: "http://img.b2bpic.net/free-photo/delectable-wafer-rolls-chocolate-coated-wafer-wooden-plate-marble_114579-84025.jpg" },
        { id: "4", brand: "Cadoro", name: "Gelato Truffle", price: "15.00 AZN", rating: 4, reviewCount: "45", imageSrc: "http://img.b2bpic.net/free-photo/indulgent-chocolate-truffles-wrapped-ornate-paper-generated-by-ai_188544-17978.jpg" },
        { id: "5", brand: "Cadoro", name: "Premium Hot Chocolate", price: "7.50 AZN", rating: 5, reviewCount: "200", imageSrc: "http://img.b2bpic.net/free-photo/close-up-shot-stone-slate-tray-served-with-tasty-creamy-orange-ice-cream-set-decorated-with-mint-waffle-cones-dark-table-black-background-metal-scoop-is-laying-nearby-sum_639032-560.jpg" },
        { id: "6", brand: "Cadoro", name: "Sweet Selection Box", price: "55.00 AZN", rating: 5, reviewCount: "65", imageSrc: "http://img.b2bpic.net/free-photo/cupcake-still-life_23-2148097701.jpg" }
      ]}
      title="Our Signature Menu"
      description="From rich chocolate bars to creamy gelato, explore our curated selection."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "Leyla M.", handle: "@leyla_foodie", testimonial: "The best gelato I have ever tasted in Baku. Simply divine!", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-dark-long-hair-smiling-coffee-shop_273609-2807.jpg" },
        { id: "2", name: "Elvin K.", handle: "@elvin_k", testimonial: "Fantastic Belgian chocolates. Perfect for gifting.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-woman-blue-wall-celebrates-birthday-holds-piece-cake-happy-bites-cake_343596-7527.jpg" },
        { id: "3", name: "Aydan S.", handle: "@aydan_sweet", testimonial: "Amazing variety and the quality is absolutely top-notch.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/photo-cheerful-young-woman-straw-summer-hat-white-blouse-eats-delicious-cake-restaurant-being-satisfied-with-good-service-has-pleasant-conversation-with-someone-laughs-joyfully_273609-2449.jpg" },
        { id: "4", name: "Rashad H.", handle: "@rashad_h", testimonial: "A must-visit for any dessert lover. Highly recommend!", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/curly-haired-beautiful-woman-bites-lips-looks-appetizing-piece-cake-with-raspberries-has-sweet-tooth-feels-temptation-eat-delicious-dessert-isolated-blue-background-sugar-addiction_273609-61590.jpg" },
        { id: "5", name: "Nigar A.", handle: "@nigar_dessert", testimonial: "Everything I tried was delicious. Will definitely be back.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-woman-eating-delicious-tiramisu-cafe_1303-25270.jpg" }
      ]}
      showRating={true}
      title="Loved by Baku"
      description="What our customers are saying."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "Do you deliver?", content: "Yes, we offer delivery via Wolt throughout Baku, covering central neighborhoods like Sabail, Nasimi, and Yasamal with an estimated delivery time of 30-45 minutes." },
        { id: "q2", title: "Are your chocolates Belgian?", content: "We use the finest Belgian chocolate for all our dark and milk collections." },
        { id: "q3", title: "Can I visit the shop?", content: "Yes, we look forward to welcoming you to Cadoro for the full experience." },
      ]}
      title="Common Questions"
      description="Everything you need to know about our sweets and service."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{ variant: "plain" }}
      tag="Newsletter"
      title="Stay Updated"
      description="Sign up for our newsletter to get news on new gelato flavors and exclusive chocolate collections."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Navigation",          items: [
            { label: "Menu", href: "#products" },
            { label: "About Us", href: "#about" },
            { label: "Contact", href: "#contact" }
          ],
        },
        {
          title: "Social",          items: [
            { label: "Instagram", href: "https://www.instagram.com/cadoro.shop/" },
            { label: "Wolt", href: "https://wolt.com/en/aze/baku/venue/cadoro" }
          ],
        },
      ]}
      bottomLeftText="© 2026 Cadoro Shop. All rights reserved."
      bottomRightText="Crafted with love."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
