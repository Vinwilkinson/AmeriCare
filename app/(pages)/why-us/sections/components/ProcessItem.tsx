import clsx from "clsx";

export default function ProcessItem(prop:{ title: string, content: string, isOdd?: boolean, count: number }) {
    return (
        <div className={clsx(
            "p-5 flex flex-col gap-3 border-2 border-dotted sm:hover:scale-105 hover:shadow-lg relative hover:z-30 border-transparent smooth hover:border-primary",
            prop.isOdd ? "dark:bg-[#CDE2BE]/25 hover:dark:bg-[#CDE2BE]/10 bg-[#CDE2BE] hover-bg-odd": "dark:bg-[#F0F7EC]/25 hover:dark:bg-[#F0F7EC]/10 bg-[#F0F7EC] hover-bg hover:text-darkBg"
        )}>
            <span className="text-lg font-semibold"><span className="text-xl">{prop.count}</span>. {prop.title}</span>
            <p>{prop.content}</p>
        </div>
    )
}