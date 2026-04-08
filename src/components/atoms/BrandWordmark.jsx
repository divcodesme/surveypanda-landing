import { Text } from '@chakra-ui/react'

import { designTokens } from '@/theme/designTokens'

export function BrandWordmark() {
  return (
    <Text
      fontFamily={designTokens.font.headline}
      fontWeight="800"
      letterSpacing="-0.02em"
      fontSize={{ base: 'xl', md: '2xl' }}
      color={designTokens.colors.primary}
    >
      SurveyPanda
    </Text>
  )
}

