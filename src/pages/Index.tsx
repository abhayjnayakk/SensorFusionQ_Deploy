import { Activity, Database, Layers, Eye, Brain, Shield, TrendingUp, Users, Zap, Radio, Server, Cpu, Gauge } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { useSensorSimulation } from "@/hooks/useSensorSimulation";
import { SensorChart } from "@/components/SensorChart";
import { SensorMetrics } from "@/components/SensorMetrics";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Animated background accent */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-glow-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Compact Header */}
      <header className="border-b border-border/50 backdrop-blur-md bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 glow-border">
                <Activity className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground glow-text">Sensor Fusion Framework</h1>
                <p className="text-xs text-muted-foreground">Team Utkarsh | PReMI 2025</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                </span>
                <span className="text-xs font-medium text-success">System Online</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-6 space-y-6 max-w-[1600px]">
        {/* Dashboard Overview Section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">System Overview</h2>
              <p className="text-sm text-muted-foreground">
                Real-time biomedical data fusion & quality monitoring
              </p>
            </div>
          </div>
          
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              title="Data Streams"
              value="4"
              icon={Radio}
              status="success"
              description="Active biosignals"
            />
            <MetricCard
              title="Processing"
              value="240Hz"
              icon={Cpu}
              status="success"
              description="Sample rate"
            />
            <MetricCard
              title="Uptime"
              value="99.9%"
              icon={Server}
              status="success"
              description="System reliability"
            />
            <MetricCard
              title="Latency"
              value="<5ms"
              icon={Zap}
              status="success"
              description="Real-time response"
            />
          </div>
        </section>

        {/* Live Sensor Monitoring - Primary Dashboard */}
        <section className="space-y-4">
          <SensorAnalysisSimulator />
        </section>

        {/* Framework Architecture - Compact Cards */}
        <section className="space-y-4">
          <div>
            <h2 className="text-xl font-bold text-foreground">Framework Architecture</h2>
            <p className="text-sm text-muted-foreground">5-Layer biomedical data processing pipeline</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
            <div className="industrial-card group hover:border-primary/40">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <Database className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">Data Acquisition</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                Multi-source sensor interfaces & real-time streaming
              </p>
            </div>

            <div className="industrial-card group hover:border-success/40">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-success/10 border border-success/20">
                  <Layers className="h-4 w-4 text-success" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">Preprocessing</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                Cleaning, denoising & normalization
              </p>
            </div>

            <div className="industrial-card group hover:border-warning/40">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-warning/10 border border-warning/20">
                  <Brain className="h-4 w-4 text-warning" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">Fusion</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                AI-driven multimodal integration
              </p>
            </div>

            <div className="industrial-card group hover:border-destructive/40">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-destructive/10 border border-destructive/20">
                  <Shield className="h-4 w-4 text-destructive" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">Validation</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                Quality assurance & bias detection
              </p>
            </div>

            <div className="industrial-card group hover:border-primary/40">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <Eye className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">Visualization</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                Interactive monitoring dashboard
              </p>
            </div>
          </div>
        </section>

        {/* Key Applications - Compact */}
        <section className="space-y-4">
          <div>
            <h2 className="text-xl font-bold text-foreground">Key Applications</h2>
            <p className="text-sm text-muted-foreground">PReMI 2025 Workshop | Team Utkarsh</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="industrial-card hover:scale-[1.02]">
              <div className="flex items-center gap-2 mb-2">
                <Gauge className="h-4 w-4 text-success" />
                <h3 className="text-sm font-semibold text-foreground">Clinical Trials</h3>
              </div>
              <p className="text-xs text-muted-foreground">Quality enhancement & preprocessing</p>
            </div>

            <div className="industrial-card hover:scale-[1.02]">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4 text-warning" />
                <h3 className="text-sm font-semibold text-foreground">Bias Mitigation</h3>
              </div>
              <p className="text-xs text-muted-foreground">Multi-centre study validation</p>
            </div>

            <div className="industrial-card hover:scale-[1.02]">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-semibold text-foreground">AI Radiology</h3>
              </div>
              <p className="text-xs text-muted-foreground">Human-in-the-loop validation</p>
            </div>

            <div className="industrial-card hover:scale-[1.02]">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4 text-destructive" />
                <h3 className="text-sm font-semibold text-foreground">Data Security</h3>
              </div>
              <p className="text-xs text-muted-foreground">Cybersecurity & integrity</p>
            </div>

            <div className="industrial-card hover:scale-[1.02]">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="h-4 w-4 text-success" />
                <h3 className="text-sm font-semibold text-foreground">Multimodal Fusion</h3>
              </div>
              <p className="text-xs text-muted-foreground">Cross-domain integration</p>
            </div>

            <div className="industrial-card hover:scale-[1.02]">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-semibold text-foreground">Research Analytics</h3>
              </div>
              <p className="text-xs text-muted-foreground">Next-gen biomedical AI</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 backdrop-blur-md bg-background/80 mt-12">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 CIM Team 32 - Team Utkarsh | PReMI 2025 Workshop
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>Advanced Biosignal Processing</span>
              <span>•</span>
              <span>Real-time Quality Monitoring</span>
              <span>•</span>
              <span>AI-Driven Fusion</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

const SensorAnalysisSimulator = () => {
  const { buffer, metrics } = useSensorSimulation();
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-foreground">Sensor Analysis Simulator</h3>
      <SensorChart data={buffer} />
      <SensorMetrics
        snrDb={metrics.signalToNoiseRatioDb}
        artifactScore={metrics.artifactScore}
        driftScore={metrics.driftScore}
        fusionConfidence={metrics.fusionConfidence}
      />
    </div>
  );
};
