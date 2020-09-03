import React, { FC, ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => {
  return (
    <Container type="submit" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
