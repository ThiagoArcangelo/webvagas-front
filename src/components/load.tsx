import loader from "../../public/assets/loader.svg";

export function Loading() {
    return (
        <div className="w-[100% ] h-[100%] flex justify-center items-center">
            <img className="w-14 h-14" src="loader"  alt="loading"/>
        </div>
    )
}