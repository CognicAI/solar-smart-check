
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowLeft, Sun, DollarSign, Zap, Home, TrendingUp, Calculator, ChevronDown, Map, Users, Gift } from "lucide-react";
import SavingsChart from "./SavingsChart";
import IncentivesSection from "./IncentivesSection";
import VendorsSection from "./VendorsSection";
import MapView from "./MapView";
import { useState } from "react";

interface SolarResultsProps {
  address: string;
  onBack: () => void;
}

const SolarResults = ({ address, onBack }: SolarResultsProps) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  // Mock data - in real app this would come from API
  const solarScore = 87;
  const annualSavings = 1420;
  const paybackPeriod = 7.2;
  const recommendedPanels = 18;
  const roofArea = 1200;
  const systemSize = 7.2;

  const renderAdditionalSection = () => {
    switch (activeSection) {
      case 'savings':
        return (
          <div className="mt-8">
            <SavingsChart />
          </div>
        );
      case 'incentives':
        return (
          <div className="mt-8">
            <IncentivesSection />
          </div>
        );
      case 'vendors':
        return (
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-1">
              <MapView address={address} />
            </div>
            <div className="lg:col-span-2">
              <VendorsSection />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="hover:bg-white/50"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Search
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Solar Analysis Results</h1>
            <p className="text-gray-600">{address}</p>
          </div>
        </div>

        {/* Solar Score Card */}
        <Card className="mb-8 border-0 shadow-xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-3xl font-bold flex items-center gap-3">
                  <Sun className="h-8 w-8" />
                  Solar Suitability Score
                </CardTitle>
                <CardDescription className="text-orange-100 text-lg">
                  Your home's solar potential rating
                </CardDescription>
              </div>
              <div className="text-right">
                <div className="text-6xl font-bold">{solarScore}</div>
                <div className="text-xl">out of 100</div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={solarScore} className="h-3 bg-orange-400" />
            <div className="flex justify-between text-sm mt-2 text-orange-100">
              <span>Poor</span>
              <span>Good</span>
              <span>Excellent</span>
            </div>
            <Badge className="mt-4 bg-white/20 text-white hover:bg-white/30">
              Excellent Solar Potential
            </Badge>
          </CardContent>
        </Card>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-green-600" />
                <CardTitle className="text-lg">Annual Savings</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">${annualSavings.toLocaleString()}</div>
              <p className="text-sm text-gray-600">Per year on electricity</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-lg">Payback Period</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{paybackPeriod} years</div>
              <p className="text-sm text-gray-600">Break-even point</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-orange-600" />
                <CardTitle className="text-lg">System Size</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600">{systemSize} kW</div>
              <p className="text-sm text-gray-600">{recommendedPanels} solar panels</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Home className="h-5 w-5 text-purple-600" />
                <CardTitle className="text-lg">Roof Coverage</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">65%</div>
              <p className="text-sm text-gray-600">{roofArea} sq ft available</p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information Dropdown */}
        <div className="mb-8">
          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Additional Information</CardTitle>
                  <CardDescription>
                    Explore detailed projections, incentives, and local vendors
                  </CardDescription>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      View Details
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-white border shadow-lg z-50">
                    <DropdownMenuItem 
                      onClick={() => setActiveSection(activeSection === 'savings' ? null : 'savings')}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <TrendingUp className="h-4 w-4" />
                      25-Year Savings Projection
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => setActiveSection(activeSection === 'incentives' ? null : 'incentives')}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <Gift className="h-4 w-4" />
                      Available Incentives
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => setActiveSection(activeSection === 'vendors' ? null : 'vendors')}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <Users className="h-4 w-4" />
                      Solar Panel Vendors & Map
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Dynamic Additional Section */}
        {renderAdditionalSection()}

        {/* Recommendation */}
        <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Calculator className="h-6 w-6 text-blue-600" />
              Our Recommendation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Sun className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    Solar is highly recommended for your home!
                  </h3>
                  <p className="text-green-700 mb-4">
                    Based on your location's excellent solar irradiance, available roof space, and local electricity rates, 
                    you could save ${annualSavings.toLocaleString()} annually with a {systemSize} kW solar system.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>25-Year Savings:</strong> ${(annualSavings * 25).toLocaleString()}
                    </div>
                    <div>
                      <strong>Environmental Impact:</strong> 4.2 tons CO₂ saved/year
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex gap-4">
              <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                Get Detailed Quote
              </Button>
              <Button variant="outline">
                Download Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SolarResults;
