import { getUniversities } from "@/lib/notion";
import { UniversityIcon } from "./UniversityIcon";

export async function UniversityGrid() {
    const universities = await getUniversities();

    // Fallback if no notion data
    const list = universities.length > 0 ? universities : [
        { name: "Stanford University", domain: "stanford.edu" },
        { name: "UNC Chapel Hill", domain: "unc.edu" },
        { name: "Duke University", domain: "duke.edu" },
        { name: "UCLA", domain: "ucla.edu" },
    ];
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {list.map((school) => (
                <div key={school.name} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-all flex flex-col items-center justify-center text-center gap-4 group">
                    <UniversityIcon domain={school.domain} name={school.name} />
                    <span className="font-semibold text-gray-800 text-sm group-hover:text-primary transition-colors">{school.name}</span>
                </div>
            ))}
        </div>
    );
}
