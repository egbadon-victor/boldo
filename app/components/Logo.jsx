import Image from "next/image";
import logo from "../../public/assets/img/logo-light.svg";

export default function Logo(props) {
  return (
    <div>
        
      <Image priority src={logo} alt="Logo" />
    </div>
  );
}
