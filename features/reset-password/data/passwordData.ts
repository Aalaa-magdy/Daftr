import type { IconSvgElement } from "@hugeicons/react-native";
import Key01Icon from "@hugeicons/core-free-icons/Key01Icon";
import NewReleasesIcon from "@hugeicons/core-free-icons/NewReleasesIcon"
import SquareLockPasswordIcon from "@hugeicons/core-free-icons/SquareLockPasswordIcon"
export interface PasswordDataType {
    id: number;
    type:string,
    title: string;
    subtitle: string;
    icon: IconSvgElement; // Change to IconSvgElement type
}

export const passwordData: PasswordDataType[] = [
    {
        id: 1,
        type:"forget",
        title: "Forgot Password?",
        subtitle: "No worries, we'll send you reset instructions.",
        icon: Key01Icon // Now this works because Key01Icon is IconSvgElement type
    },
  
    {
        id:2,
        type:"check",
        title:"Check your email",
        subtitle:"Enter the 4-digit verification code sent to your email: ",
        icon:NewReleasesIcon
    },
      {
        id:3,
        type:"verify",
        title:"Set new password",
        subtitle:"Set a new password for your account.",
        icon:SquareLockPasswordIcon
    },
];

export default passwordData