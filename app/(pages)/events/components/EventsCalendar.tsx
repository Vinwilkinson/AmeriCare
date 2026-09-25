"use client"
import { useMemo, useState } from "react";
import InViewWrapper from "@/app/components/InViewWrapper";
import { fadeIn } from "@/lib/AnimationVariants";
import { communityEvents, CommunityEvent } from "@/lib/CommunityEvents";

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const pad = (n: number) => String(n).padStart(2, "0");

const toDate = (iso: string) => {
    const [date, time] = iso.split("T");
    const [y, m, d] = date.split("-").map(Number);
    const [h, min] = time.split(":").map(Number);
    return new Date(y, m - 1, d, h, min);
};

const formatTime = (iso: string) => {
    const { hours, minutes } = { hours: toDate(iso).getHours(), minutes: toDate(iso).getMinutes() };
    const suffix = hours >= 12 ? "PM" : "AM";
    const hour = hours % 12 === 0 ? 12 : hours % 12;
    return `${hour}:${pad(minutes)} ${suffix}`;
};

const formatRange = (event: CommunityEvent) => `${formatTime(event.start)} - ${formatTime(event.end)}`;

const toGoogleStamp = (iso: string) => iso.replace(/[-:]/g, "") + "00";

const googleCalendarLink = (event: CommunityEvent) => {
    const details = [`${event.category} - shared by ${event.source}`, event.url].filter(Boolean).join("\n");
    const params = new URLSearchParams({
        action: "TEMPLATE",
        text: event.title,
        dates: `${toGoogleStamp(event.start)}/${toGoogleStamp(event.end)}`,
        details,
        ctz: "America/New_York",
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

export default function EventsCalendar() {
    const months = useMemo(() => {
        const seen: string[] = [];
        communityEvents.forEach(event => {
            const month = event.start.slice(0, 7);
            if (!seen.includes(month)) seen.push(month);
        });
        return seen;
    }, []);

    const [activeMonth, setActiveMonth] = useState(months[0]);

    const days = useMemo(() => {
        const groups: { date: string; events: CommunityEvent[] }[] = [];
        communityEvents
            .filter(event => event.start.startsWith(activeMonth))
            .forEach(event => {
                const date = event.start.slice(0, 10);
                const group = groups.find(item => item.date === date);
                if (group) group.events.push(event);
                else groups.push({ date, events: [event] });
            });
        return groups;
    }, [activeMonth]);

    const embedUrl = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED;
    const monthCount = days.reduce((total, day) => total + day.events.length, 0);

    return (
        <section className="dark:bg-darkBg dark:text-white bg-white py-[4rem] px-6 pb-[6rem]">
            <InViewWrapper animation={fadeIn} className="w-full">
                <div className="max-w-[1100px] mx-auto flex flex-col gap-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-3">
                        {months.map(month => {
                            const [year, monthNumber] = month.split("-").map(Number);
                            const label = `${MONTHS[monthNumber - 1]} ${year}`;
                            const isActive = month === activeMonth;
                            return (
                                <button
                                    key={month}
                                    type="button"
                                    onClick={() => setActiveMonth(month)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wider uppercase smooth ${isActive
                                        ? "bg-primary text-white"
                                        : "border border-primary/25 dark:border-white/10 text-primary hover:bg-primary/10 dark:hover:bg-white/10"}`}
                                >
                                    {label}
                                </button>
                            );
                        })}
                    </div>

                    <a
                        href="/americare-community-events.ics"
                        download
                        className="px-5 py-2.5 rounded-full text-sm font-semibold tracking-wider uppercase border-2 border-primary/40 text-primary hover:bg-primary hover:text-white smooth"
                    >
                        Import all (.ics)
                    </a>
                </div>

                <p className="text-sm dark:text-white/50 text-themeBlack/50">
                    {monthCount} events this month. Community events are shared from FOCUS (focus-ga.org) - select an event for full details, or add it straight to your own calendar.
                </p>

                {embedUrl ? (
                    <div className="rounded-[24px] overflow-hidden border border-primary/10 dark:border-white/10">
                        <iframe src={embedUrl} title="AmeriCare events calendar" style={{ border: 0 }} width="100%" height="600" loading="lazy" />
                    </div>
                ) : null}

                <div className="rounded-[24px] border border-primary/10 dark:border-white/10 overflow-hidden">
                    {days.map((day, index) => {
                        const date = toDate(`${day.date}T00:00`);
                        return (
                            <div
                                key={day.date}
                                className={`grid grid-cols-[4.5rem_1fr] sm:grid-cols-[7rem_1fr] gap-4 sm:gap-8 px-5 sm:px-8 py-6 ${index > 0 ? "border-t border-dashed border-primary/25 dark:border-white/10" : ""}`}
                            >
                                <div className="text-center sm:text-left">
                                    <div className="text-xs font-semibold tracking-widest text-primary">{WEEKDAYS[date.getDay()]}</div>
                                    <div className="text-3xl sm:text-5xl font-bold leading-none">{date.getDate()}</div>
                                    <div className="text-xs uppercase tracking-widest dark:text-white/50 text-themeBlack/50 mt-1">
                                        {MONTHS[date.getMonth()].slice(0, 3)}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-5">
                                    {day.events.map(event => {
                                        const isWebinar = event.source === "AmeriCare";
                                        return (
                                            <div
                                                key={`${event.title}-${event.start}`}
                                                className={`rounded-2xl px-5 py-4 flex flex-col gap-2.5 ${isWebinar
                                                    ? "border-2 border-primary bg-primary/10"
                                                    : "border border-primary/10 dark:border-white/10 dark:bg-white/5 bg-white"}`}
                                            >
                                                <div className="flex flex-wrap items-center gap-3">
                                                    <span className="text-sm font-semibold text-primary">{formatRange(event)}</span>
                                                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                                                        {event.category}
                                                    </span>
                                                    {isWebinar ? (
                                                        <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary text-white">
                                                            AmeriCare Webinar
                                                        </span>
                                                    ) : null}
                                                </div>

                                                <h3 className="text-lg sm:text-xl font-semibold dark:text-white text-themeBlack">{event.title}</h3>

                                                <div className="flex flex-wrap gap-5 text-sm font-medium">
                                                    {event.url ? (
                                                        <a href={event.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                                            Event details →
                                                        </a>
                                                    ) : null}
                                                    <a href={googleCalendarLink(event)} target="_blank" rel="noopener noreferrer" className="dark:text-white/70 text-themeBlack/70 hover:text-primary dark:hover:text-primary smooth">
                                                        + Add to Google Calendar
                                                    </a>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
                </div>
            </InViewWrapper>
        </section>
    );
}
