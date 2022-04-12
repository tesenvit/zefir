export default function Weather() {

    const response = {
        degree: 7,
        icon: 'icon-weather-sun'
    }

    return (
        <div className="w-1/5 h-full items-center hidden lg:flex ">
            <div className="mr-4">Затока</div>
            <div className={ `font-['WeatherLinea'] ${response.icon} text-xl mr-2` } />
            <div className={ `font-['Raleway Regular'] text-sm font-black -mb-2 text-stroke-black` } >
                {response.degree} <sup>&deg;</sup>C
            </div>
        </div>
    )
}