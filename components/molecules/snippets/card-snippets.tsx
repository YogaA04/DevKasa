import { Badge } from "@/components/ui/badge";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Card } from "@/components/ui/card";

export default function CardSnippets() {
    const snippet = {
        title: "React useState Hook Example",
        language: "JavaScript",
        createdAt: new Date("2024-06-01T12:00:00Z"),
        tags: ["react", "hooks", "javascript"],
    }
    return (
        <>
            <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{snippet.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-2 text-xs text-muted-foreground mb-2">
                        <Badge variant="outline">{snippet.language}</Badge>
                        <span>{snippet.createdAt.toLocaleDateString()}</span>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                        {snippet.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </>
    )
}