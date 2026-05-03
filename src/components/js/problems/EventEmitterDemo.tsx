"use client";

import { useState } from "react";

class EventEmitter {
  private events: Record<string, Function[]> = {};

  on(event: string, listener: Function) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event: string, data?: any) {
    if (!this.events[event]) return;

    this.events[event].forEach((fn) => fn(data));
  }

  off(event: string, listener: Function) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter(
      (fn) => fn !== listener
    );
  }
}

export default function EventEmitterDemo() {
  const [output, setOutput] = useState("");
  const emitter = new EventEmitter();

  function runDemo() {
    const listener = (data: string) => {
      setOutput(`Received: ${data}`);
    };

    emitter.on("message", listener);
    emitter.emit("message", "Hello World");
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Event Emitter Demo</h3>

      <button
        onClick={runDemo}
        className="px-3 py-1 border rounded mb-4"
      >
        Emit Event
      </button>

      <div className="bg-black text-white p-3 rounded text-sm">
        {output || "Click to trigger event"}
      </div>
    </div>
  );
}