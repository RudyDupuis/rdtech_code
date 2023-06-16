import Link from "next/link";

interface Props {
  content: string;
  link: string;
}

const LinkButton = ({ content, link }: Props) => {
  return (
    <Link href={link}>
      <button className="link-button">{content}</button>
    </Link>
  );
};

export default LinkButton;
