import Navigation from './Navigation.js'

export default function Header() {
    return (
        <>
            <header className="d-flex justify-content-between align-items-center wrapper">
                <div className="col-2">left</div>

                <div className="col-8 h-100">
                    <Navigation />
                </div>

                <div className="col-2 d-flex justify-content-end">right</div>
            </header>

            <style jsx>{`
                .wrapper {
                    padding: 0 40px;
                    height: 110px;
                    outline: 1px solid black;
                }
            `}</style>
        </>
    )
}