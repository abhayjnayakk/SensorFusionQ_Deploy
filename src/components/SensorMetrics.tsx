import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SensorMetrics({
  snrDb,
  artifactScore,
  driftScore,
  fusionConfidence,
}: {
  snrDb: number;
  artifactScore: number;
  driftScore: number;
  fusionConfidence: number;
}) {
  const items = [
    { label: "SNR (dB)", value: snrDb.toFixed(2) },
    { label: "Artifact", value: artifactScore.toFixed(2) },
    { label: "Drift", value: driftScore.toFixed(2) },
    { label: "Fusion Conf.", value: fusionConfidence.toFixed(2) },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quality Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((m) => (
            <div key={m.label} className="rounded-lg border p-4">
              <div className="text-xs text-muted-foreground">{m.label}</div>
              <div className="text-xl font-semibold text-foreground">{m.value}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}


