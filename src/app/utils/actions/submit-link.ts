"use server";

import createLink from "../create-link";

export default async function submitLink(formdata: FormData) {
  try {
    const response = createLink(formdata);
  } catch (e) {
    return { message: "Failed to create" };
  }
}
