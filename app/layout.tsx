import { logout } from './logout/actions'
import './globals.css'
import { createClient } from './supabase/server'
import { crimsonText } from './util/font-import'


export default async function RootLayout({ children } : { children: React.ReactNode }) {
	const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
	console.log(data, error, "123123")
	return (
		<html lang="en">
			<body className={`${crimsonText.className} min-h-screen bg-paper-400 flex flex-col items-center`}>
				<div className="px-4 pb-16 pt-4 md:px-0 md:pb-0 z-20 flex justify-start md:pt-12 -mb-10 max-w-3xl w-full">
					<nav className="flex space-x-6 items-center">
						<span className={`${crimsonText.className} text-xl tracking-widest`}>刃物辞典</span>
						<span className="border-[1px] h-0 w-24 border-black"></span>
						<ul className="ml-12 flex space-x-6 text-lg">
							<li>
								<a href="/whetstones" className="">Stones</a>
							</li>

							<li>
								<a href="/kitchenknives">Knives</a>
							</li>
						</ul>
						{
							!error || data?.user ? 
								<>
									<span>User: {data.user?.id}</span>
									<form>
										<button formAction={logout}>Logout</button>
									</form>
								</>
								:
								""
						}
					</nav>
				</div>
				{/* children will always be pages */}
				{children} 
			</body>
		</html>
	)
}
