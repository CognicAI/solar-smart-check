
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface MapViewProps {
  address: string;
}

const MapView = ({ address }: MapViewProps) => {
  // In a real implementation, you would use Google Maps API or similar
  // For now, we'll use a placeholder with embedded map functionality
  const encodedAddress = encodeURIComponent(address);
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodedAddress}&zoom=15`;

  return (
    <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-red-600" />
          Location Map
        </CardTitle>
        <CardDescription>
          View your location and nearby solar installations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Placeholder for Google Maps - you'll need to add your API key */}
          <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600 font-medium">Interactive Map</p>
              <p className="text-sm text-gray-500 mt-1">{address}</p>
              <p className="text-xs text-gray-400 mt-2">
                Add your Google Maps API key to display the interactive map
              </p>
            </div>
          </div>
          
          {/* Uncomment and use this when you have Google Maps API key */}
          {/* 
          <iframe
            src={mapSrc}
            width="100%"
            height="256"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
          */}
        </div>
        
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-start gap-3">
            <MapPin className="h-4 w-4 text-red-500 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-gray-900">Your Location</p>
              <p className="text-xs text-gray-600">{address}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MapView;
