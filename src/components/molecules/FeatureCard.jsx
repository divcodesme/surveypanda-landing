import { Box, Heading, Image, Text, VStack } from '@chakra-ui/react'

import { designTokens } from '@/theme/designTokens'

export function FeatureCard(props) {
  const { icon, title, description, imageSrc, imageAlt, accentBg, accentColor } = props
  return (
    <Box
      bg={designTokens.colors.surfaceLowest}
      p={{ base: '6', md: '8' }}
      borderRadius={designTokens.radii.lg}
      boxShadow={designTokens.shadow.ambient}
      transition="transform 300ms"
      _hover={{ transform: 'translateY(-8px)' }}
    >
      <VStack align="start" gap="6">
        <Box
          width="64px"
          height="64px"
          borderRadius="16px"
          display="grid"
          placeItems="center"
          bg={accentBg}
          color={accentColor}
        >
          {icon}
        </Box>

        <Box>
          <Heading
            as="h3"
            fontSize="xl"
            fontWeight="800"
            fontFamily={designTokens.font.headline}
            mb="3"
            color={designTokens.colors.onSurface}
          >
            {title}
          </Heading>
          <Text fontSize="sm" color={designTokens.colors.onSurfaceVariant} lineHeight="1.7">
            {description}
          </Text>
        </Box>

        <Box
          overflow="hidden"
          borderRadius="12px"
          height="128px"
          width="full"
          bg={designTokens.colors.surfaceLow}
        >
          <Image src={imageSrc} alt={imageAlt} width="full" height="full" objectFit="cover" />
        </Box>
      </VStack>
    </Box>
  )
}

