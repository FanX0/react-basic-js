import {useNavigate, useSearchParams} from "react-router";
import {useState} from "react";

export default function ProductSearch() {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate();
    const [search, setSearch] = useState(searchParams.get("search") || "");
    
    function handleSearch(){
        if (search) {
            navigate({
                pathname: "/data/products/search",
                search: `search=${search}`
            })
        }
    }
    return (
        <div>
            <input value={search} onChange={e => setSearch(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
            <p>
                Search: {searchParams.get("search")}
            </p>
        </div>
    )
}