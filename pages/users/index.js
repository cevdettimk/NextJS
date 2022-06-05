import styles from '../../styles/User.module.css';
import Link from 'next/link';

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
                <Link href={'/users/' + users.id} key={users.id}>
                    <a className={styles.single}>
                        <h3>{users.name}</h3>
                    </a>

                </Link>
            ))}
        </div>
     );
}
 
export default Users;