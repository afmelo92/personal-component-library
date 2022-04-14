import {
  MagnifierIcon,
  MailIcon,
  SimcardIcon,
  LockIcon,
  RefreshIcon,
  CommandIcon,
  HomeIcon,
  CartIcon,
  AdminIcon,
  UsersIcon,
  AddFileIcon,
  ListIcon,
  UploadIcon,
  ALertCircleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CameraIcon,
  BackIcon,
  MenuIcon,
} from '../assets/Icons';

export function getIcon({ icon }) {
  switch (icon) {
    case 'admin':
      return <AdminIcon />;
    case 'home':
      return <HomeIcon />;
    case 'cart':
      return <CartIcon />;
    case 'magnifier':
      return <MagnifierIcon />;
    case 'simcard':
      return <SimcardIcon />;
    case 'mail':
      return <MailIcon />;
    case 'lock':
      return <LockIcon />;
    case 'refresh':
      return <RefreshIcon />;
    case 'command':
      return <CommandIcon />;
    case 'users':
      return <UsersIcon />;
    case 'add-file':
      return <AddFileIcon />;
    case 'list':
      return <ListIcon />;
    case 'upload':
      return <UploadIcon />;
    case 'alert':
      return <ALertCircleIcon />;
    case 'camera':
      return <CameraIcon />;
    case 'menu':
      return <MenuIcon />;
    case 'back':
      return <BackIcon />;
    case 'arrow-left':
      return <ArrowLeftIcon />;
    case 'arrow-right':
      return <ArrowRightIcon />;
    case 'spinner':
    default:
      return null;
  }
}
