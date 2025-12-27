import { Cormorant_Garamond, Montserrat, Source_Sans_3,Bodoni_Moda } from "next/font/google";


export const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["italic"],
});

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: [ "100", "200", "300", "400" , "500"],
});

export const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});