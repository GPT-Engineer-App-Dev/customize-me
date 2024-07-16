import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const TestPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue("");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Test Page</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter some text"
          className="w-full"
        />
        <Button type="submit">Submit</Button>
      </form>
      {submittedValue && (
        <p className="mt-4">
          You submitted: <strong>{submittedValue}</strong>
        </p>
      )}
    </div>
  );
};

export default TestPage;