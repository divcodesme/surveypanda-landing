import { Box, Container, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { Sparkles } from 'lucide-react'

import pandaImg from '@/assets/panda.png'
import { designTokens } from '@/theme/designTokens'

import { GradientButton } from '../atoms/GradientButton'

function Pill() {
  return (
    <HStack
      bg={designTokens.colors.secondaryContainer}
      color={designTokens.colors.secondary}
      px="4"
      py="2"
      borderRadius={designTokens.radii.full}
      gap="2"
      width="fit-content"
    >
      <Box asChild>
        <Sparkles size={14} />
      </Box>
      <Text
        fontFamily={designTokens.font.headline}
        fontWeight="800"
        fontSize="xs"
        letterSpacing="0.12em"
        textTransform="uppercase"
      >
        AI-Powered Insights
      </Text>
    </HStack>
  )
}

export function HeroSection() {
  return (
    <Box as="section" pt={{ base: '28', md: '32' }} pb={{ base: '16', md: '20' }}>
      <Container maxW="7xl" px={{ base: '4', md: '8' }}>
        <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={{ base: '12', md: '16' }}>
          <VStack flex="1" align="start" gap="8">
            <Pill />

            <Heading
              as="h1"
              fontFamily={designTokens.font.headline}
              fontWeight="800"
              lineHeight="1.05"
              letterSpacing="-0.02em"
              color={designTokens.colors.primary}
              fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
            >
              Professional Surveys,{' '}
              <Box as="span" color={designTokens.colors.onSurface}>
                Organic Growth
              </Box>
            </Heading>

            <Text
              fontFamily={designTokens.font.body}
              fontSize={{ base: 'lg', md: 'xl' }}
              color={designTokens.colors.onSurfaceVariant}
              maxW="lg"
              lineHeight="1.7"
            >
              Build AI-powered surveys in seconds. Our bamboo-inspired interface makes data
              collection as natural as a morning walk in the forest.
            </Text>

            <HStack width="full" gap="4" flexWrap={{ base: 'wrap', sm: 'nowrap' }}>
              <GradientButton width={{ base: 'full', sm: 'auto' }}>
                Start Surveying Free
              </GradientButton>
              <GradientButton
                width={{ base: 'full', sm: 'auto' }}
                bgImage="none"
                bg={designTokens.colors.surfaceHighest}
                color={designTokens.colors.onSurface}
                boxShadow="none"
                _hover={{ bg: designTokens.colors.surfaceHigh, transform: 'none' }}
              >
                View Demo
              </GradientButton>
            </HStack>
          </VStack>

          <Box flex="1" position="relative" width="full">
            <Box
              position="absolute"
              top={{ base: '-8', md: '-12' }}
              left={{ base: '-8', md: '-12' }}
              width="260px"
              height="260px"
              bg={`${designTokens.colors.primaryContainer}4D`}
              borderRadius="full"
              filter="blur(48px)"
            />

            <Box
              position="relative"
              borderRadius={designTokens.radii.xl}
              overflow="hidden"
              bg={designTokens.colors.surfaceLow}
              boxShadow={designTokens.shadow.ambient}
            >
              <Image
                src={pandaImg}
                alt="Professional Panda Mascot"
                width="full"
                height="auto"
                objectFit="cover"
                transition="transform 700ms"
                _hover={{ transform: 'scale(1.05)' }}
              />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

