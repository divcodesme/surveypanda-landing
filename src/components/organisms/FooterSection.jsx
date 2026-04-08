import { Box, Container, Flex, HStack, Link, Text, VStack } from '@chakra-ui/react'
import { Globe, Leaf } from 'lucide-react'

import { designTokens } from '@/theme/designTokens'

function FooterColumn(props) {
  const { title, links } = props
  return (
    <Box>
      <Text
        fontFamily={designTokens.font.headline}
        fontWeight="800"
        textTransform="uppercase"
        letterSpacing="0.12em"
        fontSize="sm"
        color={designTokens.colors.primary}
        mb="6"
      >
        {title}
      </Text>
      <VStack align="start" gap="4">
        {links.map((l) => (
          <Link
            key={l}
            href="#"
            color="#64748b"
            textDecoration="underline"
            opacity={0.8}
            _hover={{ opacity: 1, color: '#059669' }}
          >
            {l}
          </Link>
        ))}
      </VStack>
    </Box>
  )
}

export function FooterSection() {
  return (
    <Box as="footer" mt={{ base: '12', md: '20' }} bg="#f8fafc" borderTopRadius={designTokens.radii.xl}>
      <Container maxW="7xl" px={{ base: '6', md: '12' }} py={{ base: '12', md: '16' }}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: '10', md: '12' }}
          justify="space-between"
        >
          <Box flex="1">
            <Text fontSize="xl" fontWeight="800" color="#064e3b" letterSpacing="-0.02em">
              SurveyPanda
            </Text>
            <Text mt="6" color="#64748b" lineHeight="1.7" maxW="sm">
              Empowering teams to make better decisions through organic data harvesting and AI
              precision.
            </Text>
          </Box>

          <FooterColumn title="Product" links={['Documentation', 'Features', 'Integrations']} />
          <FooterColumn title="Company" links={['Contact Us', 'Twitter', 'LinkedIn']} />
          <FooterColumn title="Legal" links={['Privacy Policy', 'Terms of Service']} />
        </Flex>

        <Box mt="12" pt="12" borderTopWidth="1px" borderTopColor="#e2e8f0">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align={{ base: 'start', md: 'center' }}
            justify="space-between"
            gap="6"
          >
            <Text color="#64748b">
              © 2024 SurveyPanda Atelier. Built with Organic Precision.
            </Text>
            <HStack gap="6" color="#065f46">
              <Box asChild cursor="pointer">
                <Globe size={20} />
              </Box>
              <Box asChild cursor="pointer">
                <Leaf size={20} />
              </Box>
            </HStack>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}

