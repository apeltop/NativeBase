import type { CustomProps } from 'src/components/types';
import type { InterfaceBoxProps } from '../../../components/primitives/Box/types';

export interface InterfaceCenterProps extends InterfaceBoxProps<ICenterProps> {}
export type ICircleProps = InterfaceBoxProps<ICircleProps> & {
  size?: number | string;
};
export type ISquareProps = InterfaceBoxProps<ISquareProps> & {
  size?: number | string;
};

export type ICenterProps = InterfaceCenterProps | CustomProps<'Center'>;
