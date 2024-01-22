import Image from "next/image";

export default function AuthLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className="auth-layout-wrapper p-4 sm:p-8 overflow-y-auto min-h-screen flex items-center justify-center">
        <div className="page-wrapper w-full">
          {children}
        </div>
    </div>
  );
}
