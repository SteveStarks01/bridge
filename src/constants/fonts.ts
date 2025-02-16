import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

export const base = localFont({
    src: [
        {
            path: '../../public/fonts/Satoshi-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Satoshi-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Satoshi-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Satoshi-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Satoshi-Black.woff2',
            weight: '900',
            style: 'normal',
        }
    ],
    variable: '--font-base'
});

export const heading = Montserrat({
    subsets: ["latin"],
    variable: "--font-heading",
    weight: ["400", "500", "600", "700", "800"],
});

export const subheading = Montserrat({
    subsets: ["latin"],
    variable: "--font-subheading",
    weight: ["400", "500", "600", "700", "800"],
});