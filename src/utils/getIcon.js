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
  CloseIcon,
  FileIcon,
} from '../assets/Icons';

export function getIcon({ icon, strokeWidth = 5 }) {
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
    case 'file':
      return <FileIcon />;
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
    case 'close':
      return <CloseIcon strokeWidth={strokeWidth} />;
    case 'menu':
      return <MenuIcon />;
    case 'back':
      return <BackIcon />;
    case 'arrow-left':
      return <ArrowLeftIcon />;
    case 'arrow-right':
      return <ArrowRightIcon />;
    default:
      return null;
  }
}
