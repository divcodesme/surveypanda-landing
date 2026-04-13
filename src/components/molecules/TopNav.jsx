import { Box, Container, Flex, HStack } from '@chakra-ui/react'
import { useState } from 'react'

import { designTokens } from '@/theme/designTokens'

import { BrandWordmark } from '../atoms/BrandWordmark'
import { GradientButton } from '../atoms/GradientButton'
import { NavLink } from '../atoms/NavLink'

export function TopNav() {
  const [activeItem, setActiveItem] = useState('product')

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="sticky"
      bg="rgba(255,255,255,0.7)"
      backdropFilter="blur(24px)"
      boxShadow="0 20px 40px -20px rgba(0,0,0,0.20)"
    >
      <Container maxW="7xl" px={{ base: '4', md: '8' }} py="4">
        <Flex align="center" justify="space-between" gap="6">
          <BrandWordmark />

          <HStack gap="10" display={{ base: 'none', md: 'flex' }}>
            <NavLink
              href="#"
              active={activeItem === 'product'}
              onClick={() => setActiveItem('product')}
            >
              Product
            </NavLink>
            <NavLink
              href="#features"
              active={activeItem === 'features'}
              onClick={() => setActiveItem('features')}
            >
              Features
            </NavLink>
            <NavLink
              href="#pricing"
              active={activeItem === 'pricing'}
              onClick={() => setActiveItem('pricing')}
            >
              Pricing
            </NavLink>
          </HStack>

          <HStack gap="6">
            <NavLink href="#" display={{ base: 'none', sm: 'inline-flex' }}>
              Login
            </NavLink>
            <GradientButton size="sm" px="6" py="5" fontSize="sm">
              Get Started
            </GradientButton>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

