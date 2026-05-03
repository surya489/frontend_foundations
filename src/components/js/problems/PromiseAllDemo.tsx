"use client";

import { useState } from "react";

export default function PromiseAllDemo() {
  const [output, setOutput] = useState("");

  function runNative() {
    const p1 = Promise.resolve(1);
    const p2 = Promise.resolve(2);
    const p3 = Promise.resolve(3);

    Promise.all([p1, p2, p3]).then((res) => {
      setOutput(`Native → [${res.join(", ")}]`);
    });
  }

  function runCustom() {
    function myPromiseAll(promises: Promise<any>[]) {
      return new Promise((resolve, reject) => {
        const results: any[] = [];
        let count = 0;

        promises.forEach((p, index) => {
          Promise.resolve(p)
            .then((res) => {
              results[index] = res;
              count++;

              if (count === promises.length) {
                resolve(results);
              }
            })
            .catch(reject);
        });
      });
    }

    const p1 = Promise.resolve(1);
    const p2 = Promise.resolve(2);
    const p3 = Promise.resolve(3);

    myPromiseAll([p1, p2, p3]).then((res: any) => {
      setOutput(`Custom → [${res.join(", ")}]`); 
    });
  }

  function runReject() {
    const p1 = Promise.resolve(1);
    const p2 = Promise.reject("Error!");
    const p3 = Promise.resolve(3);

    Promise.all([p1, p2, p3])
      .then(() => {})
      .catch((err) => {
        setOutput(`Rejected → ${err}`);
      });
  }

  return (
    <div className="border rounded-lg p-4 mt-4">
      <h3 className="font-semibold mb-3">Promise.all Demo</h3>

      <div className="flex gap-2 flex-wrap mb-4">
        <button onClick={runNative} className="px-3 py-1 border rounded">
          Native
        </button>

        <button onClick={runCustom} className="px-3 py-1 border rounded">
          Custom
        </button>

        <button onClick={runReject} className="px-3 py-1 border rounded">
          Reject Case
        </button>
      </div>

      <div className="bg-black text-white p-3 rounded text-sm">
        {output || "Click a case"}
      </div>
    </div>
  );
}