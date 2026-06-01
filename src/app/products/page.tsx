"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';

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
            { "name": "Ankara Products", "id": "/products" },
            { "name": "Testimonials", "id": "#testimonials" },
            { "name": "FAQ", "id": "#faq" },
            { "name": "Contact", "id": "#contact" }
          ]}
        />
      </div>
      <div id="products" data-section="products" className={`${publicSans.variable} ${inter.variable}`}>
        <ProductCardThree
          products={[
            { "id": "ankara-1", "name": "Blue Geometric Ankara", "price": "₦15,000", "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EV7r8jH6qVm4I9M2ve5zaDdSj6/uploaded-1780310149355-l0vwfoiv.jpg", "imageAlt": "Royal blue geometric Ankara fabric roll" },
            { "id": "ankara-2", "name": "Purpule Ankara Print", "price": "₦15,000", "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EV7r8jH6qVm4I9M2ve5zaDdSj6/uploaded-1780310149355-3pixiz50.jpg", "imageAlt": "Crimson red floral Ankara fabric roll" },
            { "id": "ankara-3", "name": "Orange leaf print Ankara", "price": "₦15,000", "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EV7r8jH6qVm4I9M2ve5zaDdSj6/uploaded-1780310149356-3fuwv0b2.jpg", "imageAlt": "Elegant purple swirl Ankara fabric roll" },
            { "id": "ankara-4", "name": "Red Abstract Ankara", "price": "₦15,000", "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EV7r8jH6qVm4I9M2ve5zaDdSj6/uploaded-1780310149355-2qhvewhp.jpg", "imageAlt": "Earth tone abstract Ankara fabric roll" },
            { "id": "ankara-5", "name": "Monochrome Bold Line Ankara", "price": "₦15,000", "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EV7r8jH6qVm4I9M2ve5zaDdSj6/uploaded-1780310631090-5s8xmz2x.jpg", "imageAlt": "Monochrome bold line Ankara fabric roll" },
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
    </ThemeProvider>
  );
}