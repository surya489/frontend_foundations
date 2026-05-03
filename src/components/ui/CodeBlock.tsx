type CodeBlockProps = {
  code: string;
  className?: string;
};

export default function CodeBlock({ code, className = "" }: CodeBlockProps) {
  return (
    <pre className={`bg-gray-100 p-4 rounded text-sm overflow-x-auto ${className}`}>
      <code>{code}</code>
    </pre>
  );
}
