import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "./Card";

interface IconCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export function IconCard({ title, description, Icon }: IconCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow group h-full">
      <CardContent className="text-center h-full flex flex-col items-center">
        <div className="mx-auto w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
          <Icon className="w-8 h-8 text-secondary" />
        </div>
        <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
