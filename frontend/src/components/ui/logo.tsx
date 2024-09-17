import Link from "next/link";
import Image from "next/image";

type Props = {
    size: number;
}

export const Logo = ({size}: Props) => {
    return (
        <Link href="/">
            <Image
                alt="Zwitter"
                height={size}
                quality={100}
                width={size}
                src={'/logo.png'}
            />
        </Link>
    );
}
