import SideBar from "@/components/molecules/layout/sidebar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="w-full flex">
            <SideBar />
            {children}
        </main>
    );
}
