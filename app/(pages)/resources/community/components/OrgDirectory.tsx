"use client";

import clsx from "clsx";
import { FaArrowUpRightFromSquare, FaCommentSms, FaEnvelope, FaMagnifyingGlass, FaPhone } from "react-icons/fa6";
import InViewWrapper from "@/app/components/InViewWrapper";
import { fadeIn } from "@/lib/AnimationVariants";
import { Organization } from "./organizations";

function OrgCard({ org }: { org: Organization }) {
    return (
        <article className="bg-white dark:bg-white/[0.03] border border-black/8 dark:border-white/10 rounded-2xl p-6 flex flex-col gap-4 smooth hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5">
            <div className="flex items-start gap-4">
                <div className="w-14 h-14 shrink-0 rounded-xl bg-mint dark:bg-primary/15 grid place-items-center text-forest dark:text-primary font-bold text-xl" aria-hidden>
                    {org.name.charAt(0)}
                </div>
                <div>
                    <h3 className="text-xl font-bold text-themeBlack dark:text-white">{org.name}</h3>
                    <p className="text-sm text-muted dark:text-white/55 mt-1">
                        {org.type} · {org.location}
                    </p>
                </div>
            </div>

            <p className="text-sm leading-relaxed text-themeBlack/75 dark:text-white/70">
                {org.description}
            </p>

            <ul className="flex flex-wrap gap-2" aria-label={`${org.name} categories`}>
                {org.tags.map((tag) => (
                    <li
                        key={tag}
                        className="text-xs font-semibold rounded-full bg-mint dark:bg-primary/15 text-forest dark:text-primary px-3 py-1"
                    >
                        {tag}
                    </li>
                ))}
            </ul>

            <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm border-t border-black/8 dark:border-white/10 pt-4">
                {org.contactName && (
                    <div>
                        <dt className="text-[11px] font-bold uppercase tracking-wider text-muted dark:text-white/45">Contact</dt>
                        <dd className="font-medium text-themeBlack dark:text-white mt-0.5">{org.contactName}</dd>
                    </div>
                )}
                {org.phone && (
                    <div>
                        <dt className="text-[11px] font-bold uppercase tracking-wider text-muted dark:text-white/45">Phone</dt>
                        <dd className="mt-0.5">
                            <a href={`tel:${org.phone.replace(/[^\d+]/g, "")}`} className="font-medium text-leaf hover:underline inline-flex items-center gap-1.5">
                                <FaPhone className="text-xs" /> {org.phone}
                            </a>
                        </dd>
                    </div>
                )}
                {org.email && (
                    <div className="col-span-2">
                        <dt className="text-[11px] font-bold uppercase tracking-wider text-muted dark:text-white/45">Email</dt>
                        <dd className="mt-0.5">
                            <a href={`mailto:${org.email}`} className="font-medium text-leaf hover:underline inline-flex items-center gap-1.5 break-words">
                                <FaEnvelope className="text-xs shrink-0" /> {org.email}
                            </a>
                        </dd>
                    </div>
                )}
                {org.text && (
                    <div>
                        <dt className="text-[11px] font-bold uppercase tracking-wider text-muted dark:text-white/45">Text</dt>
                        <dd className="mt-0.5">
                            <a href={`sms:${org.text.replace(/[^\d+]/g, "")}`} className="font-medium text-leaf hover:underline inline-flex items-center gap-1.5">
                                <FaCommentSms className="text-xs" /> {org.text}
                            </a>
                        </dd>
                    </div>
                )}
            </dl>

            <div className="flex flex-wrap items-center gap-4 mt-auto pt-1">
                <a
                    href={org.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-forest text-white font-bold text-sm px-5 py-3 rounded-lg hover:bg-[#174528] smooth"
                >
                    Visit {org.website} <FaArrowUpRightFromSquare className="text-xs" />
                </a>
                {org.eventsUrl && (
                    <a
                        href={org.eventsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-leaf hover:underline"
                    >
                        See their events ↗
                    </a>
                )}
            </div>
        </article>
    );
}

interface OrgDirectoryProps {
    orgs: Organization[];
    query: string;
    onQueryChange: (value: string) => void;
}

export default function OrgDirectory({ orgs, query, onQueryChange }: OrgDirectoryProps) {
    return (
        <section id="organizations" className="bg-white dark:bg-darkBg py-16 px-6 scroll-mt-24">
            <InViewWrapper animation={fadeIn} className="max-w-6xl mx-auto">
                <>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-themeBlack dark:text-white">
                        Organizations we trust
                    </h2>
                    <div className="relative w-full sm:w-80">
                        <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                        <input
                            type="search"
                            placeholder="Search organizations"
                            value={query}
                            onChange={(e) => onQueryChange(e.target.value)}
                            aria-label="Search organizations"
                            className="w-full rounded-full border border-black/12 dark:border-white/15 bg-white dark:bg-white/5 pl-11 pr-4 py-3 text-sm outline-none focus:border-primary smooth text-themeBlack dark:text-white placeholder:text-muted"
                        />
                    </div>
                </div>

                {orgs.length > 0 ? (
                    <div className="grid md:grid-cols-2 gap-6 items-stretch">
                        {orgs.map((org) => (
                            <OrgCard key={org.id} org={org} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 border border-dashed border-black/15 dark:border-white/15 rounded-2xl">
                        <p className="font-semibold text-themeBlack dark:text-white">No organizations match your search.</p>
                        <p className="text-sm text-muted dark:text-white/55 mt-2">
                            Try a different keyword, or clear your filters to see everyone.
                        </p>
                        <button
                            type="button"
                            onClick={() => onQueryChange("")}
                            className={clsx(
                                "mt-5 text-sm font-bold text-forest dark:text-primary hover:underline cursor-pointer"
                            )}
                        >
                            Clear search
                        </button>
                    </div>
                )}
                </>
            </InViewWrapper>
        </section>
    );
}
