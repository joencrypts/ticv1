import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Check, ArrowRight, ArrowLeft, Loader2 } from "lucide-react";

type FormData = {
  // Step 1: Personal Info
  firstName: string;
  lastName: string;
  email: string;
  linkedin: string;
  
  // Step 2: Startup Info
  hasStartup: "yes" | "no" | "";
  startupName: string;
  startupWebsite: string;
  startupStage: string;
  fundingRaised: string;
  
  // Step 3: Needs Assessment
  primaryChallenge: string;
  pitch: string;
  
  // Step 4: Track Selection
  selectedTrack: "founder" | "executive" | "";
  termsAccepted: boolean;
};

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  linkedin: "",
  hasStartup: "",
  startupName: "",
  startupWebsite: "",
  startupStage: "",
  fundingRaised: "",
  primaryChallenge: "",
  pitch: "",
  selectedTrack: "",
  termsAccepted: false,
};

const steps = [
  { id: 1, name: "Personal Info" },
  { id: 2, name: "Startup Details" },
  { id: 3, name: "Your Needs" },
  { id: 4, name: "Confirmation" },
];

const Apply = () => {
  const [searchParams] = useSearchParams();

  const preselectedTrack = searchParams.get("track") as "founder" | "executive" | null;
  
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    ...initialFormData,
    selectedTrack: preselectedTrack || "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.firstName && formData.lastName && formData.email && formData.linkedin);
      case 2:
        if (!formData.hasStartup) return false;
        if (formData.hasStartup === "yes") {
          return !!(formData.startupName && formData.startupStage);
        }
        return true;
      case 3:
        return !!(formData.primaryChallenge && formData.pitch);
      case 4:
        return !!(formData.selectedTrack && formData.termsAccepted);
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    } else {
      toast({
        title: "Please complete all required fields",
        variant: "destructive",
      });
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) {
      toast({
        title: "Please complete all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission - this is where Supabase integration would go
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Application submitted successfully!",
      description: "We'll be in touch within 5 business days.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen w-full overflow-x-hidden">
        <Navigation />
        <main className="flex flex-col w-full items-center px-3 sm:px-4 pt-16 sm:pt-20 gap-6 sm:gap-8">
            <div className="w-full flex items-center justify-center p-4 sm:p-6 md:p-8 min-h-[50vh] sm:min-h-[60vh]">
              <div className="max-w-2xl text-center w-full">
                <GlassPanel className="p-6 sm:p-8 md:p-12" intensity="strong">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 sm:mb-8">
                    <Check className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  </div>
                  
                  <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                    Application Received
                  </h1>
                  
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2">
                    Thank you for applying to The Incite Crew, {formData.firstName}. Our team will
                    review your application and reach out within 5 business days.
                  </p>
                  
                  <p className="text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8 px-2">
                    A confirmation email has been sent to{" "}
                    <span className="text-foreground break-all">{formData.email}</span>
                  </p>
                  
                  <div className="glass-panel p-4 sm:p-6 rounded-xl text-left">
                    <h3 className="font-display font-semibold text-foreground mb-2 sm:mb-3 text-base sm:text-lg">
                      What happens next?
                    </h3>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                      <li>1. Our team reviews your application</li>
                      <li>2. We schedule a brief introduction call</li>
                      <li>3. Upon acceptance, you'll complete onboarding</li>
                    </ul>
                  </div>
                </GlassPanel>
              </div>
            </div>
            <div className="w-full mt-auto">
                <Footer />
            </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      
      <main className="flex flex-col w-full items-center px-3 sm:px-4 pt-16 sm:pt-20 gap-6 sm:gap-8">
        <div className="w-full flex justify-center p-4 sm:p-6 md:p-8 min-h-[50vh] sm:min-h-[60vh]">
          <div className="w-full max-w-2xl">
            <div className="text-center mb-8 sm:mb-10 md:mb-12" data-aos="fade-up">
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 sm:mb-4 uppercase tracking-wide">
                Application
              </h1>
            </div>

            <div className="border border-white/10 p-4 sm:p-6 md:p-8 lg:p-12" data-aos="fade-up" data-aos-delay="100">
              {/* Step 1: Personal Info */}
              {currentStep === 1 && (
                <div className="space-y-6 sm:space-y-8 animate-fade-in">
                  <div className="border-b border-white/10 pb-3 sm:pb-4 mb-6 sm:mb-8">
                    <h2 className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
                      01 / Personal
                    </h2>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-2">
                      <Label className="text-xs uppercase tracking-widest text-muted-foreground">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => updateFormData("firstName", e.target.value)}
                        className="bg-transparent border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-white transition-colors"
                        placeholder="Type here..."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs uppercase tracking-widest text-muted-foreground">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => updateFormData("lastName", e.target.value)}
                        className="bg-transparent border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-white transition-colors"
                        placeholder="Type here..."
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs uppercase tracking-widest text-muted-foreground">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      className="bg-transparent border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-white transition-colors"
                      placeholder="Type here..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs uppercase tracking-widest text-muted-foreground">LinkedIn</Label>
                    <Input
                      id="linkedin"
                      value={formData.linkedin}
                      onChange={(e) => updateFormData("linkedin", e.target.value)}
                      className="bg-transparent border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-white transition-colors"
                      placeholder="Type here..."
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Startup Info */}
              {currentStep === 2 && (
                <div className="space-y-6 sm:space-y-8 animate-fade-in">
                  <div className="border-b border-white/10 pb-3 sm:pb-4 mb-6 sm:mb-8">
                    <h2 className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
                      02 / Startup
                    </h2>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <Label className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">Status</Label>
                    <RadioGroup
                      value={formData.hasStartup}
                      onValueChange={(value) => updateFormData("hasStartup", value)}
                      className="flex flex-col sm:flex-row gap-4 sm:gap-8"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="has-startup-yes" className="border-white/20 text-white" />
                        <Label htmlFor="has-startup-yes" className="font-light cursor-pointer">
                          Active Venture
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="has-startup-no" className="border-white/20 text-white" />
                        <Label htmlFor="has-startup-no" className="font-light cursor-pointer">
                          Aspiring Founder
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {formData.hasStartup === "yes" && (
                    <div className="space-y-6 sm:space-y-8 pt-3 sm:pt-4 animate-fade-in">
                      <div className="space-y-2">
                        <Label className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">Venture Name</Label>
                        <Input
                          id="startupName"
                          value={formData.startupName}
                          onChange={(e) => updateFormData("startupName", e.target.value)}
                          className="bg-transparent border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-white transition-colors"
                          placeholder="Type here..."
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-xs uppercase tracking-widest text-muted-foreground">Website</Label>
                        <Input
                          id="startupWebsite"
                          value={formData.startupWebsite}
                          onChange={(e) => updateFormData("startupWebsite", e.target.value)}
                          className="bg-transparent border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-white transition-colors"
                          placeholder="Type here..."
                        />
                      </div>

                      <div className="space-y-3 sm:space-y-4">
                        <Label className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">Stage</Label>
                        <RadioGroup
                          value={formData.startupStage}
                          onValueChange={(value) => updateFormData("startupStage", value)}
                          className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
                        >
                          {["Idea", "MVP", "Pre-seed", "Seed", "Series A+"].map((stage) => (
                            <div key={stage} className="flex items-center space-x-2">
                              <RadioGroupItem value={stage.toLowerCase()} id={`stage-${stage}`} className="border-white/20 text-white" />
                              <Label htmlFor={`stage-${stage}`} className="font-light cursor-pointer text-sm">
                                {stage}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-xs uppercase tracking-widest text-muted-foreground">Funding Raised</Label>
                        <Input
                          id="fundingRaised"
                          value={formData.fundingRaised}
                          onChange={(e) => updateFormData("fundingRaised", e.target.value)}
                          className="bg-transparent border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-white transition-colors"
                          placeholder="Type here..."
                        />
                      </div>
                    </div>
                  )}

                  {formData.hasStartup === "no" && (
                    <div className="p-4 sm:p-6 border border-white/5 bg-white/5">
                      <p className="text-xs sm:text-sm font-light leading-relaxed">
                        The Incite Crew welcomes aspiring founders. We provide the framework to take you from ideation to execution.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Step 3: Needs Assessment */}
              {currentStep === 3 && (
                <div className="space-y-6 sm:space-y-8 animate-fade-in">
                  <div className="border-b border-white/10 pb-3 sm:pb-4 mb-6 sm:mb-8">
                    <h2 className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
                      03 / Needs
                    </h2>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <Label className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">Primary Challenge</Label>
                    <RadioGroup
                      value={formData.primaryChallenge}
                      onValueChange={(value) => updateFormData("primaryChallenge", value)}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                    >
                      {[
                        { value: "fundraising", label: "Capital" },
                        { value: "product", label: "Product" },
                        { value: "growth", label: "Growth" },
                        { value: "team", label: "Talent" },
                        { value: "strategy", label: "Strategy" },
                        { value: "network", label: "Network" },
                      ].map((option) => (
                        <div
                          key={option.value}
                          className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 border border-white/10 hover:border-white/30 transition-colors cursor-pointer"
                        >
                          <RadioGroupItem value={option.value} id={`challenge-${option.value}`} className="border-white/20 text-white" />
                          <Label
                            htmlFor={`challenge-${option.value}`}
                            className="font-light cursor-pointer flex-1"
                          >
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">Pitch</Label>
                    <Textarea
                      id="pitch"
                      value={formData.pitch}
                      onChange={(e) => updateFormData("pitch", e.target.value)}
                      placeholder="Briefly describe what building..."
                      className="bg-transparent border border-white/20 rounded-none focus-visible:ring-0 focus-visible:border-white transition-colors min-h-[120px] sm:min-h-[150px] resize-none p-3 sm:p-4 text-sm"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {currentStep === 4 && (
                <div className="space-y-6 sm:space-y-8 animate-fade-in">
                  <div className="border-b border-white/10 pb-3 sm:pb-4 mb-6 sm:mb-8">
                    <h2 className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
                      04 / Confirmation
                    </h2>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <Label className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">Select Track</Label>
                    <RadioGroup
                      value={formData.selectedTrack}
                      onValueChange={(value) => updateFormData("selectedTrack", value)}
                      className="grid sm:grid-cols-2 gap-4 sm:gap-6"
                    >
                      <div
                        className={`relative p-4 sm:p-6 border transition-all cursor-pointer ${
                          formData.selectedTrack === "founder"
                            ? "border-white bg-white/5"
                            : "border-white/10 hover:border-white/30"
                        }`}
                      >
                        <RadioGroupItem
                          value="founder"
                          id="track-founder"
                          className="absolute top-4 right-4 sm:top-6 sm:right-6 border-white/20 text-white"
                        />
                        <Label htmlFor="track-founder" className="cursor-pointer block h-full pr-8 sm:pr-12">
                          <div className="font-display text-lg sm:text-xl text-foreground mb-2">
                            Founder
                          </div>
                          <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-3 sm:mb-4">
                            Early Stage
                          </div>
                          <div className="text-base sm:text-lg text-white font-light">
                            $2,500/qtr
                          </div>
                        </Label>
                      </div>

                      <div
                        className={`relative p-4 sm:p-6 border transition-all cursor-pointer ${
                          formData.selectedTrack === "executive"
                            ? "border-white bg-white/5"
                            : "border-white/10 hover:border-white/30"
                        }`}
                      >
                        <RadioGroupItem
                          value="executive"
                          id="track-executive"
                          className="absolute top-4 right-4 sm:top-6 sm:right-6 border-white/20 text-white"
                        />
                        <Label htmlFor="track-executive" className="cursor-pointer block h-full pr-8 sm:pr-12">
                          <div className="font-display text-lg sm:text-xl text-foreground mb-2">
                            Executive
                          </div>
                          <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-3 sm:mb-4">
                            Scaling
                          </div>
                          <div className="text-base sm:text-lg text-white font-light">
                            $7,500/qtr
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 border border-white/5 bg-white/5">
                    <Checkbox
                      id="terms"
                      checked={formData.termsAccepted}
                      onCheckedChange={(checked) =>
                        updateFormData("termsAccepted", checked as boolean)
                      }
                      className="mt-1 border-white/20 data-[state=checked]:bg-white data-[state=checked]:text-black"
                    />
                    <Label htmlFor="terms" className="font-light cursor-pointer text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      I agree to the Terms of Service and Privacy Policy.
                    </Label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-white/10">
                {currentStep > 1 ? (
                  <Button
                    variant="ghost"
                    onClick={handleBack}
                    className="text-xs uppercase tracking-widest text-muted-foreground hover:text-white hover:bg-transparent px-0"
                  >
                    <ArrowLeft className="w-3 h-3 mr-2" />
                    Back
                  </Button>
                ) : (
                  <div />
                )}

                {currentStep < 4 ? (
                  <Button
                    onClick={handleNext}
                    className="bg-white text-black hover:bg-white/90 text-[10px] sm:text-xs uppercase tracking-widest px-4 sm:px-6 md:px-8 rounded-none h-10 sm:h-12"
                  >
                    Continue
                    <ArrowRight className="w-3 h-3 ml-1 sm:ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting || !validateStep(4)}
                    className="bg-white text-black hover:bg-white/90 text-[10px] sm:text-xs uppercase tracking-widest px-4 sm:px-6 md:px-8 rounded-none h-10 sm:h-12 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3 h-3 mr-1 sm:mr-2 animate-spin" />
                        <span className="hidden sm:inline">Processing...</span>
                        <span className="sm:hidden">Processing</span>
                      </>
                    ) : (
                      <>
                        <span className="hidden sm:inline">Submit Application</span>
                        <span className="sm:hidden">Submit</span>
                        <ArrowRight className="w-3 h-3 ml-1 sm:ml-2" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full mt-auto">
             <Footer />
        </div>
      </main>
    </div>
  );
};

export default Apply;
