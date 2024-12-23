import "../../globals.css";


export default function ResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-4xl mx-auto p-4">
        {children}
    </div>
  );
}
