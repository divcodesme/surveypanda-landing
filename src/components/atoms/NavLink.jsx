import { Link } from '@chakra-ui/react'

import { designTokens } from '@/theme/designTokens'

export function NavLink(props) {
  const { active = false, children, ...rest } = props
  return (
    <Link
      fontFamily={designTokens.font.headline}
      fontWeight="700"
      color={active ? designTokens.colors.primary : designTokens.colors.onSurfaceVariant}
      textDecoration="none"
      borderBottomWidth={active ? '2px' : '0px'}
      borderBottomColor={designTokens.colors.primary}
      _hover={{ color: designTokens.colors.primary }}
      {...rest}
    >
      {children}
    </Link>
  )
}

