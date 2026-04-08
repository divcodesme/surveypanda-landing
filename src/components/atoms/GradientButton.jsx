import { Button } from '@chakra-ui/react'

import { designTokens } from '@/theme/designTokens'

export function GradientButton(props) {
  const { children, ...rest } = props
  return (
    <Button
      borderRadius={designTokens.radii.full}
      px="10"
      py="6"
      fontFamily={designTokens.font.headline}
      fontWeight="800"
      fontSize={{ base: 'md', md: 'lg' }}
      color={designTokens.colors.onPrimary}
      bgImage={designTokens.gradient.bamboo}
      boxShadow={designTokens.shadow.ambient}
      transition="transform 200ms"
      _hover={{ transform: 'scale(0.98)' }}
      {...rest}
    >
      {children}
    </Button>
  )
}

