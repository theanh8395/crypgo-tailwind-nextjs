import { CtLink } from "@/components/atoms";
import { Logo } from "@/components/molecules/logo";
import { footerlabels, headerData } from "@/utils";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-16 bg-darkmode">
      <div className="container px-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 lg:gap-20 md:gap-6 sm:gap-12 gap-6">
          <div className="lg:col-span-4 md:col-span-6 col-span-6 flex flex-col">
            <Logo />
            <div className="flex gap-6 items-center mt-8 relative z-1">
              <CtLink href="#" className="group">
                <Icon
                  icon="fa6-brands:facebook-f"
                  width="24"
                  height="24"
                  className="text-white group-hover:text-primary"
                />
              </CtLink>
              <CtLink href="#" className="group">
                <Icon
                  icon="fa6-brands:instagram"
                  width="24"
                  height="24"
                  className="text-white group-hover:text-primary"
                />
              </CtLink>
              <CtLink href="#" className="group">
                <Icon
                  icon="fa6-brands:x-twitter"
                  width="24"
                  height="24"
                  className="text-white group-hover:text-primary"
                />
              </CtLink>
            </div>
            <div className="sm:mt-20 mt-12">
              <h3 className="text-white text-24 font-medium">2025 Copright</h3>
              <CtLink
                className="text-white !text-24 font-medium hover:text-primary"
                target="_blank"
                href="https://getnextjstemplates.com/"
              >
                GetNextJs Templates
              </CtLink>
            </div>
          </div>
          <div className="lg:col-span-2 md:col-span-3 col-span-6">
            <h4 className="text-white mb-4 font-medium text-24">Links</h4>
            <div className="flex flex-col gap-4">
              {headerData.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-white hover:text-primary text-17"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 md:col-span-3 col-span-6">
            <h4 className="text-white mb-4 font-medium text-24">Information</h4>
            <div className="flex flex-col gap-4">
              {footerlabels.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-white hover:text-primary text-17"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
