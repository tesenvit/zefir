import Button     from 'components/ui/Button'
import { Layout } from 'components/public/Layout'

export default function Error404() {
    return (
        <Layout title={ '404 Страница не найдена' }>
            <div className="
                lg:h-[calc(100vh-7rem)]

                sm:justify-center

                relative
                flex flex-col items-center justify-start
                h-[calc(100vh-4.5rem)]
            ">
                <div className="absolute text-brown-semi text-13rem z-0 sm:text-20rem">
                    404
                </div>
                <div className="sm:mt-56 flex flex-col items-center z-10 mt-44">
                    <div className="font-cormorant text-5xl">
                        Не найдено
                    </div>
                    <div className="my-6 text-lg text-center md:text-left">
                        Упс! Страница, которую вы ищете, не существует. Возможно, она была перемещена или удалена.
                    </div>
                    <Button href='#' text='На главную' />
                </div>
            </div>
        </Layout>
    )
}