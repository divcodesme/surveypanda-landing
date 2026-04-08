import { Box, Container, Heading, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { CheckCircle2, Leaf, Trees } from 'lucide-react'

import { designTokens } from '@/theme/designTokens'

import { GradientButton } from '../atoms/GradientButton'

function Bullet(props) {
  const { children, tone = 'primary' } = props
  const color = tone === 'onPrimary' ? designTokens.colors.onPrimary : designTokens.colors.primary
  return (
    <HStack gap="3" align="start">
      <Box asChild color={color} mt="0.5">
        <CheckCircle2 size={18} />
      </Box>
      <Text>{children}</Text>
    </HStack>
  )
}

export function PricingSection() {
  return (
    <Box as="section" id="pricing" py={{ base: '20', md: '32' }} bg={designTokens.colors.surfaceLow}>
      <Container maxW="5xl" px={{ base: '4', md: '8' }}>
        <VStack textAlign="center" gap="4" mb={{ base: '12', md: '20' }}>
          <Heading
            as="h2"
            fontFamily={designTokens.font.headline}
            fontWeight="800"
            letterSpacing="-0.02em"
            fontSize={{ base: '3xl', md: '4xl' }}
            color={designTokens.colors.onSurface}
          >
            Transparent Pricing for Every Scale
          </Heading>
          <Text color={designTokens.colors.onSurfaceVariant}>
            Whether you&apos;re just a sprout or a giant bamboo forest.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: '8', md: '12' }} alignItems="center">
          <Box
            bg={designTokens.colors.surfaceLowest}
            p={{ base: '8', md: '12' }}
            borderRadius={designTokens.radii.xl}
            boxShadow={designTokens.shadow.ambient}
            position="relative"
            overflow="hidden"
          >
            <Box position="absolute" top="6" right="6" opacity="0.06">
              <Box asChild color={designTokens.colors.onSurface}>
                <Leaf size={96} />
              </Box>
            </Box>

            <VStack align="start" gap="2" position="relative">
              <Heading
                as="h3"
                fontFamily={designTokens.font.headline}
                fontWeight="800"
                fontSize="2xl"
              >
                Lite
              </Heading>
              <Text color={designTokens.colors.onSurfaceVariant}>For play and exploration</Text>
            </VStack>

            <HStack align="baseline" mt="8" mb="8">
              <Text
                fontSize="5xl"
                fontWeight="900"
                color={designTokens.colors.primary}
                lineHeight="1"
              >
                $0
              </Text>
              <Text color={designTokens.colors.onSurfaceVariant} fontWeight="800">
                forever
              </Text>
            </HStack>

            <VStack align="start" gap="4" mb="10" color={designTokens.colors.onSurface}>
              <Bullet>Up to 100 responses/mo</Bullet>
              <Bullet>Standard 3D Builder</Bullet>
              <Bullet>Community Support</Bullet>
            </VStack>

            <GradientButton
              width="full"
              bgImage="none"
              bg="transparent"
              color={designTokens.colors.primary}
              borderWidth="2px"
              borderColor={designTokens.colors.primaryContainer}
              boxShadow="none"
              _hover={{ bg: `${designTokens.colors.primaryContainer}1A`, transform: 'none' }}
            >
              Start for Free
            </GradientButton>
          </Box>

          <Box
            bgImage={designTokens.gradient.bamboo}
            p={{ base: '8', md: '12' }}
            borderRadius={designTokens.radii.xl}
            boxShadow={designTokens.shadow.ambient}
            position="relative"
            overflow="hidden"
            color={designTokens.colors.onPrimary}
          >
            <Box position="absolute" top="6" right="6" opacity="0.12">
              <Box asChild>
                <Trees size={96} />
              </Box>
            </Box>

            <Box position="relative">
              <Heading
                as="h3"
                fontFamily={designTokens.font.headline}
                fontWeight="800"
                fontSize="2xl"
                mb="2"
              >
                Self-Hosted
              </Heading>
              <Text opacity={0.85} mb="8">
                Professional control &amp; enterprise scale
              </Text>

              <Text fontSize="3xl" fontWeight="900" mb="8">
                Custom Pricing
              </Text>

              <VStack align="start" gap="4" mb="10">
                <Bullet tone="onPrimary">Unlimited responses</Bullet>
                <Bullet tone="onPrimary">Complete Data Ownership</Bullet>
                <Bullet tone="onPrimary">White-label branding</Bullet>
                <Bullet tone="onPrimary">24/7 Premium Support</Bullet>
              </VStack>

              <GradientButton
                width="full"
                bgImage="none"
                bg={designTokens.colors.surface}
                color={designTokens.colors.primary}
                boxShadow="lg"
                _hover={{ transform: 'scale(0.98)' }}
              >
                Talk to Sales
              </GradientButton>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

