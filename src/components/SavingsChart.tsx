
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { TrendingUp } from "lucide-react";

const SavingsChart = () => {
  const data = [
    { year: "Year 1", savings: 1420, cumulative: 1420 },
    { year: "Year 2", savings: 1465, cumulative: 2885 },
    { year: "Year 3", savings: 1512, cumulative: 4397 },
    { year: "Year 4", savings: 1560, cumulative: 5957 },
    { year: "Year 5", savings: 1610, cumulative: 7567 },
    { year: "Year 6", savings: 1662, cumulative: 9229 },
    { year: "Year 7", savings: 1716, cumulative: 10945 },
    { year: "Year 8", savings: 1771, cumulative: 12716 },
    { year: "Year 9", savings: 1828, cumulative: 14544 },
    { year: "Year 10", savings: 1887, cumulative: 16431 },
    { year: "Year 15", savings: 2186, cumulative: 27250 },
    { year: "Year 20", savings: 2534, cumulative: 41375 },
    { year: "Year 25", savings: 2938, cumulative: 58920 },
  ];

  return (
    <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-green-600" />
          25-Year Savings Projection
        </CardTitle>
        <CardDescription>
          Your cumulative electricity savings over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis 
                dataKey="year" 
                tick={{ fontSize: 12 }}
                interval="preserveStartEnd"
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip 
                formatter={(value: number) => [`$${value.toLocaleString()}`, "Cumulative Savings"]}
                labelStyle={{ color: '#374151' }}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Area
                type="monotone"
                dataKey="cumulative"
                stroke="#10b981"
                strokeWidth={3}
                fill="url(#savingsGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 p-4 bg-green-50 rounded-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-800">$58,920</div>
            <div className="text-sm text-green-600">Total 25-year savings</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SavingsChart;
