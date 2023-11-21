import Middleware from "@/app/components/middleware/middleware";

export default function Page() {
    return(
        <Middleware>
            <div className={`w-screen h-screen`}>
                <h1 className={`text-4xl text-center`}>Dashboard</h1>
            </div>
        </Middleware>
    )
}