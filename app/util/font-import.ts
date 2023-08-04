import { Crimson_Text, PT_Sans } from "next/font/google";


export const PTSans = PT_Sans({
    subsets: ['latin'],
    variable: "--font-ptsans-normal",
    weight: '400'
})

export const crimsonText = Crimson_Text({
	subsets: ['latin'],
	variable: "--font-crimson-normal",
	weight: '400'
})
