import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  status?: "success" | "warning" | "error" | "neutral";
  description?: string;
}

const statusColors = {
  success: "text-success",
  warning: "text-warning",
  error: "text-destructive",
  neutral: "text-muted-foreground",
};

export const MetricCard = ({ title, value, icon: Icon, status = "neutral", description }: MetricCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={cn("h-4 w-4", statusColors[status])} />
      </CardHeader>
      <CardContent>
        <div className={cn("text-2xl font-bold", statusColors[status])}>{value}</div>
        {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
      </CardContent>
    </Card>
  );
};
