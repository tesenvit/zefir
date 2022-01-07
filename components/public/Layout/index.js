import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

export function Layout({children, title = 'Мини отель «Зефир» | Zefir'}) {
    return (
        <>
            <Head title={title}/>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}