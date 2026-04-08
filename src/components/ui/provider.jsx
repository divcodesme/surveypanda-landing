import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

import { Toaster } from './toaster'

export function Provider(props) {
  const { children } = props
  return (
    <ChakraProvider value={defaultSystem}>
      {children}
      <Toaster />
    </ChakraProvider>
  )
}

