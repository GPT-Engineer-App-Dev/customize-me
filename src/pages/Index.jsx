import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EstTest = () => {
  const [hours, setHours] = useState("");
  const [rate, setRate] = useState("");
  const [estimate, setEstimate] = useState(null);

  const calculateEstimate = (e) => {
    e.preventDefault();
    const totalEstimate = parseFloat(hours) * parseFloat(rate);
    setEstimate(isNaN(totalEstimate) ? null : totalEstimate.toFixed(2));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Estimation Test</h1>
      <Card>
        <CardHeader>
          <CardTitle>Project Cost Estimator</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={calculateEstimate} className="space-y-4">
            <div>
              <Label htmlFor="hours">Estimated Hours</Label>
              <Input
                id="hours"
                type="number"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                placeholder="Enter estimated hours"
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="rate">Hourly Rate ($)</Label>
              <Input
                id="rate"
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                placeholder="Enter hourly rate"
                className="w-full"
              />
            </div>
            <Button type="submit">Calculate Estimate</Button>
          </form>
          {estimate !== null && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Estimated Cost</h2>
              <p className="text-2xl font-bold text-green-600">${estimate}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EstTest;