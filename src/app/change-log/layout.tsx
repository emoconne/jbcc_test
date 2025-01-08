import { MainMenu } from "@/features/main-menu/menu";

export const dynamic = "force-dynamic";

export const metadata = {
  title: process.env.NEXT_PUBLIC_AI_NAME,
  description: process.env.NEXT_PUBLIC_AI_NAME,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainMenu />
      <div className="flex-1 flex rounded-md overflow-hidden bg-card/70">
        {children}
      </div>
    </>
  );
}
