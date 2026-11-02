import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "SinghImpex. - Admin",
    description: "SinghImpex. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
