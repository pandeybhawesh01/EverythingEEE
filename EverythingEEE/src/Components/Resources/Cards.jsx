/* eslint-disable react/prop-types */
function Card(props) {

    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg mt-5 mr-3 ml-2 bg-slate-200">
                <img className="w-full" src={props.imageAddress} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <a href={props.sourceAdress}><div className="font-bold text-3xl mb-2 text-center">{props.year}</div></a>
                </div>
            </div>
        </>
    )
}

export default Card