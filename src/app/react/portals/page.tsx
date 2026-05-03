'use client';

import { useState, useEffect, MouseEvent, ReactNode } from 'react';
import { createPortal } from 'react-dom';

type PortalSize = 'small' | 'medium' | 'large';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

interface TooltipProps {
  text: string;
  children: ReactNode;
}

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
}

interface Position {
  x: number;
  y: number;
}

// Modal component using Portal
function Modal({ isOpen, onClose, children }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted || !isOpen) return null;

  const modalRoot = document.getElementById('modal-root') || document.body;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
}

// Tooltip component using Portal
function Tooltip({ text, children }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleMouseEnter = (e: MouseEvent<HTMLSpanElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    });
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  if (!mounted) return <>{children}</>;

  const tooltipRoot = document.getElementById('tooltip-root') || document.body;

  return (
    <>
      <span
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="cursor-help border-b border-dotted border-gray-400"
      >
        {children}
      </span>
      {visible && createPortal(
        <div
          className="fixed bg-black text-white px-2 py-1 rounded text-sm z-50 pointer-events-none"
          style={{
            left: position.x,
            top: position.y,
            transform: 'translateX(-50%) translateY(-100%)'
          }}
        >
          {text}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
        </div>,
        tooltipRoot
      )}
    </>
  );
}

// Dropdown component using Portal
function Dropdown({ trigger, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: rect.left,
      y: rect.bottom
    });
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = () => setIsOpen(false);
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  if (!mounted) return <>{trigger}</>;

  const dropdownRoot = document.getElementById('dropdown-root') || document.body;

  return (
    <>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {trigger}
      </button>
      {isOpen && createPortal(
        <div
          className="fixed bg-white border rounded shadow-lg z-40 min-w-48"
          style={{
            left: position.x,
            top: position.y
          }}
        >
          {children}
        </div>,
        dropdownRoot
      )}
    </>
  );
}

export default function PortalsPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">React Portals</h1>

      {/* WHAT */}
      <section>
        <h2 className="text-xl font-semibold">What are Portals?</h2>
        <p className="text-gray-600 mt-2">
          Portals provide a way to render children into a DOM node that exists outside
          the DOM hierarchy of the parent component. This is useful for modals, tooltips,
          and other UI elements that need to break out of their container.
        </p>
      </section>

      {/* SYNTAX */}
      <section>
        <h2 className="text-xl font-semibold">Basic Syntax</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`import { createPortal } from 'react-dom';

function MyComponent() {
  return createPortal(
    <div>Content to render</div>,
    document.getElementById('portal-root')
  );
}`}
        </pre>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li><strong>createPortal()</strong> - The function to create a portal</li>
          <li><strong>First argument</strong> - JSX to render</li>
          <li><strong>Second argument</strong> - DOM element to render into</li>
        </ul>
      </section>

      {/* WHY USE PORTALS */}
      <section>
        <h2 className="text-xl font-semibold">Why Use Portals?</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Render content outside the component's DOM hierarchy</li>
          <li>Avoid CSS overflow issues with modals/dropdowns</li>
          <li>Ensure proper z-index stacking</li>
          <li>Handle event bubbling correctly</li>
          <li>Integrate with non-React parts of the app</li>
        </ul>
      </section>

      {/* EXAMPLES */}
      <section>
        <h2 className="text-xl font-semibold">Portal Examples</h2>

        <div className="space-y-6">
          {/* Modal */}
          <div>
            <h3 className="font-semibold mb-2">Modal</h3>
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Open Modal
            </button>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
              <h3 className="text-lg font-semibold mb-2">Modal Content</h3>
              <p>This modal is rendered using a portal!</p>
              <p className="text-sm text-gray-600 mt-2">
                Notice how it appears outside the normal document flow.
              </p>
            </Modal>
          </div>

          {/* Tooltip */}
          <div>
            <h3 className="font-semibold mb-2">Tooltip</h3>
            <p>
              Hover over this <Tooltip text="This is a tooltip!">word</Tooltip> to see a tooltip.
            </p>
          </div>

          {/* Dropdown */}
          <div>
            <h3 className="font-semibold mb-2">Dropdown</h3>
            <Dropdown trigger="Open Dropdown">
              <div className="p-2">
                <a href="#" className="block py-1 px-2 hover:bg-gray-100">Option 1</a>
                <a href="#" className="block py-1 px-2 hover:bg-gray-100">Option 2</a>
                <a href="#" className="block py-1 px-2 hover:bg-gray-100">Option 3</a>
              </div>
            </Dropdown>
          </div>
        </div>
      </section>

      {/* EVENT BUBBLING */}
      <section>
        <h2 className="text-xl font-semibold">Event Bubbling</h2>
        <p className="text-gray-600 mt-2">
          Events from portals still bubble up through the React tree, not the DOM tree.
          This means event handlers in parent components will still work as expected.
        </p>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`function Parent() {
  const handleClick = () => console.log('Clicked in parent');

  return (
    <div onClick={handleClick}>
      <PortalComponent />
    </div>
  );
}

// Clicking the portal content will trigger handleClick`}</pre>
      </section>

      {/* CONTEXT */}
      <section>
        <h2 className="text-xl font-semibold">Context and Portals</h2>
        <p className="text-gray-600 mt-2">
          Portals still have access to React context. The portal content can consume
          context from its parent components, even though it's rendered elsewhere in the DOM.
        </p>
      </section>

      {/* SERVER RENDERING */}
      <section>
        <h2 className="text-xl font-semibold">Server-Side Rendering</h2>
        <p className="text-gray-600 mt-2">
          Portals work with SSR, but you need to ensure the target DOM element exists.
          Use dynamic imports or check for window object when creating portals.
        </p>
        <pre className="bg-gray-100 p-3 rounded text-sm">
{`const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return null;

return createPortal(content, targetElement);`}</pre>
      </section>

      {/* BEST PRACTICES */}
      <section>
        <h2 className="text-xl font-semibold">Best Practices</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Only use portals when necessary (modals, tooltips, dropdowns)</li>
          <li>Ensure target DOM elements exist before creating portals</li>
          <li>Handle cleanup properly in useEffect</li>
          <li>Consider accessibility implications</li>
          <li>Test portal behavior thoroughly</li>
        </ul>
      </section>

      {/* WHEN TO USE */}
      <section>
        <h2 className="text-xl font-semibold">When to Use Portals</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Modals and dialogs</li>
          <li>Tooltips and popovers</li>
          <li>Dropdown menus</li>
          <li>Floating UI elements</li>
          <li>Global notifications</li>
        </ul>
      </section>
    </main>
  );
}