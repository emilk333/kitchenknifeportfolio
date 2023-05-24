





export default function Modal(modalState: { show: boolean }) {

    const { show } = modalState

    if (!show) {
        return null
    } else {
        return (
            <div
                className="rounded-2xl border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8" role="alert">
                <div>
                    <label className="sr-only" htmlFor="message">Message</label>

                    <textarea className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Message" rows={8} id="message"></textarea>
                </div>
            </div>
        )
    }
}