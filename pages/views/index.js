import styles from '../../styles/User.module.css';

export const getStaticProps = async () =>{
    const  res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return {
        props :{users : data}
    }
}

const Users = ({users}) => {
    return ( 
        <div>
            <h1>User List</h1>
            {users.map(users => (
                <div key={users.id}>
                    <a className={styles.single}>
                        <h3>{users.name}</h3>
                    </a>

                </div>
            ))}
        </div>
     );
}
 
export default Users;