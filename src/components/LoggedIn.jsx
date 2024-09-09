export default function LoggedIn({ username, email }) {
  return (
    <main className="flex items-center min-h-dvh justify-center">
      <section className="flex max-w-[470px] w-full rounded-[12px] p-[20px_30px_120px] bg-[#4070f4] shadow-[0_5px_10px_rgba(0,0,0,0.1)]">
        <div className="text-white flex flex-col gap-12 items-center justify-center">
          <span>{username ? username : "some default username"}</span>
          <span>{email ? email : "some default email"}</span>
        </div>
      </section>
    </main>
  );
}
