import LoginForm from "@/components/forms/LoginForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-image min-h-screen w-full flex justify-center items-center">
      <div className="card w-[90%] md:w-2/3 lg:w-2/5 bg-base-100 rounded-lg">
        <div className="card-body">
          {/* FORM */}
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
