import React from 'react';
import * as Icons from '@mui/icons-material';
import { SvgIconProps } from '@mui/material/SvgIcon';

interface IconProps extends SvgIconProps {
  name: keyof typeof Icons;
  style?: React.CSSProperties;
}

export function TabBarIcon({ name, style, ...rest }: IconProps) {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    console.error(`Icon ${name} does not exist in @mui/icons-material`);
    return null;
  }

  return <IconComponent style={{ marginBottom: -3, ...style }} {...rest} />;
}

