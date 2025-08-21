import { Suspense, type ReactNode } from "react";
import clsx from "clsx";
import AnimatedWebsiteLoading from "../loader/AnimatedWebsiteLoading";


const RenderWithSuspense = ({ children }: { children: ReactNode }) => {
    return (
        <Suspense
            fallback={
                <div className="fixed w-full z-[1600] bg-icm-white  h-screen flex items-center justify-center inset-0">
                    <AnimatedWebsiteLoading
                        from={0}
                        to={99}
                        className={clsx(
                            "text-icm-black font-semibold text-[clamp(70px,8vw,180px)]"
                        )}
                    />
                </div>
            }
        >
            {children}
        </Suspense>
    );
};

export default RenderWithSuspense;
