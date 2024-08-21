import React from "react";
import Link from "next/link";

type Column = {
  header: string; // Column header text
  key: string; // Key to access data in each row
  span?: number; // Optional span property to configure column width
};

type RowData = {
  [key: string]: any; // Dynamic key-value pairs for row data
};

type Props = {
  columns: Column[];
  data: RowData[];
};

const SPAN_TO_CLASS: {
  [key: number]: string;
} = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
  9: "col-span-9",
  10: "col-span-10",
  11: "col-span-11",
  12: "col-span-12",
};

// Function to parse markdown links to HTML
// const parseMarkdownLinks = (text: string) => {
//   const regex = /\[(.*?)\]\((.*?)\)/g;
//   return text.split(regex).map((part, index) => {
//     if (index % 3 === 1) {
//       // This is the link text
//       return <span key={index}>{part}</span>;
//     } else if (index % 3 === 2) {
//       // This is the URL
//       return (
//         <Link
//           key={index}
//           href={part}
//           rel="noopener noreferrer"
//           className={"ml-1 underline"}
//         >
//           {text.split(regex)[index - 1]}
//         </Link>
//       );
//     } else {
//       // This is plain text or part of the markdown syntax
//       return <span key={index}>{part}</span>;
//     }
//   });
// };

const parseMarkdownLinks = (text: string) => {
  const regex = /(\[(.*?)\]\((.*?)\))|(`[^`]+`)/g;
  const parts = [];
  let lastIndex = 0;

  text.replace(regex, (match, p1, p2, p3, p4, offset) => {
    // Add plain text before the match
    if (offset > lastIndex) {
      parts.push(text.slice(lastIndex, offset));
    }

    if (p1 && p2 && p3) {
      // This is a Markdown link with potential inline code
      const parsedLinkText = parseMarkdownLinks(p2); // Recursive call to handle inline code
      parts.push(
        <Link key={offset} href={p3} rel="noopener noreferrer" className="underline">
          {parsedLinkText}
        </Link>
      );
    } else if (p4) {
      // This is inline code wrapped in backticks
      parts.push(<code key={offset} className="bg-gray-100 dark:bg-gray-800 p-1 rounded">{p4.slice(1, -1)}</code>);
    }

    lastIndex = offset + match.length;
    return match;
  });

  // Add any remaining plain text after the last match
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
};



/**
 * A table component to display API data
 * @param columns - Array of column objects
 * @param data - Array of row objects
 */
const ApiTable: React.FC<Props> = ({ columns, data }) => {
  return (
    <div className="mt-4 grid grid-cols-1 border overflow-hidden dark:border-[#262626]">
      {/* Table Header */}
      <div className="grid grid-cols-12 dark:bg-white/5 font-semibold bg-[#F2F2F2]">
        {columns.map((col, index) => (
          <div
            key={index}
            className={`p-3 border-b dark:border-[#262626] border-l first:border-l-0 ${
              col.span ? SPAN_TO_CLASS[col.span] : "col-span-1"
            } ${index === columns.length - 1 ? "text-left" : ""}`}
          >
            {col.header}
          </div>
        ))}
      </div>
      {/* Table Body */}
      <div className="overflow-y-auto ">
        {data.map((row, rowIndex) => (
          <div
            className="grid grid-cols-12 odd:bg-transparent even:dark:bg-white/5 even:bg-black/5 last:border-b-0 border-b  dark:border-[#262626]"
            key={rowIndex}
          >
            {columns.map((col, colIndex) => (
              <div
                key={colIndex}
                className={`p-3 border-l first:border-l-0 dark:border-[#262626] ${
                  col.span ? SPAN_TO_CLASS[col.span] : "col-span-1"
                } ${colIndex === columns.length - 1 ? "text-left" : ""}`}
              >
                {parseMarkdownLinks(row[col.key])}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiTable;
