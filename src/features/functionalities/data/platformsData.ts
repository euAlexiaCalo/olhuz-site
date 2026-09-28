import { PiPuzzlePieceLight } from "react-icons/pi";
import { IoIosPhonePortrait } from "react-icons/io";
import { AiOutlineDesktop } from "react-icons/ai";

export interface Platform {
    id: number;
    title: string;
    description: string;
    icon: React.ComponentType<{
        size?: number;
        strokeWidth?: number;
    }>;
    thickness?: number;
}

export const PLATFORMS: Platform[] = [
    {
    id: 1,
    title: 'Extensão',
    description: 'Chrome, Edge e Firefox',
    icon: PiPuzzlePieceLight,
  },
  {
    id: 2,
    title: 'App Mobile',
    description: 'iOS e Android',
    icon: IoIosPhonePortrait,
  },
  {
    id: 3,
    title: 'Integração Desktop',
    description: 'Windows e Mac',
    icon: AiOutlineDesktop,
  }
]