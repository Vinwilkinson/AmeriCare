import clsx from "clsx";
import { Playfair_Display } from "next/font/google";

const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });

export default function CareersSidebar() {
    return (
        <aside aria-label="Application help" className="hidden lg:block">
            <div className="sticky top-28 flex flex-col gap-5">
                <div className="rounded-xl border border-primary/20 bg-primary/[0.07] p-7 dark:bg-primary/[0.08]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#3d7a26] dark:text-primary">
                        Your next step
                    </p>
                    <h3
                        className={clsx(
                            FontFamily.className,
                            "mt-3 text-[1.55rem] leading-tight tracking-tight text-gray-900 dark:text-white"
                        )}
                    >
                        Bring your care skills home.
                    </h3>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                        Tell us about your qualifications, location, and availability.
                    </p>
                    <a
                        href="#application"
                        className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white smooth hover:opacity-90 active:scale-95"
                    >
                        Start your application <span aria-hidden="true">↗</span>
                    </a>
                    <a
                        href="tel:+14044942187"
                        className="mt-4 block text-center text-[15px] font-bold text-gray-900 dark:text-white smooth hover:text-primary"
                    >
                        (404) 494-2187
                    </a>
                </div>

                <div className="border-l-2 border-primary/40 py-1 pl-5 text-[13px] leading-relaxed text-gray-600 dark:text-gray-400">
                    <strong className="mb-2 block text-sm text-gray-900 dark:text-white">Not sure you qualify?</strong>
                    Explore the role requirements and training resources, then ask our recruiting team.
                </div>

                <div className="border-l-2 border-primary/40 py-1 pl-5 text-[13px] leading-relaxed text-gray-600 dark:text-gray-400">
                    <strong className="mb-2 block text-sm text-gray-900 dark:text-white">Protect your information</strong>
                    Keep medical records, ID copies, and banking details out of public application forms and ordinary email.
                </div>
            </div>
        </aside>
    );
}
