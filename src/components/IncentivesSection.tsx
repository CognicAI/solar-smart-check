
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Gift, MapPin } from "lucide-react";

const IncentivesSection = () => {
  const incentives = [
    {
      name: "Federal Solar Tax Credit",
      amount: "$7,200",
      description: "30% of system cost (expires 2032)",
      type: "federal",
      status: "available"
    },
    {
      name: "State Renewable Energy Rebate",
      amount: "$1,500",
      description: "Cash rebate for residential solar",
      type: "state",
      status: "available"
    },
    {
      name: "Local Utility Incentive",
      amount: "$800",
      description: "Net metering program",
      type: "utility",
      status: "available"
    },
    {
      name: "Property Tax Exemption",
      amount: "$450/year",
      description: "Solar system value exempt from taxes",
      type: "tax",
      status: "available"
    }
  ];

  const totalIncentives = incentives.reduce((sum, incentive) => {
    const amount = parseFloat(incentive.amount.replace(/[$,]/g, ''));
    return sum + (incentive.amount.includes('/year') ? amount * 10 : amount);
  }, 0);

  return (
    <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Gift className="h-5 w-5 text-purple-600" />
          Available Incentives
        </CardTitle>
        <CardDescription>
          Rebates and credits in your area
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 mb-6">
          {incentives.map((incentive, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-gray-900">{incentive.name}</h4>
                  <Badge 
                    variant="secondary" 
                    className={`text-xs ${
                      incentive.type === 'federal' ? 'bg-blue-100 text-blue-700' :
                      incentive.type === 'state' ? 'bg-green-100 text-green-700' :
                      incentive.type === 'utility' ? 'bg-orange-100 text-orange-700' :
                      'bg-purple-100 text-purple-700'
                    }`}
                  >
                    {incentive.type}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">{incentive.description}</p>
              </div>
              <div className="text-right">
                <div className="font-bold text-green-600">{incentive.amount}</div>
                <Badge variant="outline" className="text-xs border-green-200 text-green-700">
                  Available
                </Badge>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">
                ${totalIncentives.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">
                Total available incentives
              </div>
            </div>
          </div>
          <div className="mt-3 text-sm text-gray-600">
            <MapPin className="h-4 w-4 inline mr-1" />
            Based on your location and system size
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IncentivesSection;
