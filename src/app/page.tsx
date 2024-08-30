import Image from "next/image";
import axios from "axios";

async function getUserData() {
  await new Promise((r) => setTimeout(r, 2000));
  const response = await axios.get(
    "http://localhost:3000/api/user"
  );
  return response.data;
}

export default async function Home() {
  const userDetails = await getUserData();

  return (
    <div className="flex flex-row items-center justify-center">
      {userDetails.email}
      {userDetails.name}
    </div>
  );
}
