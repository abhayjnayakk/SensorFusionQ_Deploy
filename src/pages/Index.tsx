import { Activity, Database, Layers, CheckCircle2, Eye, Brain, Stethoscope, Microscope, Activity as ActivityIcon, Shield, TrendingUp, Users, Zap } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { LayerCard } from "@/components/LayerCard";
import { ApplicationCard } from "@/components/ApplicationCard";
import { StatusIndicator } from "@/components/StatusIndicator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useSensorSimulation } from "@/hooks/useSensorSimulation";
import { SensorChart } from "@/components/SensorChart";
import { SensorMetrics } from "@/components/SensorMetrics";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-foreground">Sensor Fusion Framework</h1>
          <p className="text-muted-foreground mt-1">CIM Team 32 - Team Utkarsh | PReMI 2025 Workshop</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Introduction */}
        <section className="text-center space-y-4 py-8">
          <div className="inline-block p-3 bg-primary/10 rounded-xl mb-4">
            <Activity className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-foreground">Introduction</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our framework addresses the critical need for robust quality assessment and enhancement of biomedical data across imaging, physiological signals, and clinical text. In alignment with PReMI 2025 Workshop themes, we present a unified Data Fusion Dashboard and Sensor Fusion Framework designed to ensure reliable preprocessing, quality validation, and multimodal integration.
          </p>
        </section>

        {/* Objectives */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Project Objectives</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Develop a unified framework for sensor and data fusion across biomedical modalities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Enhance data quality through preprocessing, cleaning, and bias detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Enable real-time monitoring of data integrity using AI-enabled validation tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Support multimodal fusion including imaging, biosignals, and clinical text</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Ensure ethical, reproducible, and cybersecurity-aware workflows</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Framework Overview */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Framework Architecture</h2>
          <div className="grid gap-4">
            <LayerCard
              title="Data Acquisition Layer"
              description="Multi-source data collection and standardization"
              icon={Database}
              details={[
                "Interfaces with medical sensors including ECG, EEG, MRI, CT, and wearable devices",
                "Real-time data streaming from heterogeneous biomedical sources",
                "Standardized data formatting for multimodal integration",
                "Metadata management and source tracking"
              ]}
            />
            <LayerCard
              title="Preprocessing Layer"
              description="Data cleaning, normalization, and preparation"
              icon={Layers}
              details={[
                "Data cleaning and denoising algorithms",
                "Artifact removal from physiological signals",
                "Precise annotation systems for quality control",
                "Normalization and standardization protocols"
              ]}
            />
            <LayerCard
              title="Fusion Layer"
              description="Intelligent integration of multimodal data"
              icon={Brain}
              details={[
                "AI-driven multimodal fusion algorithms",
                "Integration of imaging, physiological signals, and textual records",
                "Cross-domain feature extraction and alignment",
                "Adaptive fusion strategies for heterogeneous data types"
              ]}
            />
            <LayerCard
              title="Validation Layer"
              description="Quality assurance and bias detection"
              icon={Shield}
              details={[
                "Bias detection and mitigation across multi-centre studies",
                "Ethical checks and compliance validation",
                "Reproducibility assessments and quality metrics",
                "Human-in-the-loop validation systems"
              ]}
            />
            <LayerCard
              title="Visualization Layer"
              description="Interactive data exploration and reporting"
              icon={Eye}
              details={[
                "Interactive Data Fusion Dashboard interface",
                "Real-time quality metrics visualization",
                "Integrity validation and trial insights displays",
                "Comprehensive reporting and analytics tools"
              ]}
            />
          </div>
        </section>

        {/* Interactive Dashboard */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Real-Time Monitoring Dashboard</h2>
          {/* Sensor Analysis Simulator */}
          <SensorAnalysisSimulator />
          
          {/* Quality Metrics */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Data Quality Indicators</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <MetricCard
                title="Data Integrity"
                value="Active"
                icon={Shield}
                status="success"
                description="Real-time monitoring"
              />
              <MetricCard
                title="Signal Quality"
                value="Monitoring"
                icon={ActivityIcon}
                status="success"
                description="Biosignal validation"
              />
              <MetricCard
                title="Fusion Status"
                value="Active"
                icon={Zap}
                status="success"
                description="Multimodal integration"
              />
              <MetricCard
                title="Processing"
                value="Live"
                icon={TrendingUp}
                status="neutral"
                description="AI-enabled validation"
              />
            </div>
          </div>

          {/* Bias Detection Status */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Bias Detection Status</h3>
            <Card>
              <CardContent className="pt-6 space-y-3">
                <StatusIndicator status="active" label="Bias Detection Monitor" />
                <StatusIndicator status="active" label="Ethical Compliance Check" />
                <StatusIndicator status="active" label="Reproducibility Validation" />
                <StatusIndicator status="active" label="Cybersecurity Assessment" />
              </CardContent>
            </Card>
          </div>

          {/* Fusion Monitor */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Multimodal Data Fusion Monitor</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-primary" />
                    Medical Imaging
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <StatusIndicator status="active" label="MRI Stream" />
                  <StatusIndicator status="active" label="CT Stream" />
                  <StatusIndicator status="active" label="X-Ray Stream" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ActivityIcon className="h-5 w-5 text-primary" />
                    Biosignals
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <StatusIndicator status="active" label="ECG Data" />
                  <StatusIndicator status="active" label="EEG Data" />
                  <StatusIndicator status="warning" label="EMG Data" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    Clinical Text
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <StatusIndicator status="active" label="EHR Integration" />
                  <StatusIndicator status="active" label="Clinical Notes" />
                  <StatusIndicator status="active" label="Lab Results" />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Key Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ApplicationCard
              title="Clinical Trial Enhancement"
              description="Advanced preprocessing and quality enhancement of clinical trial data"
              icon={Microscope}
            />
            <ApplicationCard
              title="Bias Detection & Mitigation"
              description="Identifying and reducing bias across multi-centre biomedical studies"
              icon={Shield}
            />
            <ApplicationCard
              title="AI-Driven Radiology"
              description="Human-in-the-loop quality validation for AI-enabled radiology workflows"
              icon={Brain}
            />
            <ApplicationCard
              title="Secure Data Integrity"
              description="AI-enabled cybersecurity tools for secure data validation"
              icon={ActivityIcon}
            />
            <ApplicationCard
              title="Multimodal Fusion"
              description="Cross-domain data fusion for personalized healthcare insights"
              icon={Layers}
            />
            <ApplicationCard
              title="Research Analytics"
              description="Scalable solutions for next-generation biomedical research applications"
              icon={TrendingUp}
            />
          </div>
        </section>

        {/* Expected Impact */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Expected Impact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Healthcare Quality
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-foreground">• Significantly improved biomedical data reliability and quality</p>
                <p className="text-sm text-foreground">• Reduced errors in clinical decision-making processes</p>
                <p className="text-sm text-foreground">• Accelerated adoption of ethical AI in healthcare systems</p>
                <p className="text-sm text-foreground">• Enhanced patient safety through robust quality validation</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Microscope className="h-5 w-5 text-primary" />
                  Research Advancement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-foreground">• Advanced healthcare research through reliable data infrastructure</p>
                <p className="text-sm text-foreground">• Ensured reproducibility, transparency, and security in research workflows</p>
                <p className="text-sm text-foreground">• Contribution to PReMI 2025 themes on Machine Intelligence in Quality Assessment</p>
                <p className="text-sm text-foreground">• Foundation for ethical, scalable biomedical AI applications</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conclusion */}
        <section className="space-y-4 py-8 text-center">
          <h2 className="text-3xl font-bold text-foreground">Conclusion</h2>
          <Card className="max-w-4xl mx-auto bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <p className="text-foreground leading-relaxed">
                Team Utkarsh's Sensor Fusion Framework bridges the gap between raw biomedical signals and actionable intelligence. By ensuring reproducibility, transparency, and security, the framework directly contributes to advancing healthcare research and practice in alignment with PReMI 2025 themes. Through the Data Fusion Dashboard, it provides a scalable and ethical solution for next-generation biomedical research and clinical applications.
              </p>
              <p className="text-muted-foreground mt-4 text-sm">CIM Team 32 - Team Utkarsh | PReMI 2025 Workshop</p>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground text-sm">
          © 2025 CIM Team 32 - Team Utkarsh | PReMI 2025 Workshop
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
