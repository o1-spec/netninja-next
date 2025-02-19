import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      //router.go(-1);
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Oooops....</h1>
      <h2>
        That page cannot be NotFound
        <p>
          Go back to the
          <Link href="/">Homepage</Link>
        </p>
      </h2>
    </div>
  );
};

export default NotFound;
