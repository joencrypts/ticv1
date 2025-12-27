import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { ShineBorder } from "@/components/ui/shine-border";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import Spline from '@splinetool/react-spline';
import { ScrollProgress } from "@/components/ui/scroll-progress";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log(isSignUp ? "Sign up" : "Login", formData);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen w-full bg-transparent overflow-x-hidden relative">
      <ScrollProgress />
      <Navigation />
      
      <main className="flex flex-col w-full min-h-screen">
        <section className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 md:py-24">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Form Section */}
              <div className="w-full order-2 lg:order-1">
                <div className="relative rounded-2xl bg-gradient-to-b from-black/60 via-black/50 to-black/60 p-6 sm:p-8 md:p-10 overflow-hidden">
                  <ShineBorder 
                    borderWidth={2} 
                    duration={14} 
                    shineColor={["#ffffff", "#939393", "#ffffff"]}
                  />
                  
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-2">
                        {isSignUp ? "Create Account" : "Welcome Back"}
                      </h1>
                      <p className="text-white/70 text-sm sm:text-base">
                        {isSignUp 
                          ? "Join The Incite Crew" 
                          : "Sign in to continue"}
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {isSignUp && (
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-white/90">
                            Full Name
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            required={isSignUp}
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-white/40"
                            placeholder="John Doe"
                          />
                        </div>
                      )}

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white/90">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-white/40"
                          placeholder="you@example.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-white/90">
                          Password
                        </Label>
                        <Input
                          id="password"
                          name="password"
                          type="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-white/40"
                          placeholder="••••••••"
                        />
                      </div>

                      {isSignUp && (
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword" className="text-white/90">
                            Confirm Password
                          </Label>
                          <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required={isSignUp}
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-white/40"
                            placeholder="••••••••"
                          />
                        </div>
                      )}

                      {!isSignUp && (
                        <div className="flex items-center justify-between text-sm">
                          <label className="flex items-center space-x-2 text-white/70">
                            <input
                              type="checkbox"
                              className="rounded border-white/20 bg-white/5"
                            />
                            <span>Remember me</span>
                          </label>
                          <a href="#" className="text-white/70 hover:text-white transition-colors">
                            Forgot password?
                          </a>
                        </div>
                      )}

                      <ShimmerButton
                        type="submit"
                        className="w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <span className="flex items-center justify-center">
                            <span className="animate-spin mr-2">⏳</span>
                            {isSignUp ? "Creating Account..." : "Signing in..."}
                          </span>
                        ) : (
                          <span>{isSignUp ? "Sign Up" : "Sign In"}</span>
                        )}
                      </ShimmerButton>

                      <div className="text-center text-sm text-white/70">
                        <span>
                          {isSignUp ? "Already have an account? " : "Don't have an account? "}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            setIsSignUp(!isSignUp);
                            setFormData({
                              email: "",
                              password: "",
                              confirmPassword: "",
                              name: "",
                            });
                          }}
                          className="text-white hover:text-white/80 underline transition-colors"
                        >
                          {isSignUp ? "Sign In" : "Sign Up"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* Spline Section */}
              <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] order-1 lg:order-2 flex items-center justify-center">
                <div className="w-full h-full relative">
                  <Spline scene="/assets/robo.splinecode" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Login;

