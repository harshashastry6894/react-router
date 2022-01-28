import { Outlet, useSearchParams } from 'react-router-dom';

export const Users = () => {
    const[searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active';
    return (
        <div>
            <h1>User 1</h1>
            <h1>User 2</h1>
            <h1>User 3</h1>
            <Outlet />
            <div>
                <button onClick={() => setSearchParams({filter:'active'})}>Active User</button>
                <button onClick={() => setSearchParams({})}>Reset Filter</button>
            </div>
            {
                showActiveUsers ? <h2>Active users</h2>: <h2> All Users</h2>
            }
        </div>
    )
}