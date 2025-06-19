
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Phone, Globe, MapPin } from "lucide-react";

const VendorsSection = () => {
  // Mock vendor data - in real app this would come from Google Places API
  const vendors = [
    {
      id: 1,
      name: "SunPower Solar Solutions",
      rating: 4.8,
      reviews: 127,
      distance: "2.3 miles",
      phone: "(555) 123-4567",
      website: "www.sunpowersolar.com",
      address: "123 Solar Ave, Your City",
      specialties: ["Residential", "Commercial", "Tesla Powerwall"],
      verified: true
    },
    {
      id: 2,
      name: "Green Energy Pros",
      rating: 4.6,
      reviews: 89,
      distance: "3.1 miles",
      phone: "(555) 234-5678",
      website: "www.greenergypros.com",
      address: "456 Clean Energy Blvd, Your City",
      specialties: ["Residential", "Battery Storage", "Maintenance"],
      verified: true
    },
    {
      id: 3,
      name: "Solar City Installers",
      rating: 4.7,
      reviews: 203,
      distance: "4.5 miles",
      phone: "(555) 345-6789",
      website: "www.solarcityinstallers.com",
      address: "789 Renewable St, Your City",
      specialties: ["Residential", "Financing Options", "Warranty"],
      verified: false
    }
  ];

  return (
    <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-blue-600" />
          Solar Panel Vendors Near You
        </CardTitle>
        <CardDescription>
          Verified solar installation companies in your area
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {vendors.map((vendor) => (
            <div key={vendor.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-lg text-gray-900">{vendor.name}</h4>
                    {vendor.verified && (
                      <Badge className="bg-green-100 text-green-700 text-xs">
                        Verified
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{vendor.rating}</span>
                      <span>({vendor.reviews} reviews)</span>
                    </div>
                    <span>•</span>
                    <span>{vendor.distance}</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{vendor.address}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {vendor.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-1"
                  onClick={() => window.open(`tel:${vendor.phone}`, '_self')}
                >
                  <Phone className="h-3 w-3" />
                  Call
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-1"
                  onClick={() => window.open(`https://${vendor.website}`, '_blank')}
                >
                  <Globe className="h-3 w-3" />
                  Website
                </Button>
                <Button 
                  size="sm"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="text-center">
            <p className="text-sm text-blue-700">
              <strong>Pro Tip:</strong> Get quotes from multiple vendors to compare pricing and services. 
              Look for certified installers with good warranties.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VendorsSection;
