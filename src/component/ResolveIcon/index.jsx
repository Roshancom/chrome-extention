import * as DI from "react-icons/di";
import * as SI from "react-icons/si";
import * as FA from "react-icons/fa";
import * as GI from "react-icons/gi";
import * as AI from "react-icons/ai";
import * as BS from "react-icons/bs";
import * as BI from "react-icons/bi";
import * as CI from "react-icons/ci";
import * as FI from "react-icons/fi";
import * as FC from "react-icons/fc";
import * as GO from "react-icons/go";
import * as GR from "react-icons/gr";
import * as HI from "react-icons/hi";
import * as IM from "react-icons/im";
import * as LIA from "react-icons/lia";
import * as IO from "react-icons/io";
import * as LU from "react-icons/lu";
import * as MD from "react-icons/md";
import * as PI from "react-icons/pi";
import * as RX from "react-icons/rx";
import * as RI from "react-icons/ri";
import * as SL from "react-icons/sl";
import * as TB from "react-icons/tb";
import * as TFI from "react-icons/tfi";
import * as TI from "react-icons/ti";
import * as VSC from "react-icons/vsc";
import * as WI from "react-icons/wi";
import * as CG from "react-icons/cg";

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
      case icon.toLowerCase().startsWith("gi") && icon in GI: {
        return GI[icon];
      }
      case icon.toLowerCase().startsWith("ai") && icon in AI: {
        return AI[icon];
      }
      case icon.toLowerCase().startsWith("bs") && icon in BS: {
        return BS[icon];
      }
      case icon.toLowerCase().startsWith("bi") && icon in BI: {
        return BI[icon];
      }
      case icon.toLowerCase().startsWith("ci") && icon in CI: {
        return CI[icon];
      }
      case icon.toLowerCase().startsWith("fi") && icon in FI: {
        return FI[icon];
      }
      case icon.toLowerCase().startsWith("fc") && icon in FC: {
        return FC[icon];
      }
      case icon.toLowerCase().startsWith("go") && icon in GO: {
        return GO[icon];
      }
      case icon.toLowerCase().startsWith("gr") && icon in GR: {
        return GR[icon];
      }
      case icon.toLowerCase().startsWith("hi") && icon in HI: {
        return HI[icon];
      }
      case icon.toLowerCase().startsWith("go") && icon in IM: {
        return IM[icon];
      }
      case icon.toLowerCase().startsWith("lia") && icon in LIA: {
        return LIA[icon];
      }
      case icon.toLowerCase().startsWith("io") && icon in IO: {
        return IO[icon];
      }
      case icon.toLowerCase().startsWith("lu") && icon in LU: {
        return LU[icon];
      }
      case icon.toLowerCase().startsWith("md") && icon in MD: {
        return MD[icon];
      }
      case icon.toLowerCase().startsWith("pi") && icon in PI: {
        return PI[icon];
      }
      case icon.toLowerCase().startsWith("rx") && icon in RX: {
        return RX[icon];
      }
      case icon.toLowerCase().startsWith("ri") && icon in RI: {
        return RI[icon];
      }
      case icon.toLowerCase().startsWith("sl") && icon in SL: {
        return SL[icon];
      }
      case icon.toLowerCase().startsWith("tb") && icon in TB: {
        return TB[icon];
      }
      case icon.toLowerCase().startsWith("tfi") && icon in TFI: {
        return TFI[icon];
      }
      case icon.toLowerCase().startsWith("ti") && icon in TI: {
        return TI[icon];
      }
      case icon.toLowerCase().startsWith("vsc") && icon in VSC: {
        return VSC[icon];
      }
      case icon.toLowerCase().startsWith("wi") && icon in WI: {
        return WI[icon];
      }
      case icon.toLowerCase().startsWith("cg") && icon in CG: {
        return CG[icon];
      }
      default:
        return () => <span></span>;
    }
  };

  const Component = iconResolverPack(icon);

  return <>{<Component />}</>;
};

export default ResolveIcon;
