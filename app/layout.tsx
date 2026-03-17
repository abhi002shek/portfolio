import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhishek Singh — DevOps & SRE Engineer",
  description:
    "DevOps Engineer with ~3 years at Lloyds Banking Group. AWS, Kubernetes, Terraform, CI/CD, Python automation, SRE practices. Based in Hyderabad, India.",
  keywords: [
    "DevOps Engineer", "SRE", "AWS", "Kubernetes", "Terraform", "CI/CD",
    "Python", "Platform Engineer", "Hyderabad", "Abhishek Singh",
  ],
  openGraph: {
    title: "Abhishek Singh — DevOps & SRE Engineer",
    description: "Infrastructure that doesn't ask for attention — it just works.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-bg text-text font-body antialiased">
        {children}
      </body>
    </html>
  );
}
