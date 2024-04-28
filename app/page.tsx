import { IKitchenKnife } from "./kitchenknives/types"
import { Endpoint } from "./util/endpoints"
import { IFetchHeaderConfig } from "./util/types"
import { defaultHeaderConfig, genericFetch } from "@/app/util/fetch"
import { IWhetstone } from "./whetstones/types"
import LoginComponent from "./login/page"
import { createClient } from "./supabase/server"

export default async function Home() {
	const supabase = createClient()
    const { data, error } = await supabase.auth.getUser()

	const headerConfig: IFetchHeaderConfig = {...defaultHeaderConfig} 
    headerConfig.method = "GET"
    headerConfig.cache = "no-store"

    const fetchConfigKnives = { endpoint: Endpoint.ALL_KNIVES, headerConfig }
    const fetchConfigStones = { endpoint: Endpoint.ALL_STONES, headerConfig }

    const listOfKitchenKnives = await genericFetch<IKitchenKnife[]>(fetchConfigKnives)
    const listOfWhetstones = await genericFetch<IWhetstone[]>(fetchConfigStones)
	
	return (
		<main className="mt-0 md:mt-28 z-20 pb-0 pt-12 -mb-10 max-w-3xl w-full">
			{
				error || !data?.user ?
				<LoginComponent/>
				:
				<>
					<p className="pl-4 md:pl-0 text-lg font-bold">
						Library contains:
					</p>
					<ul>
						<li>{listOfKitchenKnives.length} knives</li>
						<li>{listOfWhetstones.length} stones</li>
					</ul>
				</>
			}
		</main>
	)
}
