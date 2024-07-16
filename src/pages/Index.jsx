import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

const TestPage = () => {
  const [testInput, setTestInput] = React.useState('');
  const [testResult, setTestResult] = React.useState(null);

  const handleInputChange = (event) => {
    setTestInput(event.target.value);
  };

  const runTest = () => {
    // This is a mock test function. In a real scenario, you'd replace this with actual test logic.
    const result = testInput.toLowerCase() === 'pass';
    setTestResult(result);
    
    toast({
      title: result ? "Test Passed!" : "Test Failed",
      description: result ? "Great job!" : "Try again.",
      variant: result ? "default" : "destructive",
    });
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Test Page</h1>
      
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Run a Test</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="test-input">Test Input</Label>
              <Input
                id="test-input"
                placeholder="Enter 'pass' to pass the test"
                value={testInput}
                onChange={handleInputChange}
              />
            </div>
            <Button onClick={runTest} className="w-full">Run Test</Button>
          </div>
        </CardContent>
        {testResult !== null && (
          <CardFooter>
            <p className={`text-lg font-semibold ${testResult ? 'text-green-600' : 'text-red-600'}`}>
              Test Result: {testResult ? 'Passed' : 'Failed'}
            </p>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default TestPage;