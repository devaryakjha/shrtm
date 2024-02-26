import RedirectToLink from "./redirect_client";

export default async function Alias(props: { params: { link: string } }) {
  return <RedirectToLink link={props.params.link || "/"} />;
}
