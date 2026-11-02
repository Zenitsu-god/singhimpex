import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "SinghImpex",
    description: "SinghImpex",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
