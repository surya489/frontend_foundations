'use client';

import { useState } from 'react';

export default function EventDemo() {
  const [clickCount, setClickCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [events, setEvents] = useState<string[]>([]);

  const addEvent = (eventType: string, details?: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setEvents(prev => [...prev.slice(-4), `${timestamp}: ${eventType}${details ? ` - ${details}` : ''}`]);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setClickCount(prev => prev + 1);
    addEvent('Click', `Button clicked ${clickCount + 1} times`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    addEvent('Input Change', `Value: ${e.target.value}`);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addEvent('Form Submit', `Submitted: ${inputValue}`);
    setInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addEvent('Enter Key', 'Pressed Enter');
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg p-6 bg-white">
      <h3 className="text-lg font-semibold mb-4">Event Demo</h3>

      <div className="space-y-4">
        {/* Click Event */}
        <div>
          <button
            onClick={handleClick}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Click me! ({clickCount})
          </button>
        </div>

        {/* Form Events */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Type something..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Submit
          </button>
        </form>

        {/* Event Log */}
        <div className="bg-gray-50 p-3 rounded">
          <h4 className="font-medium mb-2">Event Log:</h4>
          <div className="text-sm space-y-1 max-h-32 overflow-y-auto">
            {events.length === 0 ? (
              <div className="text-gray-500">No events yet. Try interacting above!</div>
            ) : (
              events.map((event, index) => (
                <div key={index} className="text-gray-600 font-mono">
                  {event}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-500">
        Try clicking the button, typing in the input, and pressing Enter!
      </div>
    </div>
  );
}