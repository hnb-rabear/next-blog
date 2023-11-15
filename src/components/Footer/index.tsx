"use client";
import { useForm } from "react-hook-form";
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import Link from "next/link";

function Footer() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();
  const onSubmit = (values) => console.log(values);
  console.log(errors);

  return (
    <>
      <footer className="mt-16 rounded-2xl bg-dark m-10 flex flex-col items-center text-light">
        <h4 className="mt-16 font-medium text-center capitalize text-4xl px-4">
          Interesting Stories | Updates | Guides
        </h4>
        <p className="mt-5 px-4 text-center w-3/5 font-light text-base">
          Subscribe to learn about new technology and updates. Join over 5000+
          members community to stay up to date with latest news.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 min-w-[384px] flex items-stretch bg-light p-2 rounded mx-4"
        >
          <input
            className="w-full bg-transparent text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1 pl-1"
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Required",
              maxLength: {
                value: 100,
                message: "Max length exceeded!"
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
              }
            })}
          />
          {errors.email && errors.email.message}

          <button
            type="submit"
            className="bg-dark text-light cursor-pointer font-medium rounded px-5 py-1"
          >
            Submit
          </button>
        </form>
        <div className="flex items-center my-8">
          <a href="/" className="inline-block w-6 h-6 mr-4">
            <LinkedinIcon className="hover:scale-125 ease duration-200" />
          </a>
          <a href="/" className="inline-block w-6 h-6 mr-4">
            <TwitterIcon className="hover:scale-125 ease duration-200" />
          </a>
          <a href="/" className="inline-block w-6 h-6 mr-4 fill-white">
            <GithubIcon className="hover:scale-125 ease duration-200" />
          </a>
          <a href="/" className="inline-block w-6 h-6 mr-4">
            <DribbbleIcon className="hover:scale-125 ease duration-200" />
          </a>
        </div>

        <div className="w-full mt-8 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-row items-center justify-between">
          <span className="text-center">
            &copy; 2023 CodeBucks. All rights reserved.
          </span>
          <Link href="sitemap.xml" className="text-center underline">
            sitemap.xml
          </Link>
          <div className="text-center">
            Made with &hearts; by{" "}
            <a href="#" className="underline">
              CodeBucks
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
