import React, { JSX } from "react";

interface TableProps<T extends Record<string, any>> {
    title: string
    description: string
    head: string[]
    body: T[]
    children: React.ReactNode
}

export default function Table<T extends Record<string, any>>({title, description, head, body, children}: TableProps<T>): JSX.Element {

    return (
      <>
        <div className="mx-2 mt-2 flex justify-between items-end">
            <div>
                <h1 className="text-xl">{title}</h1>
                <h3 className="text-(--font)">{description}</h3>
            </div>
            <div>
                {children}
            </div>
        </div>
        <div className="rounded-sm min-h-[40vh] overflow-hidden border border-(--line) m-2">
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
        <div className="flex px-2 gap-1 justify-end">
          <div className="p-3 py-2 border border-(--line) rounded-sm cursor-pointer">{`<`}</div>
          <div className="p-3 py-2 border border-(--line) rounded-sm cursor-pointer">{`>`}</div>
        </div>
      </>
    )
  }