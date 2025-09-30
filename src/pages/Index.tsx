import { Activity, Database, Layers, CheckCircle2, Eye, Brain, Heart, Stethoscope, Microscope, Activity as ActivityIcon, Shield, TrendingUp, Users, Zap } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { LayerCard } from "@/components/LayerCard";
import { ApplicationCard } from "@/components/ApplicationCard";
import { StatusIndicator } from "@/components/StatusIndicator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-foreground">Sensor Fusion Framework</h1>
          <p className="text-muted-foreground mt-1">Team Utkarsh - Biomedical Data Quality Enhancement</p>
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
            Our framework addresses critical challenges in biomedical data management by implementing advanced sensor fusion techniques to enhance data quality, reduce bias, and ensure integrity across multimodal data streams.
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
                  <span className="text-foreground">Develop a robust multimodal data fusion architecture for biomedical applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Implement real-time quality assessment and bias detection mechanisms</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Ensure data integrity across imaging, biosignal, and clinical text modalities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Create validation frameworks for enhanced diagnostic accuracy</span>
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
                "Integration with medical imaging systems (MRI, CT, X-ray)",
                "Real-time biosignal capture (ECG, EEG, EMG)",
                "Clinical text extraction from electronic health records",
                "Standardized data formatting and metadata management"
              ]}
            />
            <LayerCard
              title="Preprocessing Layer"
              description="Data cleaning, normalization, and preparation"
              icon={Layers}
              details={[
                "Noise reduction and artifact removal algorithms",
                "Signal normalization and standardization protocols",
                "Missing data imputation strategies",
                "Temporal alignment of multimodal data streams"
              ]}
            />
            <LayerCard
              title="Fusion Layer"
              description="Intelligent integration of multimodal data"
              icon={Brain}
              details={[
                "Advanced sensor fusion algorithms for heterogeneous data",
                "Cross-modal feature extraction and alignment",
                "Weighted fusion based on data quality metrics",
                "Adaptive fusion strategies for varying data availability"
              ]}
            />
            <LayerCard
              title="Validation Layer"
              description="Quality assurance and bias detection"
              icon={Shield}
              details={[
                "Real-time data quality monitoring and scoring",
                "Statistical bias detection across demographic groups",
                "Cross-validation with gold standard datasets",
                "Automated anomaly detection and flagging"
              ]}
            />
            <LayerCard
              title="Visualization Layer"
              description="Interactive data exploration and reporting"
              icon={Eye}
              details={[
                "Multi-dimensional data visualization interfaces",
                "Real-time quality metrics dashboards",
                "Interactive bias analysis reports",
                "Export capabilities for clinical integration"
              ]}
            />
          </div>
        </section>

        {/* Interactive Dashboard */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Real-Time Monitoring Dashboard</h2>
          
          {/* Quality Metrics */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Quality Metrics</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <MetricCard
                title="Data Integrity"
                value="97.2%"
                icon={Shield}
                status="success"
                description="Overall data completeness"
              />
              <MetricCard
                title="Signal Quality"
                value="94.8%"
                icon={ActivityIcon}
                status="success"
                description="Biosignal fidelity score"
              />
              <MetricCard
                title="Fusion Accuracy"
                value="96.5%"
                icon={Zap}
                status="success"
                description="Cross-modal alignment"
              />
              <MetricCard
                title="Processing Time"
                value="2.3s"
                icon={TrendingUp}
                status="neutral"
                description="Average latency"
              />
            </div>
          </div>

          {/* Bias Detection Status */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Bias Detection Status</h3>
            <Card>
              <CardContent className="pt-6 space-y-3">
                <StatusIndicator status="active" label="Demographic Bias Monitor" />
                <StatusIndicator status="active" label="Selection Bias Detector" />
                <StatusIndicator status="warning" label="Measurement Bias Scanner" />
                <StatusIndicator status="active" label="Algorithmic Fairness Check" />
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
                    <Heart className="h-5 w-5 text-primary" />
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
              title="Cardiac Diagnosis"
              description="Enhanced ECG analysis combined with cardiac imaging for improved heart disease detection"
              icon={Heart}
            />
            <ApplicationCard
              title="Neurological Assessment"
              description="Integrated EEG and brain imaging for comprehensive neurological disorder evaluation"
              icon={Brain}
            />
            <ApplicationCard
              title="Cancer Detection"
              description="Multimodal imaging fusion for early cancer screening and diagnosis"
              icon={Microscope}
            />
            <ApplicationCard
              title="Clinical Decision Support"
              description="Real-time data integration to assist healthcare providers in treatment decisions"
              icon={Stethoscope}
            />
            <ApplicationCard
              title="Patient Monitoring"
              description="Continuous multimodal monitoring for ICU and remote patient care"
              icon={ActivityIcon}
            />
            <ApplicationCard
              title="Research Analytics"
              description="Large-scale biomedical data analysis for clinical research and drug development"
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
                <p className="text-sm text-foreground">• Improved diagnostic accuracy through comprehensive data integration</p>
                <p className="text-sm text-foreground">• Reduced healthcare disparities via bias detection and mitigation</p>
                <p className="text-sm text-foreground">• Enhanced patient outcomes with real-time quality monitoring</p>
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
                <p className="text-sm text-foreground">• Accelerated biomedical research through reliable data infrastructure</p>
                <p className="text-sm text-foreground">• Standardized protocols for multimodal data integration</p>
                <p className="text-sm text-foreground">• Foundation for AI-driven medical discovery and innovation</p>
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
                The Sensor Fusion Framework for Biomedical Data Quality Enhancement represents a significant advancement in healthcare data management. By integrating multimodal data streams with robust quality assurance and bias detection mechanisms, our framework enables more accurate diagnoses, personalized treatments, and equitable healthcare delivery. This research establishes a foundation for next-generation clinical decision support systems and biomedical research platforms.
              </p>
              <p className="text-muted-foreground mt-4 text-sm">Team Utkarsh | Biomedical Data Quality Enhancement Project</p>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground text-sm">
          © 2025 Team Utkarsh - Sensor Fusion Framework
        </div>
      </footer>
    </div>
  );
};

export default Index;
