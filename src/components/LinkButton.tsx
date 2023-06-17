import Link from "next/link";

interface Props {
  content: string;
  link: string;
  blank?: boolean;
}

const LinkButton = ({ content, link, blank }: Props) => {
  return (
    <Link href={link} target={blank ? "_blank" : ""}>
      <button className="link-button">{content}</button>
    </Link>
  );
};

export default LinkButton;
