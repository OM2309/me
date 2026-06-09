import Image from "next/image";

const Profile = () => {
  return (
    <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-850 bg-zinc-100 dark:bg-zinc-900 shadow-sm">
      <Image
        src="/images/dp.jpg"
        width={112}
        height={112}
        alt="profile"
        className="object-cover w-full h-full"
        priority
      />
    </div>
  );
};

export default Profile;
