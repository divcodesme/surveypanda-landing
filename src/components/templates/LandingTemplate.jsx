import { Box } from '@chakra-ui/react'

import { designTokens } from '@/theme/designTokens'

export function LandingTemplate(props) {
  const { topNav, hero, trustedBy, features, pricing, finalCta, footer } = props
  return (
    <Box
      minH="100svh"
      bg={designTokens.colors.surface}
      color={designTokens.colors.onSurface}
      fontFamily={designTokens.font.body}
    >
      {topNav}
      {hero}
      {trustedBy}
      {features}
      {pricing}
      {finalCta}
      {footer}
    </Box>
  )
}

