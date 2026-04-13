import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'

import { designTokens } from '@/theme/designTokens'

import { GradientButton } from '../atoms/GradientButton'

export function FinalCtaSection() {
  return (
    <Box as="section" py={{ base: '16', md: '24' }} px={{ base: '0', md: '0' }}>
      <Container maxW="5xl" px={{ base: '4', md: '8' }}>
        <Box
          bg={designTokens.colors.surfaceLowest}
          borderRadius={designTokens.radii.xl}
          p={{ base: '10', md: '20' }}
          position="relative"
          overflow="hidden"
          boxShadow={designTokens.shadow.ambient}
          textAlign="center"
        >
          <Box
            position="absolute"
            top="-10"
            left="-10"
            width="160px"
            height="160px"
            bg={`${designTokens.colors.tertiaryContainer}33`}
            borderRadius="full"
            filter="blur(48px)"
          />
          <Box
            position="absolute"
            bottom="-10"
            right="-10"
            width="160px"
            height="160px"
            bg={`${designTokens.colors.primaryContainer}33`}
            borderRadius="full"
            filter="blur(48px)"
          />

          <VStack position="relative" gap="8">
            <Heading
              as="h2"
              fontFamily={designTokens.font.headline}
              fontWeight="800"
              letterSpacing="-0.02em"
              fontSize={{ base: '3xl', md: '5xl' }}
              color={designTokens.colors.onSurface}
            >
              Ready to let your insights grow?
            </Heading>

            <Text
              fontSize="lg"
              color={designTokens.colors.onSurfaceVariant}
              maxW="2xl"
              lineHeight="1.7"
            >
              Be among the first teams to use SurveyPanda and build stronger relationships with
              your audience from day one.
            </Text>

            <GradientButton px="12" py="7" fontSize={{ base: 'lg', md: 'xl' }}>
              Start Your Forest Today
            </GradientButton>
          </VStack>
        </Box>
      </Container>
    </Box>
  )
}

