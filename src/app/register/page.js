import Button from "@/components/general/Button";
import Link from "next/link";

export default function Register() {
  return (
    <>
			<div className="flex flex-col gap-3">
				<input type="text" placeholder="Username" />
				<input type="text" placeholder="Phone number" />
				<input type="text" placeholder="password" />
				<input type="text" placeholder="confirm-password" />
				<Link href={`/dashboard`}>
					<Button text="Register" />
				</Link>
			</div>
      <div className="py-3"></div>
      <Link href={`/login`}>
        login
      </Link>
    </>
  );
}
