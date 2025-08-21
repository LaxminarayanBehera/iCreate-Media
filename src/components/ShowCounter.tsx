import XSpacing from "../wrappers/XSpacing";
import Counter from "./Counter";

const ShowCounter = () => {
    return (
        <XSpacing>
            <div className="w-full bg-icm-green py-12 rounded-4xl px-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-icm-white/70 py-3">
                    <div>
                        <h1 className="text-4xl md:text-[6rem] font-semibold">
                            <Counter suffix="%" end={96} />
                        </h1>
                        <p className="mt-2 text-2xl">Client Retention</p>
                    </div>

                    <div>
                        <h1 className="text-4xl md:text-[6rem] font-semibold">10</h1>
                        <p className="mt-2 text-2xl">Years Of Service</p>
                    </div>

                    <div>
                        <h1 className="text-4xl md:text-[6rem] font-semibold">
                            <Counter suffix="+" end={70} />
                        </h1>
                        <p className="mt-2 text-2xl">Professionals</p>
                    </div>

                    <div>
                        <h1 className="text-4xl md:text-[6rem] font-semibold">
                            <Counter suffix="+" end={690} />
                        </h1>
                        <p className="mt-2 text-2xl">Satisfied Clients</p>
                    </div>
                </div>
            </div>
        </XSpacing>
    );
};

export default ShowCounter;
