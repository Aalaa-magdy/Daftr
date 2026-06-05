import LegalDocument01Icon from '@hugeicons/core-free-icons/LegalDocument01Icon';
import Globe02Icon from '@hugeicons/core-free-icons/Globe02Icon';
import MessageQuestionIcon from '@hugeicons/core-free-icons/MessageQuestionIcon';
import Settings01Icon from '@hugeicons/core-free-icons/Settings01Icon';
import ShieldUserIcon from '@hugeicons/core-free-icons/ShieldUserIcon';
import SquareLockPasswordIcon from '@hugeicons/core-free-icons/SquareLockPasswordIcon';
import StarIcon from '@hugeicons/core-free-icons/StarIcon';
import UserEdit01Icon from '@hugeicons/core-free-icons/UserEdit01Icon';
import type { IconSvgElement } from '@hugeicons/react-native';

export type ProfileMenuItem = {
  id: string;
  label: string;
  icon: IconSvgElement;
};

export type ProfileMenuSection = {
  id: string;
  title: string;
  items: ProfileMenuItem[];
};

export const PROFILE_MENU_SECTIONS: ProfileMenuSection[] = [
  {
    id: 'profile-settings',
    title: 'Profile Settings',
    items: [
      {
        id: 'edit-profile',
        label: 'Edit Profile Information',
        icon: UserEdit01Icon,
      },
      {
        id: 'change-password',
        label: 'Change Password',
        icon: SquareLockPasswordIcon,
      },
    ],
  },
  {
    id: 'app-settings',
    title: 'App Settings',
    items: [
      {
        id: 'language',
        label: 'Language',
        icon: Globe02Icon,
      },
    ],
  },
  {
    id: 'help-support',
    title: 'Help & Support',
    items: [
      {
        id: 'rate-us',
        label: 'Rate Us',
        icon: StarIcon,
      },
      {
        id: 'faq',
        label: 'Frequently Asked Questions',
        icon: MessageQuestionIcon,
      },
      {
        id: 'terms',
        label: 'Terms & Conditions',
        icon: LegalDocument01Icon,
      },
      {
        id: 'privacy',
        label: 'Privacy Policy',
        icon: ShieldUserIcon,
      },
    ],
  },
];

export const PROFILE_USER = {
  name: 'Salma Gamal',
  email: 'salmagamaal119@gmail.com',
  avatar: require('@/assets/images/profile.jpg'),
};
