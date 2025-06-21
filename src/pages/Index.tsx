import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Sun, DollarSign, Zap, TrendingUp, Search, Locate, LogOut, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SolarResults from "@/components/SolarResults";
import { toast } from "@/hooks/use-toast";

interface IndexProps {
  user: any;
  onLogout: () => void;
}

const Index = ({ user, onLogout }: IndexProps) => {
  const [address, setAddress] = useState(user?.address || "");
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);

  const handleGetCurrentLocation = async () => {
    if (!navigator.geolocation) {
      toast({
        title: "Location Not Supported",
        description: "Your browser doesn't support location services.",
        variant: "destructive",
      });
      return;
    }

    setLocationLoading(true);
    
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        
        try {
          // Using reverse geocoding to get address from coordinates
          // In a real app, you'd use Google Maps Geocoding API here
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          const data = await response.json();
          
          const formattedAddress = `${data.locality}, ${data.principalSubdivision}, ${data.countryName}`;
          setAddress(formattedAddress);
          
          toast({
            title: "Location Found",
            description: "Your current location has been detected successfully.",
          });
        } catch (error) {
          console.error("Error fetching location details:", error);
          toast({
            title: "Location Error",
            description: "Could not fetch location details. Please try again.",
            variant: "destructive",
          });
        } finally {
          setLocationLoading(false);
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        setLocationLoading(false);
        toast({
          title: "Location Access Denied",
          description: "Please allow location access or enter your address manually.",
          variant: "destructive",
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  };

  const handleAnalyze = async () => {
    if (!address.trim()) {
      toast({
        title: "Address Required",
        description: "Please enter your address or use current location to analyze solar potential.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setShowResults(true);
    }, 2000);
  };

  if (showResults) {
    return <SolarResults address={address} onBack={() => setShowResults(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-blue-50">
      {/* Header with User Info */}
      <div className="container mx-auto px-4 pt-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Welcome back, {user?.name || 'User'}!</p>
              <p className="text-sm text-gray-600">{user?.email}</p>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={onLogout}
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pb-20">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm">
            <Sun className="h-5 w-5 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">Powered by AI & Real Solar Data</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent mb-6">
            Solar Suitability Checker
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover if solar panels are right for your home in under 60 seconds. 
            Get instant savings estimates and personalized financial analysis.
          </p>

          {/* Address Input */}
          <div className="max-w-2xl mx-auto mb-12">
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  Enter Your Address
                </CardTitle>
                <CardDescription>
                  We'll analyze your location's solar potential and calculate savings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <Input
                      placeholder="123 Main Street, City, State"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="text-lg py-6 border-2 focus:border-orange-400"
                      onKeyPress={(e) => e.key === "Enter" && handleAnalyze()}
                    />
                    <Button
                      onClick={handleAnalyze}
                      disabled={loading}
                      className="px-8 py-6 text-lg bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      {loading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Analyzing...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Search className="h-5 w-5" />
                          Analyze
                        </div>
                      )}
                    </Button>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button
                      variant="outline"
                      onClick={handleGetCurrentLocation}
                      disabled={locationLoading}
                      className="flex items-center gap-2 border-2 border-blue-200 hover:border-blue-300 text-blue-700 hover:text-blue-800"
                    >
                      {locationLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                          Getting Location...
                        </>
                      ) : (
                        <>
                          <Locate className="h-4 w-4" />
                          Use Current Location
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-4">
                <Sun className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl">Solar Potential Score</CardTitle>
              <CardDescription>
                Get an instant rating of your location's solar energy potential
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl">Financial Analysis</CardTitle>
              <CardDescription>
                AI-powered calculations for payback period and long-term savings
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl">Local Incentives</CardTitle>
              <CardDescription>
                Find rebates, tax credits, and incentives available in your area
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-8 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">500K+</div>
              <div className="text-sm text-gray-600">Homes Analyzed</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">95%</div>
              <div className="text-sm text-gray-600">Accuracy Rate</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">$2.5M+</div>
              <div className="text-sm text-gray-600">Savings Identified</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
