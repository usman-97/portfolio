import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const CodeSyntaxHighlighter = ({
  language,
  codeString = "",
  showLineNumbers = true,
  style,
  customStyle,
  lineNumberStyle,
  renderer,
  wrapLines = true,
}) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={style}
      showLineNumbers={showLineNumbers}
      customStyle={customStyle}
      lineNumberStyle={lineNumberStyle}
      renderer={renderer}
      wrapLines={wrapLines}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeSyntaxHighlighter;
