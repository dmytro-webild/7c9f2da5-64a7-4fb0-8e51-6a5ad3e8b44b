"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterMedia from '@/components/sections/footer/FooterMedia';

import { Public_Sans } from "next/font/google";
import { Inter } from "next/font/google";

const publicSans = Public_Sans({
  variable: "--font-public-sans",  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",  subsets: ["latin"],
});

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="mediumLarge"
      background="blurBottom"
      cardStyle="soft-shadow"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav" className={`${publicSans.variable} ${inter.variable}`}>
        <NavbarStyleApple
          brandName="MICHODAN"
          navItems={[
            { "name": "Home", "id": "#home" },
            { "name": "About", "id": "#about" },
            { "name": "Oriflame", "id": "#oriflame-products" },
            { "name": "Ankara", "id": "#ankara-fabrics" },
            { "name": "Testimonials", "id": "#testimonials" },
            { "name": "FAQ", "id": "#faq" },
            { "name": "Contact", "id": "#contact" }
          ]}
        />
      </div>
      <div id="home" data-section="home" className={`${publicSans.variable} ${inter.variable}`}>
        <HeroSplit
          title="Experience Beauty & Culture with MICHODAN"
          description="Discover premium Oriflame products for radiant beauty and exquisite Ankara fabrics to express your unique style. MICHODAN brings quality and tradition together."
          background={{"variant":"plain"}}
          buttons={[
            { "text": "Shop Oriflame", "href": "#oriflame-products" },
            { "text": "Explore Ankara", "href": "#ankara-fabrics" }
          ]}
          imageSrc="https://img.b2bpic.net/premium-photo/african-american-female-fashion-model-wearing-traditional-african-attire-confidently-posing_1281490-8020.jpg?id=367433186"
          imageAlt="Woman with Oriflame beauty products and vibrant Ankara fabric, representing MICHODAN's offerings"
          mediaAnimation="slide-up"
          ariaLabel="Hero section"
          imagePosition="right"
          fixedMediaHeight={true}
        />
      </div>
      <div id="about" data-section="about" className={`${publicSans.variable} ${inter.variable}`}>
        <TextSplitAbout
          title="About MICHODAN: Your Partner in Beauty & Style"
          description={["MICHODAN is passionate about empowering individuals through high-quality products that enhance natural beauty and celebrate rich cultural heritage. We meticulously select the finest Oriflame cosmetics and authentic Ankara fabrics, ensuring every item reflects excellence.","Our mission is to provide you with products that not only meet your needs but also inspire confidence and self-expression. We believe in beauty that goes beyond the surface, and style that tells a story."]}
          useInvertedBackground={true}
          ariaLabel="About section"
        />
      </div>
      <div id="oriflame-benefits" data-section="oriflame-benefits" className={`${publicSans.variable} ${inter.variable}`}>
        <FeatureCardNineteen
          features={[
            { "tag": "Quality", "title": "Pure & Potent Ingredients", "subtitle": "Formulated for Efficacy", "description": "Oriflame products are crafted with nature-inspired ingredients, backed by science to deliver visible results. Experience the difference of quality formulations for your skin and overall well-being.", "imageSrc": "http://img.b2bpic.net/free-photo/beautiful-eucalyptus-with-beauty-products_23-2149440673.jpg", "imageAlt": "Close-up of natural skincare ingredients" },
            { "tag": "Radiance", "title": "Unlock Your Natural Glow", "subtitle": "Confidence in Every Drop", "description": "Our range helps you achieve a healthy, radiant complexion. From nourishing skincare to enhancing makeup, Oriflame empowers you to feel confident and beautiful, every single day.", "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EV7r8jH6qVm4I9M2ve5zaDdSj6/uploaded-1780254501684-4y7nghbz.jpg", "imageAlt": "Woman with radiant skin" },
            { "tag": "Variety", "title": "Diverse Product Portfolio", "subtitle": "Beauty for Every Need", "description": "Explore a comprehensive selection of skincare, makeup, fragrances, and wellness products. Whether you seek anti-aging solutions or vibrant cosmetics, MICHODAN has your Oriflame needs covered.", "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EV7r8jH6qVm4I9M2ve5zaDdSj6/uploaded-1780254851720-9f9c1q3b.png", "imageAlt": "Variety of Oriflame beauty products" }
          ]}
          title="Discover the Oriflame Difference"
          description="Elevate your beauty routine with products designed for optimal results and an ethical approach."
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Oriflame product features"
        />
      </div>
      <div id="oriflame-products" data-section="oriflame-products" className={`${publicSans.variable} ${inter.variable}`}>
        <ProductCardThree
          products={[
            { "id": "oriflame-1", "name": "GIORDANI GOLD ESSENZA ", "price": "₦18.00", "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EV7r8jH6qVm4I9M2ve5zaDdSj6/uploaded-1780254338556-lbackchy.jpg", "imageAlt": "Vibrant red Oriflame lipstick" },
            { "id": "oriflame-2", "name": "NovAge Supreme Cleansing Gel", "price": "₦25.00", "imageSrc": "http://img.b2bpic.net/free-photo/liquid-facial-skin-care-product-white-background-isolated_169016-26906.jpg", "imageAlt": "Oriflame NovAge cleansing gel" },
            { "id": "oriflame-3", "name": "Giordani Gold Essenza Parfum", "price": "₦60.00", "imageSrc": "http://img.b2bpic.net/free-photo/front-view-rectangular-cologne-bottle-branch-rotten-wood-beige-background_140725-145548.jpg", "imageAlt": "Elegant Oriflame Giordani Gold perfume bottle" },
            { "id": "oriflame-4", "name": "OnColour Mono Eye Shadow", "price": "₦12.00", "imageSrc": "http://img.b2bpic.net/free-photo/flat-lay-frame-with-make-up-brushes-pink-background_23-2148301843.jpg", "imageAlt": "Colorful Oriflame OnColour eyeshadow palette" },
            { "id": "oriflame-5", "name": "EverLasting Sync Foundation", "price": "₦30.00", "imageSrc": "http://img.b2bpic.net/free-photo/foundation-product-branding-still-life_23-2149665122.jpg", "imageAlt": "Oriflame EverLasting Sync foundation" },
            { "id": "oriflame-6", "name": "Love Nature Body Lotion", "price": "₦15.00", "imageSrc": "http://img.b2bpic.net/free-photo/close-up-photo-fragrance-bottle-with-flowers_114579-51645.jpg", "imageAlt": "Oriflame Love Nature body lotion" }
          ]}
          gridVariant="bento-grid"
          animationType="slide-up"
          title="Our Curated Oriflame Collection"
          description="Explore the best of Oriflame, from luxurious fragrances to essential skincare."
          textboxLayout="default"
          useInvertedBackground={true}
          ariaLabel="Oriflame products showcase"
        />
      </div>
      <div id="ankara-highlights" data-section="ankara-highlights" className={`${publicSans.variable} ${inter.variable}`}>
        <FeatureCardNineteen
          features={[
            { "tag": "Heritage", "title": "Authentic African Prints", "subtitle": "Celebrating Cultural Richness", "description": "Our Ankara fabrics are sourced for their authentic designs and vibrant patterns, each telling a unique story of African heritage and artistry. Embrace a piece of tradition with MICHODAN.", "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EV7r8jH6qVm4I9M2ve5zaDdSj6/uploaded-1780310534372-hwjaichg.jpg", "imageAlt": "Close-up of vibrant Ankara fabric patterns" },
            { "tag": "Style", "title": "Bold & Expressive Fashion", "subtitle": "Make a Statement", "description": "Ankara is renowned for its expressive beauty, allowing you to create stunning garments that stand out. Design unique outfits that reflect your personality and style with our premium fabrics.", "imageSrc": "http://img.b2bpic.net/free-photo/woman-posing-arid-environment-while-wearing-native-african-clothing_23-2150609680.jpg", "imageAlt": "Stylish woman wearing an elegant Ankara dress" },
            { "tag": "Craftsmanship", "title": "Quality Fabric for Every Creation", "subtitle": "Durable and Versatile", "description": "MICHODAN offers high-quality Ankara fabrics that are durable, comfortable, and perfect for various creations, from everyday wear to special occasion garments. Your designs deserve the best.", "imageSrc": "http://img.b2bpic.net/free-photo/carpets-market-morocco_23-2148129919.jpg", "imageAlt": "Diverse range of colorful Ankara fabrics" }
          ]}
          title="Embrace the Spirit of Ankara"
          description="Dive into the world of rich patterns and cultural stories with MICHODAN's exquisite Ankara fabrics."
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Ankara fabric features"
        />
      </div>
      <div id="ankara-fabrics" data-section="ankara-fabrics" className={`${publicSans.variable} ${inter.variable}`}>
        <ProductCardThree
          products={[
            { "id": "ankara-1", "name": "Blue Geometric Ankara", "price": "₦15,000", "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EV7r8jH6qVm4I9M2ve5zaDdSj6/uploaded-1780310149355-l0vwfoiv.jpg", "imageAlt": "Royal blue geometric Ankara fabric roll" },
            { "id": "ankara-2", "name": "Purpule Ankara Print", "price": "₦15,000", "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EV7r8jH6qVm4I9M2ve5zaDdSj6/uploaded-1780310149355-3pixiz50.jpg", "imageAlt": "Crimson red floral Ankara fabric roll" },
            { "id": "ankara-3", "name": "Orange leaf print Ankara", "price": "₦15,000", "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EV7r8jH6qVm4I9M2ve5zaDdSj6/uploaded-1780310149356-3fuwv0b2.jpg", "imageAlt": "Elegant purple swirl Ankara fabric roll" },
            { "id": "ankara-4", "name": "Red Abstract Ankara", "price": "₦15,000", "imageSrc": "http://img.b2bpic.net/free-vector/flat-design-retro-renew-pattern_23-2149685196.jpg", "imageAlt": "Earth tone abstract Ankara fabric roll" },
            { "id": "ankara-5", "name": "Monochrome Bold Line Ankara", "price": "₦15,000", "imageSrc": "http://img.b2bpic.net/free-photo/cute-small-height-african-american-girl-with-dreadlocks-wear-coloured-yellow-dress-posed-sunset_627829-2760.jpg", "imageAlt": "Monochrome bold line Ankara fabric roll" },
            { "id": "ankara-6", "name": "Tropical yellow Leaf Ankara", "price": "₦15,000", "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EV7r8jH6qVm4I9M2ve5zaDdSj6/uploaded-1780310149355-prg683pr.jpg", "imageAlt": "Tropical green leaf Ankara fabric roll" }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          title="MICHODAN's Exclusive Ankara Collection"
          description="Browse our diverse selection of vibrant and high-quality Ankara fabrics, perfect for any fashion statement."
          textboxLayout="default"
          useInvertedBackground={true}
          uniformGridCustomHeightClasses="min-h-95 2xl:min-h-105"
          ariaLabel="Ankara fabric collection"
        />
      </div>
      <div id="testimonials" data-section="testimonials" className={`${publicSans.variable} ${inter.variable}`}>
        <TestimonialCardThirteen
          testimonials={[
            { "id": "1", "name": "Amina S.", "handle": "@AminaStyle", "testimonial": "MICHODAN's Oriflame products transformed my skincare routine! My skin feels amazing, and I love the natural glow. The service was exceptional too.", "rating": 5, "imageSrc": "http://img.b2bpic.net/free-photo/charming-tender-lovely-coquettish-blond-woman-close-eyes-smiling-relaxed-flirty-touch-face-dreaming_1258-128885.jpg", "imageAlt": "Happy African woman smiling, holding a cosmetic product" },
            { "id": "2", "name": "Chika M.", "handle": "@ChikaFabrics", "testimonial": "The Ankara fabric I bought from MICHODAN is absolutely stunning. The colors are vibrant, and the quality is top-notch. My new dress is a head-turner!", "rating": 5, "imageSrc": "http://img.b2bpic.net/free-photo/full-shot-woman-creating-vision-board_23-2150061844.jpg", "imageAlt": "Satisfied customer with Ankara fabric" },
            { "id": "3", "name": "Davida K.", "handle": "@DavidaBeauty", "testimonial": "I've been an Oriflame user for years, and MICHODAN offers the best selection and prices. Their prompt delivery and customer care are truly commendable.", "rating": 5, "imageSrc": "http://img.b2bpic.net/free-photo/side-view-closeup-portrait-girl-with-blonde-wavy-hair-white-modern-room-with-floor-lamp-fireplace-lady-smiling-posing-wearing-stylish-black-dress_197531-2848.jpg", "imageAlt": "Woman with elegant hairstyle" },
            { "id": "4", "name": "Ngozi E.", "handle": "@NgoziThreads", "testimonial": "MICHODAN is my go-to for authentic Ankara. The prints are unique, and the fabric feels luxurious. Highly recommend for anyone looking to make a statement.", "rating": 5, "imageSrc": "http://img.b2bpic.net/free-photo/closeup-portrait-mixed-rase-woman-with-red-makeup-studio-with-hands-face-smiling-camera_633478-821.jpg", "imageAlt": "African woman with radiant complexion" },
            { "id": "5", "name": "Funke P.", "handle": "@FunkeGlow", "testimonial": "Both the Oriflame cosmetics and Ankara fabric exceeded my expectations. MICHODAN truly understands quality. I'm a happy repeat customer!", "rating": 5, "imageSrc": "http://img.b2bpic.net/free-photo/front-view-pretty-woman-with-phone_23-2148316188.jpg", "imageAlt": "Grinning woman with vibrant accessories" }
          ]}
          showRating={true}
          animationType="slide-up"
          title="What Our Customers Say"
          description="Hear from the MICHODAN community about their experiences with our products."
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Customer testimonials"
        />
      </div>
      <div id="faq" data-section="faq" className={`${publicSans.variable} ${inter.variable}`}>
        <FaqBase
          faqs={[
            { "id": "faq-1", "title": "What are Oriflame products?", "content": "Oriflame is a leading beauty company selling high-quality skincare, cosmetics, fragrances, and wellness products. MICHODAN offers a curated selection of their best items." },
            { "id": "faq-2", "title": "What is Ankara fabric?", "content": "Ankara is a vibrant, colorful, and patterned African wax print fabric, known for its bold designs and cultural significance. MICHODAN provides authentic and diverse Ankara prints." },
            { "id": "faq-3", "title": "How do I care for Ankara fabric?", "content": "To maintain the vibrancy of your Ankara fabric, it's recommended to hand wash in cold water with mild detergent and air dry away from direct sunlight. Iron on a low setting from the reverse side." },
            { "id": "faq-4", "title": "Do you offer international shipping?", "content": "Yes, MICHODAN offers international shipping. Shipping costs and delivery times vary by destination. Please refer to our shipping policy for more details or contact customer service." }
          ]}
          title="Frequently Asked Questions"
          description="Find quick answers to common questions about MICHODAN, Oriflame products, and Ankara fabrics."
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="smooth"
          showCard={true}
          ariaLabel="Frequently asked questions section"
        />
      </div>
      <div id="contact" data-section="contact" className={`${publicSans.variable} ${inter.variable}`}>
        <ContactSplit
          tag="Get in Touch"
          title="Connect with MICHODAN"
          description="Have questions about our Oriflame products, Ankara fabrics, or need assistance? Reach out to us, and our friendly team will be happy to help."
          background={{"variant":"plain"}}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/happy-cheerful-beautiful-african-woman-smiling-speaking-phone-sitting-cafe_176420-12353.jpg"
          imageAlt="Woman providing customer service support"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Send Message"
          termsText="By clicking Send Message you're confirming that you agree with our Terms and Conditions."
          ariaLabel="Contact section"
        />
      </div>
      <div id="footer" data-section="footer" className={`${publicSans.variable} ${inter.variable}`}>
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/vibrant-rainbow-colored-ribbons-hanging-outdoor-market-krabi-thailand_1308-189619.jpg"
          imageAlt="Ankara pattern and cosmetic product textures"
          logoText="MICHODAN"
          columns={[
            { "title": "Products", "items": [{ "label": "Oriflame Beauty", "href": "#oriflame-products" }, { "label": "Ankara Fabrics", "href": "#ankara-fabrics" }, { "label": "Shop All", "href": "#home" }] },
            { "title": "Company", "items": [{ "label": "About Us", "href": "#about" }, { "label": "Contact Us", "href": "#contact" }, { "label": "Testimonials", "href": "#testimonials" }] },
            { "title": "Support", "items": [{ "label": "FAQ", "href": "#faq" }, { "label": "Shipping & Returns", "href": "#" }, { "label": "Privacy Policy", "href": "#" }] }
          ]}
          copyrightText="© 2025 MICHODAN. All rights reserved."
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}