import { useEffect, useState } from "react";
import { getAllUsers as getAllUsersService } from "../../services/UserService"

export const SearchBar = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    const filter = users.filter(user => user.firstName.toLowerCase().includes(search.toLowerCase()))

    const handleSearchChange = event => {
        const { value } = event.target;
        setSearch(value);

        useEffect(() => {
            getAllUsersService()
                .then(users => {
                    setUsers(users);
                })
                .catch(err => console.error(err))

        }, []);

        return (
            <div>
                <div className="input-group mb-3">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={search} onChange={handleSearchChange} />
                    <button type="button" className="btn btn-outline-dark" onClick={() => setSearch("")}>Clear</button>
                </div>
                {/*<ul>
                    {!search
                        ?
                        users.map(user => (
                            <li key={user.id}>{user.firstName}</li>
                        ))
                        : filter.map(user => (
                            <li key={user.id}>{user.firstName}</li>

                        ))
                    }
                </ul>*/}
            </div >
        );
    }
}
