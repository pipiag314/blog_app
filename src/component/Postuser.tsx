
const getData = async (userId: number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    return res.json();
}

interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}


const Postuser = async ({ userId }: { userId: number }) => {
    const user: IUser = await getData(userId);
  return (
    <div className="flex flex-col">
      <p>Author</p>
      <p>{user.name} ({user.username})</p>
    </div>
  );
};
export default Postuser;
