'use client';

import { useState, useEffect } from 'react';

export default function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs(prev => [...prev.slice(-4), message]); // Keep last 5 logs
  };

  useEffect(() => {
    addLog('Component mounted / count changed');
  }, [count]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      addLog('Timer started');
      interval = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
        addLog('Timer cleaned up');
      }
    };
  }, [isRunning]);

  useEffect(() => {
    setLogs(prev => [...prev.slice(-4), 'Effect ran once on mount']);
  }, []);

  return (
    <div className="border border-gray-300 rounded-lg p-6 bg-white">
      <h3 className="text-lg font-semibold mb-4">useEffect Demo</h3>

      <div className="flex items-center gap-4 mb-4">
        <div className="text-2xl font-bold">Count: {count}</div>
        <button
          onClick={() => setCount(0)}
          className="px-3 py-1 bg-white text-black border border-black rounded hover:bg-black hover:text-white active:bg-black active:text-white"
        >
          Reset
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="px-4 py-2 bg-white text-black border border-black rounded hover:bg-black hover:text-white active:bg-black active:text-white"
        >
          {isRunning ? 'Stop' : 'Start'} Timer
        </button>
      </div>

      <div className="bg-gray-50 p-3 rounded">
        <h4 className="font-medium mb-2">Effect Logs:</h4>
        <div className="text-sm space-y-1 max-h-32 overflow-y-auto">
          {logs.map((log, index) => (
            <div key={index} className="text-gray-600">
              {log}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-500">
        Watch the logs to see when effects run and get cleaned up!
      </div>
    </div>
  );
}