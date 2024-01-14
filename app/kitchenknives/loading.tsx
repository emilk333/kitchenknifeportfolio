import { loadingSpinner } from "../util/loadingSpinner";

export default function Loading() {
    return (
        <div className="h-screen flex justify-center items-center">
            {loadingSpinner()}
        </div>
    )
}