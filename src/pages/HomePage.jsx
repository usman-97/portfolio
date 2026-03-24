import TypingAnimation from "../animation/TypingAnimation";
import CodeSyntaxHighlighter from "../themes/CodeSyntaxHighlighter";
import { emeraldSyntaxTheme } from "../themes/themes";
import { fileContents } from "../data/fileContents";
import {
  EDITOR_CONTAINER_STYLE,
  LINE_NUMBER_STYLE,
} from "../constants/editorStyles";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useMobile } from "../hooks/useMobile";

const HomePage = () => {
  return (
    <CodeSyntaxHighlighter
      language={fileContents["Home.jsx"].language}
      codeString={fileContents["Home.jsx"].content}
      style={emeraldSyntaxTheme}
      customStyle={EDITOR_CONTAINER_STYLE}
      showLineNumbers={false}
      lineNumberStyle={LINE_NUMBER_STYLE}
      renderer={({ rows, stylesheet }) => {
        return rows.map((row, index) => {
          const lineText = row.children
            .map((child) => {
              return child.children ? child.children[0].value : child.value;
            })
            .join("");
          const isNameLine = lineText.includes("ANIMATE_NAME");
          const lineNumber = index + 1;
          const isMobile = useMobile();

          return (
            <div
              key={index}
              className={`flex items-end ml-2 leading-relaxed text-[12px] group overflow-hidden ${isNameLine ? "bg-red-500/10" : ""} md:text-2xl`}
              style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
            >
              <div
                className="flex items-center text-right pr-4 select-none opacity-20 group-hover:opacity-50 transition-opacity border-r border-emerald-900/30"
                style={{ ...LINE_NUMBER_STYLE, minWidth: "3.5rem" }}
              >
                {isNameLine ? (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: 1,
                      filter: [
                        "drop-shadow(0 0 2px rgba(239, 68, 68, 0.4))",
                        "drop-shadow(0 0 8px rgba(239, 68, 68, 0.8))",
                        "drop-shadow(0 0 2px rgba(239, 68, 68, 0.4))",
                      ],
                    }}
                    transition={{
                      scale: { repeat: Infinity, duration: 2 },
                      filter: { repeat: Infinity, duration: 2 },
                      opacity: { duration: 0.2 }, // Fast fade in
                    }}
                    className="inline-flex items-center justify-center mr-5 text-red-500 md:mr-2"
                  >
                    <VscDebugBreakpointData />
                  </motion.div>
                ) : (
                  <div className="w-6 mr-2" />
                )}
                {lineNumber}
              </div>
              <div>
                {isNameLine ? (
                  <div className="flex items-end pl-3 md:pl-7">
                    <span
                      style={
                        stylesheet.keyword || {
                          color: "#10b981",
                          marginRight: "8px",
                        }
                      }
                    >
                      name
                    </span>
                    <span
                      style={stylesheet.punctuation || { color: "#9ca3af" }}
                    >
                      :{" "}
                    </span>
                    <span style={stylesheet.string || { color: "#a7f3d0" }}>
                      "
                    </span>
                    <div className="px-1 translate-y-px">
                      <TypingAnimation
                        sequence={["Usman", 500, "Usman Shabir Kousar", 2000]}
                        speed={50}
                        style={{
                          color: stylesheet.function?.color || "#34d399",
                          display: "inline-block",
                          fontSize: isMobile ? "12px" : "1.5rem",
                          fontWeight: "500",
                          textShadow: "0 0 8px rgba(52, 211, 153, 0.4)",
                        }}
                      />
                    </div>
                    <span style={stylesheet.string || { color: "#a7f3d0" }}>
                      "
                    </span>
                    <span
                      style={stylesheet.punctuation || { color: "#9ca3af" }}
                    >
                      ,
                    </span>
                  </div>
                ) : (
                  row.children.map((token, key) => {
                    const classes = token.properties?.className || [];
                    const actualType = classes.find(
                      (cls) => cls !== "token" && stylesheet[cls],
                    );
                    const tokenStyle = stylesheet[actualType] || {};
                    return (
                      <span key={key} style={tokenStyle}>
                        {token.children?.[0]?.value || token.value}
                      </span>
                    );
                  })
                )}
              </div>
            </div>
          );
        });
      }}
    />
  );
};

export default HomePage;
