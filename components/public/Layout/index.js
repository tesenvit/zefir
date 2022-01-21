import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

const DEFAULT_TITLE = 'Мини отель «Зефир» | Zefir'

export function Layout({children, title = DEFAULT_TITLE}) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <Header />

            <main className="px-10">
                {children}
            </main>

            <Footer />
        </>
    )
}