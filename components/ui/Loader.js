export default function Loader() {
    return (
        <>
            <div className="loading">
                <span>Z</span>
                <span>e</span>
                <span>f</span>
                <span>i</span>
                <span>r</span>
            </div>

            <style jsx>{`
                .loading {
                    font-size: 84px;
                    text-align: center;
                }
                .loading span {
                    display: inline-block;
                    animation: loading-text 1.4s infinite alternate;
                }
                .loading span:nth-child(1) {
                    animation-delay: 0s;
                }
                .loading span:nth-child(2) {
                    animation-delay: 0.1s;
                }
                .loading span:nth-child(3) {
                    animation-delay: 0.2s;
                }
                .loading span:nth-child(4) {
                    animation-delay: 0.3s;
                }
                .loading span:nth-child(5) {
                    animation-delay: 0.4s;
                }
                @keyframes loading-text {
                    0% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                }
            `}</style>
        </>
    )
}