import {createContext, useEffect, useState} from "react";

const Context = createContext()


// eslint-disable-next-line react/prop-types
function GlobalContext({children}) {

    const [products, setProducts] = useState([])
    // console.log(products)

    useEffect(() => {
        const fetchData = async () => {
            // Fetch data here
            try {
                const response = await fetch('src/context/Products.json')
                const data = await response.json()
                const filteredData = data.categories
                setProducts(filteredData)
            } catch (error) {
                console.log(error)
            }

        }
        fetchData()
    }, []);

    return (
        <Context.Provider value={{products}}>
            {children}
        </Context.Provider>

    )
}

export default GlobalContext