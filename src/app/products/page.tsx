"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
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
      <div id="products" data-section="products" className={`${publicSans.variable} ${inter.variable}`}>
        <ProductCardThree
          products={[
            { "id": "oriflame-1", "name": "GIORDANI GOLD ESSENZA ", "price": "₦70,000", "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EV7r8jH6qVm4I9M2ve5zaDdSj6/uploaded-1780254338556-lbackchy.jpg", "imageAlt": "Vibrant red Oriflame lipstick" },
            { "id": "oriflame-2", "name": "Milk and honey sugar scrub ", "price": "₦24,000", "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EV7r8jH6qVm4I9M2ve5zaDdSj6/uploaded-1780312219700-whgxfofd.jpg", "imageAlt": "Oriflame NovAge cleansing gel" },
            { "id": "oriflame-3", "name": "Wellosoph meal replacement  ", "price": "₦149,000", "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EV7r8jH6qVm4I9M2ve5zaDdSj6/uploaded-1780312219700-3ezbr571.jpg", "imageAlt": "Elegant Oriflame Giordani Gold perfume bottle" },
            { "id": "oriflame-4", "name": "Wellosophy omega 3", "price": "₦46,000", "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EV7r8jH6qVm4I9M2ve5zaDdSj6/uploaded-1780312583928-g6vfdlam.jpg", "imageAlt": "Colorful Oriflame OnColour eyeshadow palette" },
            { "id": "oriflame-5", "name": "EverLasting Sync Foundation", "price": "₦26,000", "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EV7r8jH6qVm4I9M2ve5zaDdSj6/uploaded-1780312598400-ash6apnl.jpg", "imageAlt": "Oriflame EverLasting Sync foundation" },
            { "id": "oriflame-6", "name": "Wellosophy wellness pack ", "price": "₦90,000", "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EV7r8jH6qVm4I9M2ve5zaDdSj6/uploaded-1780312499662-mzjamkkh.jpg", "imageAlt": "Oriflame Love Nature body lotion" }
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
    </ThemeProvider>
  );
}