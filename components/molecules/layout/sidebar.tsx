import { Badge } from "@/components/ui/badge";
import { FcOpenedFolder } from "react-icons/fc";

export default function SideBar() {
    const tags = [
        { name: "react", count: 12 },
        { name: "javascript", count: 8 },
        { name: "css", count: 5 },
    ];
    return (
        <aside className="hidden md:block w-64 border-r border-border p-4">
            <h3 className="font-semibold mb-3 flex items-center">
                <FcOpenedFolder className="inline mr-2" />
                Tags
            </h3>
            <div className="space-y-1">
                {tags.map(tag => (
                    <Badge variant="secondary" key={tag.name} className="w-full justify-start">
                        #{tag.name} <span className="ml-auto text-xs">{tag.count}</span>
                    </Badge>
                ))}
            </div>
        </aside>
    )
}