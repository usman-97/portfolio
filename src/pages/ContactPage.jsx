import {
  EDITOR_CONTAINER_STYLE,
  LINE_NUMBER_STYLE,
} from "../constants/editorStyles";
import CodeSyntaxHighlighter from "../themes/CodeSyntaxHighlighter";
import { fileContents } from "../data/fileContents";
import { emeraldSyntaxTheme } from "../themes/themes";
import { useMobile } from "../hooks/useMobile";

const ContactPage = () => {
  const isMobile = useMobile();

  return (
    <CodeSyntaxHighlighter
      language={fileContents["contact.css"].language}
      codeString={fileContents["contact.css"].content.content}
      style={emeraldSyntaxTheme}
      customStyle={{
        ...EDITOR_CONTAINER_STYLE,
        fontSize: isMobile ? "12px" : "1.5rem",
      }}
      showLineNumbers={true}
      lineNumberStyle={LINE_NUMBER_STYLE}
    />
  );
};

export default ContactPage;
