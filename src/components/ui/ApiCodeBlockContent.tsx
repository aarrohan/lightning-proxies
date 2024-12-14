"use client";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import atomOneDark from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark";

interface IProps {
  language: string;
  code: string;
}

export default function ApiCodeBlockContent({ language, code }: IProps) {
  const [customStyle, setCustomStyle] = useState({});
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const style = {
      background: "transparent",
      fontSize: window.innerWidth < 768 ? "12px" : "14px",
      lineHeight: window.innerWidth < 768 ? "22px" : "24px",
      color: "#fff",
    };
    setCustomStyle(style);
  }, []);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  }, [copied]);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);

    setCopied(true);
  };

  return (
    <div className="relative">
      <div className="hide-scrollbar min-h-[248px] max-h-[248px] p-3 sm:p-6 overflow-y-auto">
        <SyntaxHighlighter
          language={language}
          style={atomOneDark}
          customStyle={customStyle}
          wrapLongLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>

      <button
        onClick={() => {
          handleCopy(code);
        }}
        className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 py-1.5 px-2.5 border border-white/15 hover:bg-white/5 backdrop-blur-3xl rounded-md flex items-center gap-2 text-[10px] sm:text-xs font-medium text-white duration-200"
      >
        {copied ? (
          "Copied"
        ) : (
          <>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[14px] sm:w-[18px] h-auto"
            >
              <path
                d="M6.75 2.4375C4.36827 2.4375 2.4375 4.36827 2.4375 6.75V12.0802C2.4375 12.3908 2.68934 12.6427 3 12.6427C3.31066 12.6427 3.5625 12.3908 3.5625 12.0802V6.75C3.5625 4.98959 4.98959 3.5625 6.75 3.5625H12.0096C12.3203 3.5625 12.5721 3.31066 12.5721 3C12.5721 2.68934 12.3203 2.4375 12.0096 2.4375H6.75Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.8019 5.09494C11.3712 4.82328 8.87882 4.82328 6.44811 5.09494C5.75565 5.17234 5.1992 5.71728 5.11758 6.41511C4.8293 8.87997 4.8293 11.37 5.11758 13.8349C5.1992 14.5327 5.75565 15.0777 6.44811 15.1551C8.87882 15.4267 11.3712 15.4267 13.8019 15.1551C14.4944 15.0777 15.0508 14.5327 15.1324 13.8349C15.4207 11.37 15.4207 8.87997 15.1324 6.41511C15.0508 5.71728 14.4944 5.17234 13.8019 5.09494ZM6.57307 6.21298C8.92073 5.9506 11.3293 5.9506 13.677 6.21298C13.855 6.23288 13.9949 6.37366 14.0151 6.5458C14.2932 8.92383 14.2932 11.3262 14.0151 13.7042C13.9949 13.8763 13.855 14.0171 13.677 14.037C11.3293 14.2994 8.92073 14.2994 6.57307 14.037C6.39505 14.0171 6.2551 13.8763 6.23497 13.7042C5.95683 11.3262 5.95683 8.92383 6.23497 6.5458C6.2551 6.37366 6.39505 6.23288 6.57307 6.21298Z"
                fill="white"
              />
            </svg>
            Copy
          </>
        )}
      </button>
    </div>
  );
}
