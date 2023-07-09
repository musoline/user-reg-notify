export default function Cover() {
    return (
        <div
            className={
                "min-h-1/2 lg:min-h-screen bg-[url('storage/imgs/bg.png')] bg-hero bg-no-repeat bg-cover bg-center bg-fixed flex flex-col justify-center items-center relative"
            }
        >
            <h1
                className={"my-10"}
                style={{
                    color: "#0F6048",
                    fontSize: "44.74px",
                    lineHeight: "44.74px",
                    height: "45px",
                }}
            >
                Hello Friend!
            </h1>
            <p
                className={"text-center w-80 text-white my-10"}
                style={{
                    lineHeight: "44.74px",
                    fontSize: "28px",
                    height: "182px",
                }}
            >
                Enter your personal details and start journey with us!
            </p>
            <span
                className={
                    "bg-[url('storage/imgs/arrow.png')] bg-hero bg-no-repeat bg-cover bg-center absolute rotate-90 lg:rotate-0 bottom-2 lg:bottom-1/2 right-1/2 lg:right-2 "
                }
                style={{ width: "10px", height: "18px" }}
            ></span>
        </div>
    );
}
