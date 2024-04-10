"use client"


import { createContext, useState, useContext } from "react";

export const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
    const [city, setCity] = useState("Calgary");
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    
    
    return (
        <SearchContext.Provider value={{
            city,
            setCity,
            lat,
            setLat,
            lon,
            setLon
        }}>
            {children}
        </SearchContext.Provider>
    );
}