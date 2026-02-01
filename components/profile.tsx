import Image from "next/image";

const Profile = () => {
  return (
    <div>
      <Image
        src="/images/dp.jpg"
        width={200}
        height={200}
        alt="profile"
        className="rounded-full"
      />
    </div>
  );
};

export default Profile;
