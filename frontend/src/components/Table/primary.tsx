import React, { JSX } from "react";
import "@/app/globals.css";

interface TableProps<T extends Record<string, any>> {
    head: string[]
    body: T[]
}

export default function Table<T extends Record<string, any>>({head, body}: TableProps<T>): JSX.Element {

    return (
      <div className="rounded-sm min-h-[40vh] overflow-hidden m-2 border border-(--line) w-full">
        <table className="border-collapse w-full">
          <thead className="border-b border-(--line)">
            <tr>
              {head.map((item, index) => (
                <td key={index} className="p-2 font-bold text-(--font)">{item}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((item, index) => (
              <tr key={index} className="hover:bg-(--secondary-2) text-xs">
                {Object.keys(item).map((key, i) => (
                  <td className="p-2" key={i}>{item[key as keyof typeof item]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }