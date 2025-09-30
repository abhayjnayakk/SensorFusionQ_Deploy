import * as React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Point = { t: number; ecg: number; eeg: number; emg: number; fused: number };

export function SensorChart({ data }: { data: Point[] }) {
  const chartData = React.useMemo(() => data.slice(-300).map((d) => ({
    t: Number(d.t.toFixed(1)),
    ECG: Number(d.ecg.toFixed(3)),
    EEG: Number(d.eeg.toFixed(3)),
    EMG: Number(d.emg.toFixed(3)),
    Fused: Number(d.fused.toFixed(3)),
  })), [data]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Sensor Streams</CardTitle>
      </CardHeader>
      <CardContent className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 10, right: 12, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="t" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} domain={["auto", "auto"]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="ECG" stroke="#ef4444" dot={false} strokeWidth={1.5} />
            <Line type="monotone" dataKey="EEG" stroke="#3b82f6" dot={false} strokeWidth={1.5} />
            <Line type="monotone" dataKey="EMG" stroke="#10b981" dot={false} strokeWidth={1.5} />
            <Line type="monotone" dataKey="Fused" stroke="#a855f7" dot={false} strokeWidth={1.75} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}


