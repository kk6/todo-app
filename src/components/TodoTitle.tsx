import { Heading, HeadingProps } from '@chakra-ui/react';
import React from 'react';

export const TodoTitle: React.FC<HeadingProps> = ({
  title,
  as,
  fontSize,
  mt,
}) => {
  return (
    <Heading mt={mt} as={as} fontSize={fontSize} w="full">
      {title}
    </Heading>
  );
};
