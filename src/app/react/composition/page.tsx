'use client';

import React, { useState } from 'react';

function Dialog({
    children,
    title,
}: {
    children: React.ReactNode;
    title: string;
}) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                {children}
            </div>
        </div>
    );
}

function ConfirmDialog({
    onConfirm,
    onCancel,
    message,
}: {
    onConfirm: () => void;
    onCancel: () => void;
    message: string;
}) {
    return (
        <Dialog title="Confirm Action">
            <p className="mb-4">{message}</p>
            <div className="flex gap-2 justify-end">
                <button
                    onClick={onCancel}
                    className="px-4 py-2 bg-gray-300 rounded"
                >
                    Cancel
                </button>
                <button
                    onClick={onConfirm}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Confirm
                </button>
            </div>
        </Dialog>
    );
}

function MouseTracker({
    render,
}: {
    render: (position: { x: number; y: number }) => React.ReactNode;
}) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        setPosition({
            x: e.clientX,
            y: e.clientY,
        });
    };

    return (
        <div
            className="h-64 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center"
            onMouseMove={handleMouseMove}
        >
            {render(position)}
        </div>
    );
}

type TabsContextType = {
    activeTab: number;
    setActiveTab: React.Dispatch<React.SetStateAction<number>>;
};

const TabsContext = React.createContext<TabsContextType | undefined>(
    undefined
);

function useTabsContext() {
    const context = React.useContext(TabsContext);
    if (!context) {
        throw new Error('Tabs components must be used inside <Tabs>');
    }
    return context;
}

function Tabs({
    children,
    defaultActive = 0,
}: {
    children: React.ReactNode;
    defaultActive?: number;
}) {
    const [activeTab, setActiveTab] = useState(defaultActive);

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            <div className="border rounded">{children}</div>
        </TabsContext.Provider>
    );
}

function TabList({ children }: { children: React.ReactNode }) {
    return <div className="flex border-b">{children}</div>;
}

function Tab({
    index,
    children,
}: {
    index: number;
    children: React.ReactNode;
}) {
    const { activeTab, setActiveTab } = useTabsContext();

    return (
        <button
            className={`px-4 py-2 ${activeTab === index
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-600'
                }`}
            onClick={() => setActiveTab(index)}
        >
            {children}
        </button>
    );
}

function TabPanel({
    index,
    children,
}: {
    index: number;
    children: React.ReactNode;
}) {
    const { activeTab } = useTabsContext();

    return activeTab === index ? <div className="p-4">{children}</div> : null;
}

export default function CompositionPage() {
    const [showDialog, setShowDialog] = useState(false);

    return (
        <main className="space-y-10">
            <h1 className="text-3xl font-bold">Component Composition</h1>

            <section>
                <h2 className="text-xl font-semibold">Basic Composition</h2>

                <button
                    onClick={() => setShowDialog(true)}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Show Dialog
                </button>

                {showDialog && (
                    <ConfirmDialog
                        message="Are you sure?"
                        onConfirm={() => {
                            alert('Confirmed!');
                            setShowDialog(false);
                        }}
                        onCancel={() => setShowDialog(false)}
                    />
                )}
            </section>

            <section>
                <h2 className="text-xl font-semibold">Render Props</h2>

                <MouseTracker
                    render={({ x, y }) => (
                        <div className="text-center">
                            <p className="font-semibold">Move mouse</p>
                            <p>X: {x}, Y: {y}</p>
                        </div>
                    )}
                />
            </section>

            <section>
                <h2 className="text-xl font-semibold">Tabs</h2>

                <Tabs>
                    <TabList>
                        <Tab index={0}>Home</Tab>
                        <Tab index={1}>About</Tab>
                        <Tab index={2}>Contact</Tab>
                    </TabList>

                    <TabPanel index={0}>Home Content</TabPanel>
                    <TabPanel index={1}>About Content</TabPanel>
                    <TabPanel index={2}>Contact Content</TabPanel>
                </Tabs>
            </section>
        </main>
    );
}