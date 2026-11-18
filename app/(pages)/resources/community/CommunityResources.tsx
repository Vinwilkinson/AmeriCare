"use client";

import { useMemo, useState } from "react";
import CommunityHero from "./components/CommunityHero";
import OrgDirectory from "./components/OrgDirectory";
import GetListedCTA from "./components/GetListedCTA";
import { CategoryId, organizations } from "./components/organizations";

export default function CommunityResources() {
    const [activeCategory, setActiveCategory] = useState<CategoryId | null>(null);
    const [query, setQuery] = useState("");

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return organizations.filter((org) => {
            const matchesCategory = !activeCategory || org.categories.includes(activeCategory);
            const matchesQuery =
                !q ||
                [org.name, org.description, org.location, org.type, org.contactName ?? "", ...org.tags]
                    .join(" ")
                    .toLowerCase()
                    .includes(q);
            return matchesCategory && matchesQuery;
        });
    }, [activeCategory, query]);

    const handleSelect = (id: CategoryId | null) => {
        setActiveCategory(id);
        if (id) {
            document.getElementById("organizations")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <main>
            <CommunityHero activeCategory={activeCategory} onSelect={handleSelect} />
            <OrgDirectory orgs={filtered} query={query} onQueryChange={setQuery} />
            <GetListedCTA />
        </main>
    );
}
