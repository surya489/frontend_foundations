import EventEmitterDemo from "@/components/js/problems/EventEmitterDemo";

export default function EventEmitterPage() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Event Emitter</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What is Event Emitter?</h2>
        <p className="text-gray-600 mt-2">
          Event Emitter is a pattern where objects can emit events and other parts
          of the program can listen and respond to those events.
        </p>
      </section>

      {/* REAL WORLD */}
      <section>
        <h2 className="text-xl font-semibold">Real World Examples</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Button click events</li>
          <li>WebSocket messages</li>
          <li>Node.js EventEmitter</li>
        </ul>
      </section>

      {/* IMPLEMENTATION */}
      <section>
        <h2 className="text-xl font-semibold">Implementation</h2>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`class EventEmitter {
  events = {};

  on(event, fn) {
    (this.events[event] ||= []).push(fn);
  }

  emit(event, data) {
    this.events[event]?.forEach(fn => fn(data));
  }

  off(event, fn) {
    this.events[event] = this.events[event]?.filter(
      f => f !== fn
    );
  }
}`}
        </pre>
      </section>

      {/* DEMO */}
      <section>
        <h2 className="text-xl font-semibold">Interactive Demo</h2>
        <EventEmitterDemo />
      </section>

      {/* EXPLANATION */}
      <section>
        <h2 className="text-xl font-semibold">Explanation</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          <li>on() → register listener</li>
          <li>emit() → trigger event</li>
          <li>off() → remove listener</li>
        </ul>
      </section>

      {/* KEY IDEA */}
      <section>
        <h2 className="text-xl font-semibold">Key Idea</h2>
        <p className="text-gray-600 mt-2">
          This is a publish-subscribe pattern where emitters don’t know who is listening.
        </p>
      </section>

      {/* INTERVIEW */}
      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Explanation</h2>
        <p className="text-gray-600 text-sm mt-2">
          Event Emitters follow the publish-subscribe pattern. They allow decoupled
          communication where one part emits events and others listen and react.
        </p>
      </section>
    </main>
  );
}