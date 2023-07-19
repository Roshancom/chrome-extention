import * as DI from "react-icons/di";
import * as SI from "react-icons/si";
import * as FA from "react-icons/fa";

const ResolveIcon = ({ icon }) => {
  const iconResolverPack = (icon) => {
    switch (true) {
      case icon.toLowerCase().startsWith("di") && icon in DI: {
        return DI[icon];
      }
      case icon.toLowerCase().startsWith("si") && icon in SI: {
        return SI[icon];
      }
      case icon.toLowerCase().startsWith("fa") && icon in FA: {
        return FA[icon];
      }
      default:
        return () => <span></span>;
    }
  };

  const Component = iconResolverPack(icon);

  return <>{<Component />}</>;
};

export default ResolveIcon;
