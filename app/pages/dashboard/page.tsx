'use client';
import Auth from '../../HOC/auth'
import Layout from "@/app/components/layout/Layout";
function Page() {
    return (
        <Layout>
            Dashboard
        </Layout>
    )
}

export default Auth(Page)