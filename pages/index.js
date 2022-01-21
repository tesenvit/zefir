import {Layout} from '/components/public/Layout';

export default function Home() {

    const testContent = () => {
        const text = {
            __html: ''
        }

        for (let i = 0; i < 10; i++) {
            text.__html += `
                 <p class="pb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar vitae dui ut volutpat.
                    Duis id consectetur libero, quis pretium elit. Fusce non sapien sed mauris pulvinar tempus.
                    Morbi sit amet mi urna. Maecenas pretium lorem ut mollis mollis. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Aenean dictum ipsum aliquet, tincidunt lorem id, sagittis dolor.
                    Nulla et augue quis est auctor pharetra eget vitae nulla. Cras ac odio tortor. Donec sed interdum ex.
                    Suspendisse imperdiet libero sit amet quam pretium lobortis. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus. In ante massa, rutrum in nisi sit amet, consequat tristique augue.
                </p>
            `
        }

        return text;
    };

    return (
        <Layout>
            <div className="flex justify-center p-10">
                <h1>CONTENT</h1>
            </div>

            <div className="pb-10" dangerouslySetInnerHTML={testContent()}>
            </div>
        </Layout>
    )
}
