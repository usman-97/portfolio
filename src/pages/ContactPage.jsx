import {
  EDITOR_CONTAINER_STYLE,
  LINE_NUMBER_STYLE,
} from "../constants/editorStyles";
import CodeSyntaxHighlighter from "../themes/CodeSyntaxHighlighter";
import { fileContents } from "../data/fileContents";
import { emeraldSyntaxTheme } from "../themes/themes";
import { useMobile } from "../hooks/useMobile";
import { useContentContext } from "../contexts/ContentContext";

const ContactPage = () => {
  const { files, loading } = useContentContext();
  const isMobile = useMobile();
  const content = files["contact.css"];

  return (
    <CodeSyntaxHighlighter
      language={content?.language}
      codeString={content?.content}
      style={emeraldSyntaxTheme}
      customStyle={EDITOR_CONTAINER_STYLE}
      showLineNumbers={false}
      lineNumberStyle={LINE_NUMBER_STYLE}
      renderer={({ rows, stylesheet }) => {
        return rows.map((row, index) => {
          const lineNumber = index + 1;
          const lineText = row.children
            .map((child) =>
              child.children ? child.children[0].value : child.value,
            )
            .join("");

          const contactLinks = content?.contactLinks;
          const emailLink = lineText.includes("email")
            ? "mailto:" +
              contactLinks?.find((item) => item.platform === "email")?.url
            : null;
          const linkedInLink = lineText.includes("linkedIn")
            ? contactLinks?.find((item) => item.platform === "linkedIn")?.url
            : null;
          const gitHubLink = lineText.includes("gitHub")
            ? contactLinks?.find((item) => item.platform === "gitHub")?.url
            : null;
          const activeHref = emailLink || linkedInLink || gitHubLink;

          return (
            <div
              key={index}
              className={`flex items-end ml-2 leading-relaxed text-[12px] group overflow-hidden md:text-2xl`}
              style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
            >
              <div
                className="w-6 mr-2 select-none opacity-20 group-hover:opacity-50 transition-opacity border-r border-emerald-900/30"
                style={{
                  ...LINE_NUMBER_STYLE,
                  minWidth: "3rem",
                  marginLeft: "1rem",
                }}
              >
                {lineNumber}
              </div>
              {row.children.map((token, j) => {
                const text = token.children
                  ? token.children[0].value
                  : token.value;
                const safeText = String(text || "");
                const tokenStyle = token.properties?.className?.reduce(
                  (acc, className) => {
                    return { ...acc, ...stylesheet[className] };
                  },
                  {},
                );
                const isValue =
                  token.properties?.className?.includes("string") ||
                  safeText.includes("@");
                if (activeHref && isValue) {
                  return (
                    <a
                      key={j}
                      href={activeHref}
                      target={emailLink ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className=""
                      style={{ ...tokenStyle }}
                    >
                      <span className="hover:underline hover:text-emerald">
                        {safeText}
                      </span>
                    </a>
                  );
                }

                return (
                  <span
                    key={j}
                    className={token.properties?.className?.join(" ")}
                    style={tokenStyle}
                  >
                    {safeText}
                  </span>
                );
              })}
            </div>
          );
        });
      }}
    />
  );
};

export default ContactPage;
