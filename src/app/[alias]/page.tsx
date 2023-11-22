"use client";
import { redirect, useParams } from "next/navigation";
import getLinkData from "../utils/get-link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Alias() {
  const { query, pathname } = useRouter();
  useEffect(() => {
    const alias = query.alias as string;
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
