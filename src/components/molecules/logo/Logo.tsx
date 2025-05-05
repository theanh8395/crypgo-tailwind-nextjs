import WrapperImage from "@/components/atoms/WrapperImage";
import Link from "next/link";
import image from "@/assets/images/logo/logo.svg";

const Logo = () => {
  return (
    <Link href="/" className="relative w-40 h-14">
      <WrapperImage
        className="absoluteImage"
        quality={100}
        src={image}
        alt="Logo"
        fill
      />
    </Link>
  );
};

export default Logo;
