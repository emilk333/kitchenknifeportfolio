import './globals.css'
import { PTSans, crimsonText } from './util/font-import'

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children } : { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${crimsonText.className} min-h-screen bg-paper-400`}>
				<nav className="fixed flex py-3 px-5 space-x-6 items-center">
					<span className={`${crimsonText.className} text-xl tracking-widest`}>刃物辞典</span>
					<span className="border-[1px] h-0 w-24 border-black"></span>
					<ul className="ml-12 flex space-x-6 text-lg">
						<li>
							<a href="/whetstones" className="">Sharpening</a>
						</li>

						<li>
							<a href="/kitchenknives">Knives</a>
						</li>
					</ul>
				</nav>
				{/* children will always be pages */}
				{children} 
			</body>
		</html>
	)
}
