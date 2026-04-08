import { Box, Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { Brain, ChartColumnIncreasing, Lightbulb, Trophy } from 'lucide-react'

import aiBuilderImg from '@/assets/ai-builder.svg'
import behaviorPredictionImg from '@/assets/behavior-prediction.svg'
import { designTokens } from '@/theme/designTokens'

import { FeatureCard } from '../molecules/FeatureCard'

const features = [
  {
    title: 'AI-Powered Builder',
    description:
      'Describe your survey in plain English and our AI prepares the perfect question flow in seconds.',
    icon: <Brain size={28} />,
    accentBg: designTokens.colors.primaryContainer,
    accentColor: designTokens.colors.primary,
    imageSrc: aiBuilderImg,
    imageAlt: 'AI-Powered Builder illustration',
  },
  {
    title: 'Real-time Analytics',
    description:
      'Instant visual intelligence. Watch your data sprout and grow into actionable charts in real-time.',
    icon: <ChartColumnIncreasing size={28} />,
    accentBg: designTokens.colors.secondaryContainer,
    accentColor: designTokens.colors.secondary,
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCjrE7VK1Rwg4CMgrw2Bcb7iWOoo3fAWw-60uge70LkPRmgcadoW1MuMcG_INctK1tyZT0BWFbAK8eRF_z6UGthu6xCesTqRIlsh8zwaWc5207Df_AyUO9eULu42wVP1G9EV7oRRGwMcdGh6AIiYwZPdcmxF993_cjqX2ynp1ozpLJP-mp9zhVzcyIGv61PLLuZalUihVFmol5PxMBIwGx3S6KCHASaMsX6DgNFIrJuVQlojlucxs_caRSR3fyqA3tKap54LUnP5ASL',
    imageAlt: 'Analytics Feature',
  },
  {
    title: 'Smart Decisions',
    description:
      "AI-driven actionable insights that highlight the 'Why' behind every respondent's 'What'.",
    icon: <Lightbulb size={28} />,
    accentBg: `${designTokens.colors.tertiaryContainer}CC`,
    accentColor: designTokens.colors.tertiary,
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAPhcrHLQl1ItB0fvM0RbCSZUQm4vmJIfdmtR64VPgOxePPsNJI45ntHM9_ym4wbjWZSk-7gUZKT_g4fp-Yvut9gxCKLH_umGL3UnSTtxuVytmyjoYZWJ9Ifu7CglaAhCzhGDqdBqkrmE1SPjeCD5AT_Idc1iL7rlm1iFRI1FAD06jCqK81Q7wpEuVzQNTtM7P6DuqR9oVfvVpV06zGMbL4wrgrblSm3s6JpIsTyoJZuv-5-_-wPcFo9s0qxHF2rDuyT76B_Z1sKUWQ',
    imageAlt: 'Decisions Feature',
  },
  {
    title: 'Behavior Prediction',
    description:
      'Anticipate respondent needs with machine learning models tuned for human nuance.',
    icon: <Trophy size={28} />,
    accentBg: designTokens.colors.primaryContainer,
    accentColor: designTokens.colors.primary,
    imageSrc: behaviorPredictionImg,
    imageAlt: 'Behavior Prediction illustration',
  },
]

export function FeaturesSection() {
  return (
    <Box as="section" id="features" py={{ base: '20', md: '32' }} bg={designTokens.colors.surface}>
      <Container maxW="7xl" px={{ base: '4', md: '8' }}>
        <VStack textAlign="center" maxW="3xl" mx="auto" gap="6" mb={{ base: '12', md: '20' }}>
          <Heading
            as="h2"
            fontFamily={designTokens.font.headline}
            fontWeight="800"
            letterSpacing="-0.02em"
            lineHeight="1.15"
            fontSize={{ base: '3xl', md: '5xl' }}
            color={designTokens.colors.onSurface}
          >
            Intuitive Tools for{' '}
            <Box as="span" color={designTokens.colors.primary}>
              Deep Intelligence
            </Box>
          </Heading>
          <Text fontSize="lg" color={designTokens.colors.onSurfaceVariant} lineHeight="1.7">
            We&apos;ve combined the serenity of nature with the precision of advanced artificial
            intelligence.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap="8" maxW="5xl" mx="auto">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

