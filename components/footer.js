import { Box } from '@chakra-ui/react'

function Footer() {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Baby Feavel. All Rights Reserved.
    </Box>
  )
}

export default Footer
