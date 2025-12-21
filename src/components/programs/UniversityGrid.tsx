"use client";

import { School } from "lucide-react";

export function UniversityGrid() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
                { name: "Stanford University", domain: "stanford.edu" },
                { name: "UNC Chapel Hill", domain: "unc.edu" },
                { name: "Duke University", domain: "duke.edu" },
                { name: "UCLA", domain: "ucla.edu" },
                { name: "University of Virginia", domain: "virginia.edu" },
                { name: "University of Florida", domain: "ufl.edu" },
                { name: "Notre Dame", domain: "nd.edu" },
                { name: "University of Michigan", domain: "umich.edu" },
                { name: "Georgetown", domain: "georgetown.edu" },
                { name: "Wake Forest", domain: "wfu.edu" },
                { name: "Clemson University", domain: "clemson.edu" },
                { name: "Harvard University", domain: "harvard.edu" },
            ].map((school) => (
                <div key={school.name} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-all flex flex-col items-center justify-center text-center gap-4 group">
                    <div className="h-16 w-16 relative grayscale group-hover:grayscale-0 transition-all duration-300 flex items-center justify-center">
                        <img
                            src={`https://www.google.com/s2/favicons?domain=${school.domain}&sz=128`}
                            alt={`${school.name} logo`}
                            className="max-h-full max-w-full object-contain"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement?.querySelector('.fallback-icon')?.classList.remove('hidden');
                            }}
                        />
                        <School className="fallback-icon hidden h-10 w-10 text-gray-300 absolute" />
                    </div>
                    <span className="font-semibold text-gray-800 text-sm group-hover:text-primary transition-colors">{school.name}</span>
                </div>
            ))}
        </div>
    );
}
