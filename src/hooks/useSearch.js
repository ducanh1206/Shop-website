import queryString from "query-string";
import { useSearchParams } from "react-router-dom";

export const useSearch = (defaultValue) => {
    const { search, setSearch } = useSearchParams();

    const value = {...defaultValue}

    for(let [key, value] of search.entries()) {
        try {
            value[key] = JSON.parse(value || defaultValue[key])
        } catch (err) {
            value[key] = value || defaultValue[key]
        }
    }

    const setValue = (valueObj) => {
        const qs = queryString.stringify({ ...value, ...valueObj });
        setSearch(qs)
    }

    return [value, setValue]
}