import {
  SlSocialTwitter,
  SlSocialInstagram,
  SlSocialReddit,
  SlSocialGithub,
  SlSocialSoundcloud,
  SlMagnet,
} from "react-icons/sl";
import {
  SiGrafana,
  SiHelm,
  SiKubernetes,
  SiNetflix,
  SiOpenai,
  SiPortainer,
  SiVsco,
  SiZalando,
} from "react-icons/si";
import { AiFillCloud, AiOutlineRead, AiOutlineYoutube } from "react-icons/ai";
import { BiRss } from "react-icons/bi";
import { BsTwitch } from "react-icons/bs";
import { TbBrandGmail, TbCurrencyBitcoin, TbServer } from "react-icons/tb";
import { GiClothes, GiComputerFan } from "react-icons/gi";
import { IoLogoReddit } from "react-icons/io";
import { RiVisaFill } from "react-icons/ri";
import { RxClipboardCopy } from "react-icons/rx";

export default function Bookmarks(): JSX.Element {
  const socialLinks = [
    {
      href: "https://www.instagram.com/",
      icon: <SlSocialInstagram className="hidden md:block" size={20} />,
      text: "instagram",
    },
    {
      href: "https://www.twitter.com/",
      icon: <SlSocialTwitter className="hidden md:block" size={20} />,
      text: "twitter",
    },
    {
      href: "https://www.reddit.com/",
      icon: <SlSocialReddit className="hidden md:block" size={20} />,
      text: "reddit",
    },
    {
      href: "https://www.vsco.co/",
      icon: <SiVsco className="hidden md:block" size={20} />,
      text: "vsco",
    },
  ];

  const newsLinks = [
    {
      href: "http://192.168.1.3:3020/unread",
      icon: <BiRss className="hidden md:block" size={20} />,
      text: "miniflux",
    },
    {
      href: "https://korben.info/",
      icon: <AiOutlineRead className="hidden md:block" size={20} />,
      text: "korben",
    },
    {
      href: "https://noted.lol/",
      icon: <AiOutlineRead className="hidden md:block" size={20} />,
      text: "noted",
    },
    {
      href: "https://www.xda-developers.com/",
      icon: <AiOutlineRead className="hidden md:block" size={20} />,
      text: "XDA-developers",
    },
    {
      href: "https://www.frandroid.com/",
      icon: <AiOutlineRead className="hidden md:block" size={20} />,
      text: "frandroid",
    },
    {
      href: "https://sneakernews.com/",
      icon: <AiOutlineRead className="hidden md:block" size={20} />,
      text: "sneakers news",
    },
  ];

  const mediaLinks = [
    {
      href: "https://www.youtube.com/",
      icon: <AiOutlineYoutube className="hidden md:block" size={20} />,
      text: "youtube",
    },
    {
      href: "https://www.soundcloud.com/",
      icon: <SlSocialSoundcloud className="hidden md:block" size={20} />,
      text: "soundcloud",
    },

    {
      href: "https://netflix.com/",
      icon: <SiNetflix className="hidden md:block" size={20} />,
      text: "netflix",
    },
    {
      href: "https://www.twitch.com/",
      icon: <BsTwitch className="hidden md:block" size={20} />,
      text: "twitch",
    },
  ];

  const productivityLinks = [
    {
      href: "https://app.raindrop.io/",
      icon: <AiFillCloud className="hidden md:block" size={20} />,
      text: "raindrop",
    },
    {
      href: "https://github.com/",
      icon: <SlSocialGithub className="hidden md:block" size={20} />,
      text: "github",
    },
    {
      href: "https://gmail.com/",
      icon: <TbBrandGmail className="hidden md:block" size={20} />,
      text: "gmail",
    },
    {
      href: "https://chat.openai.com/",
      icon: <SiOpenai className="hidden md:block" size={20} />,
      text: "chatgpt",
    },
  ];

  const shopLinks = [
    {
      href: "https://www.digitec.ch/",
      icon: <GiComputerFan className="hidden md:block" size={20} />,
      text: "digitec",
    },
    {
      href: "https://www.microspot.ch/fr",
      icon: <GiComputerFan className="hidden md:block" size={20} />,
      text: "microspot",
    },
    {
      href: "https://www.asos.com/",
      icon: <GiClothes className="hidden md:block" size={20} />,
      text: "asos",
    },
    {
      href: "https://github.com/",
      icon: <SiZalando className="hidden md:block" size={20} />,
      text: "zalando lounge",
    },
  ];

  const redditLinks = [
    {
      href: "https://www.reddit.com/r/homelab/",
      icon: <IoLogoReddit className="hidden md:block" size={20} />,
      text: "r/homelab",
    },
    {
      href: "https://www.reddit.com/r/selfhosted/",
      icon: <IoLogoReddit className="hidden md:block" size={20} />,
      text: "r/selfhosted",
    },
  ];

  const homelabLinks = [
    {
      href: "http://192.168.1.3:3000/",
      icon: <TbServer className="hidden md:block" size={20} />,
      text: "dashboard",
    },
    {
      href: "http://192.168.1.3:9000/",
      icon: <SiPortainer className="hidden md:block" size={20} />,
      text: "portainer",
    },
    {
      href: "http://192.168.1.3:3002/",
      icon: <SiGrafana className="hidden md:block" size={20} />,
      text: "grafana",
    },
    {
      href: "http://192.168.1.3:8080/",
      icon: <SlMagnet className="hidden md:block" size={20} />,
      text: "qbitorrent",
    },
  ];

  const otherLinks = [
    {
      href: "https://one.viseca.ch/login/",
      icon: <RiVisaFill className="hidden md:block" size={20} />,
      text: "viseca",
    },
    {
      href: "https://www.coinbase.com/fr",
      icon: <TbCurrencyBitcoin className="hidden md:block" size={20} />,
      text: "coinbase",
    },
  ];

  const shortcutsLinks = [
    {
      href: "https://carbon.now.sh/",
      icon: <RxClipboardCopy className="hidden md:block" size={20} />,
      text: "carbon",
    },
    {
      href: "https://kubernetes.io/docs/reference/kubectl/cheatsheet/",
      icon: <SiKubernetes className="hidden md:block" size={20} />,
      text: "kubectl cheat sheet",
    },
    {
      href: "https://helm.sh/docs/helm/",
      icon: <SiHelm className="hidden md:block" size={20} />,
      text: "helm doc",
    },
  ];
  const renderLinks = (
    links: { href: string; icon: JSX.Element; text: string }[]
  ) => {
    return (
      <ul className="mt-6 Link-list list-none">
        {links.map((link, index) => (
          <li key={index}>
            <a
              role="button"
              className="btn btn-ghost btn-sm gap-2 truncate  lowercase font-medium text-base"
              href={link.href}
            >
              {link.icon}
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className="card bg-neutral text-neutral-content shadow-xl">
        <div className="card-body">
          <div className="col-start-2 text-center">
            <h3 className="text-accent text-xl font-semibold">Social</h3>
            {renderLinks(socialLinks)}
          </div>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-accent text-xl font-semibold">News</h3>
        {renderLinks(newsLinks)}
      </div>
      <div className="text-center">
        <h3 className="text-accent text-xl font-semibold">Media</h3>
        {renderLinks(mediaLinks)}
      </div>
      {/* row #2 */}
      <div className="col-start-2 text-center">
        <h3 className="text-accent text-xl font-semibold">Productivity</h3>
        {renderLinks(productivityLinks)}
      </div>
      <div className="text-center">
        <h3 className="text-accent text-xl font-semibold">Shops</h3>
        {renderLinks(shopLinks)}
      </div>
      <div className="text-center">
        <h3 className="text-accent text-xl font-semibold">r/eddit</h3>
        {renderLinks(redditLinks)}
      </div>
      {/* row #3 */}
      <div className="col-start-2 text-center">
        <h3 className="text-accent text-xl font-semibold">Homelab</h3>
        {renderLinks(homelabLinks)}
      </div>
      <div className="text-center">
        <h3 className="text-accent text-xl font-semibold">Other</h3>
        {renderLinks(otherLinks)}
      </div>
      <div className="text-center">
        <h3 className="text-accent text-xl font-semibold">Shortcuts</h3>
        {renderLinks(shortcutsLinks)}
      </div>
    </>
  );
}
