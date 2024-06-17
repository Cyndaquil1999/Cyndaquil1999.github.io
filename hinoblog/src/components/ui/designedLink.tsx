import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

export function DesignedLink(prop: Props) {
  return (
    <Link
      href={prop.href}
      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
    >
      {prop.text}
    </Link>
  );
}
