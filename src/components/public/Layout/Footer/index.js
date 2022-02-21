import LinkPlus from "components/ui/LinkPlus";

function Footer() {

    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-brown-light text-grey">
            <div className="flex flex-wrap justify-between py-28 px-17.5 text-md">
                <div className="outline outline-1 w-2/5 pr-10">
                    <div className="title text-2xl mb-4">О нас</div>
                    <p>
                        Welcome to Zefir, where comfort is everything. Beautiful room presentations, straightforward
                        booking & reservation options, & a whole lot more awaits here.
                    </p>
                </div>

                <div className="outline outline-1 w-3/10 px-10">
                    <div className="title text-2xl mb-4">Контакты</div>
                    <p className="mb-0.5">
                        А: <a className="link" href="https://google.com">Одесская обл. Затока ст. Лиманская 307 уч.</a>
                    </p>
                    <p className="mb-0.5">
                        Т: <a className="link" href="tel:380662857020">+38 (066) 285 70 20</a>
                    </p>
                    <p className="mb-0.5">
                        App: <span className="text-black">Viber, Telegram</span>
                    </p>
                    <p className="mb-10">
                        E: <a className="link" href="mailto:info@zatoka-zefir.com.ua">info@zatoka-zefir.com.ua</a>
                    </p>
                    <LinkPlus href="https://google.com" text="Показать на карте" isTargetBlank={ true } />
                </div>

                <div className="outline outline-1 w-3/10 pl-10">
                    <div className="title text-2xl mb-4">Соц. сети</div>
                    <p>Следите за нами в социальных сетях и оставайтесь на связи с Zefir.</p>
                </div>
            </div>

            <div className="bg-brown-pale h-12 flex justify-center items-center">
                &copy; Zefir&nbsp;<span className="text-sm">{currentYear}</span>
            </div>
        </footer>
    )
}

export default Footer