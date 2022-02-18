import Head              from 'next/head'
import Header            from './Header'
import Footer            from './Footer'
import { DEFAULT_TITLE } from 'helpers/constants'



export function Layout({ children, title = DEFAULT_TITLE }) {
    return (
        <>
            <Head>
                <title>{ title }</title>
            </Head>

            <Header />

            <main className="px-10 mb-auto">
                { children }
            </main>

            <Footer />
        </>
    )
}