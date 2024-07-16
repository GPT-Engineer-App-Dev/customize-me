import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const TestPage = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setItems(prevItems => [...prevItems, inputValue.trim()]);
      setInputValue('');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Test Page</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Counter</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2">Count: {count}</p>
          <Button onClick={handleIncrement}>Increment</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Item List</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddItem} className="flex gap-2 mb-4">
            <Input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter an item"
            />
            <Button type="submit">Add Item</Button>
          </form>
          <ul className="list-disc pl-5">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestPage;