import TypingAnimation from "../animation/TypingAnimation";
import CodeSyntaxHighlighter from "../themes/CodeSyntaxHighlighter";
import { emeraldSyntaxTheme } from "../themes/themes";
import { fileContents } from "../data/fileContents";
import {
  EDITOR_CONTAINER_STYLE,
  LINE_NUMBER_STYLE,
} from "../constants/editorStyles";

const HomePage = () => {
  return (
    <CodeSyntaxHighlighter
      language={fileContents.home.language}
      codeString={fileContents.home.content}
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

          return (
            <div key={index} className="flex items-end leading-relaxed group">
              <div
                className="text-right pr-4 select-none opacity-20 group-hover:opacity-50 transition-opacity border-r border-emerald-900/30"
                style={{ ...LINE_NUMBER_STYLE, minWidth: "3.5rem" }}
              >
                {lineNumber}
              </div>
              <div>
                {isNameLine ? (
                  <div className="flex items-end pl-4">
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
                          fontSize: "1.2rem",
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
