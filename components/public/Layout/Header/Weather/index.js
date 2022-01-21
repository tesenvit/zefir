export default function Weather() {

    const response = {
        location: 'Затока',
        degree: 7,
        icon: 'icon-weather-sun'
    }

    return (
        <div className="w-1/5 h-full flex items-center">
            <div>{response.location}</div>
            <div className={`font-['WeatherLinea'] ${response.icon} text-xl ml-4 mr-2`} />
            <div className={`font-['Raleway Regular'] text-sm font-black -mb-2 text-stroke`} >
                {response.degree} <sup>&deg;</sup>C
            </div>
        </div>
    )
}