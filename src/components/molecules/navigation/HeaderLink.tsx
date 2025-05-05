import { useDisclosure } from "@heroui/react";
import clsx from "clsx";
import { CtLink } from "@/components/atoms";
import { THeaderItem } from "@/utils";
import { useHash } from "@/lib";
import { motion } from "motion/react";

interface IHeaderLinkProps {
  item: THeaderItem;
}
const HeaderLink = ({ item }: IHeaderLinkProps) => {
  const hash = useHash();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleMouseEnter = () => {
    if (item.submenu) {
      onOpen();
    }
  };
  const handleMouseLeave = () => {
    onClose();
  };
  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CtLink
        href={item.href}
        className={clsx(
          "text-lg flex font-medium hover:text-primary capitalize",
          `/#${hash}` === item.href ? "text-primary" : " text-muted"
        )}
        as={undefined}
      >
        {item.label}
      </CtLink>
      {isOpen && (
        <motion.div
          className="absolute py-2 left-0 mt-0.5 w-60 bg-white shadow-lg rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        ></motion.div>
      )}
    </div>
  );
};

export default HeaderLink;
