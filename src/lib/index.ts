// Core styles
import './styles/neumorphic.css';

// Context & Theme
export { ThemeProvider, useNeumorphicTheme } from './context/ThemeContext';
export type { ThemeMode, ThemeContextType, ThemeProviderProps } from './context/ThemeContext';

// Components
export { Button } from './components/Button/Button';
export type { ButtonProps } from './components/Button/Button';

export { IconButton } from './components/IconButton/IconButton';
export type { IconButtonProps } from './components/IconButton/IconButton';

export {
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardContent,
  CardFooter,
} from './components/Card/Card';
export type { CardProps } from './components/Card/Card';

export { Switch } from './components/Switch/Switch';
export type { SwitchProps } from './components/Switch/Switch';

export { Input } from './components/Input/Input';
export type { InputProps } from './components/Input/Input';

export { Slider } from './components/Slider/Slider';
export type { SliderProps } from './components/Slider/Slider';

export { Progress } from './components/Progress/Progress';
export type { ProgressProps } from './components/Progress/Progress';

export { Avatar } from './components/Avatar/Avatar';
export type { AvatarProps } from './components/Avatar/Avatar';

export { Badge } from './components/Badge/Badge';
export type { BadgeProps } from './components/Badge/Badge';

export { Tabs } from './components/Tabs/Tabs';
export type { TabsProps, TabItem } from './components/Tabs/Tabs';

export { Modal } from './components/Modal/Modal';
export type { ModalProps } from './components/Modal/Modal';

export { Alert } from './components/Alert/Alert';
export type { AlertProps } from './components/Alert/Alert';

export { Tooltip } from './components/Tooltip/Tooltip';
export type { TooltipProps } from './components/Tooltip/Tooltip';

