"use client";
import { redirect } from "next/navigation";
import getLinkData from "../utils/get-link";
import { useEffect } from "react";

export default function Alias(props: { params: { alias: string } }) {
  useEffect(() => {
    const alias = props.params.alias;
    getLinkData(alias).then((data) => {
      if (!data) {
        redirect("/");
      }
      const shortLink = data?.link;
      redirect(!!shortLink ? shortLink : "/");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span>{"Redirecting...."}</span>;
}
