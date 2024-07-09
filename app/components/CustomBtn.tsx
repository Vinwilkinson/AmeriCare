import clsx from "clsx";
import Link from "next/link";

export default function CustomBtn(btnProps: { customClass?: string, text: string, linkHref: string, noBorder?: boolean, external?: boolean, inView?: boolean, inHero?: boolean, icon?: React.JSX.Element }) {
    return (
        <Link 
            href={btnProps.linkHref} 
            target={btnProps.external ? "_blank" : ""}
            className={clsx(
            btnProps.customClass ? btnProps.customClass : "",
            btnProps.noBorder? "border-transparent": "border-white dark:border-darkBg",
            "smooth dark:bg-primary/25 dark:text-white bg-primary/5 sm:py-3 py-2 sm:px-10 whitespace-nowrap px-6 active:rotate-3 hover:text-white cursor-pointer active:scale-90 text-primary outline-primary w-fit select-none border-4 outline-2 outline-dashed relative overflow-hidden h-fit",
            "after:h-2 after:w-2 sm:rounded-xl rounded-lg hover:after:bg-primary hover:after:h-[105%] hover:after:w-full smooth-after after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2",
            btnProps.inView ? "outline-white text-white": "",
            btnProps.inHero ? "after:bg-primary after:h-[105%] after:w-full text-white font-semibold" : "",
        )}>
            <span className="relative z-10 flex items-center gap-2">{btnProps.icon}{btnProps.text}</span>
        </Link>
    )
}