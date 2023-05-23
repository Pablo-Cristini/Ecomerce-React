import { useEffect } from "react"

const Nosotros = () => {


    useEffect(() => {
        window.addEventListener("click", () => {
            console.log("click")
        })

        return (
            window.removeEventListener("click", () => {
                console.log(" cierre click")})
        )
    }, [])

    return ( 
        <div>
            <h3>Que somos? </h3>
            <h3>A que nos dedicamos? </h3>
            <h3>Quienes somos? </h3>
        </div>
    )
}
export default Nosotros