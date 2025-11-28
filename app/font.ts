import { Cormorant_Garamond, Montserrat, Source_Sans_3 } from "next/font/google";

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "300", "400"],
});

export const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});