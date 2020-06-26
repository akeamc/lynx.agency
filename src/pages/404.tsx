import Link from "next/link";

const Page = () => (
  <>
    <p>
      <strong>404</strong> Page not found
    </p>
    <p>
      Perhaps you want to <Link href="/">go back</Link>?
    </p>
  </>
);

export default Page;
