import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoWechat
} from 'react-icons/io5'
import thumbYouTube from '../public/images/feavelPic/recentMusic.jpg'
import thumbInkdrop from '../public/images/feavelPic/helloKitty.jpg'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

function Home() {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          STATUE OF ULYSSES BENEATH A RAM
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Feavel
            </Heading>
            <p>intellectual ( Sound engenier / Developer / Thinker )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/feavel.jpg"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Baby Feavel is a sound engenier/thinker based in China. Passionate
            about his works and developments, always trying to make new
            music/stuff. At the same time trying to launch products and make
            more friends around the world 🌍 .{' '}
            <NextLink href="/works/dark-birds-fly" scroll={false}>
              <Link>Album</Link>
            </NextLink>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2004</BioYear>
            Born in Blagoveshchensk (Блaгoвeщeнcк), Russia.
          </BioSection>
          <BioSection>
            <BioYear>2012</BioYear>
            Moved to China (广东 - 深圳)
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Completed Master&apos;s Music degree in the Point Blank Music School
            (Award-winning music school with interactive classes up to
            Bachelor&apos;s Degree)
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Specialist Web-deveoper degree in the Institute of information &
            Technology (深圳信息职业技术学院｜移动互联网应用开发)
          </BioSection>

          <BioSection>
            <BioYear>2018 -</BioYear>
            Works as a freelance
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            ♥ Hobbies ♥
          </Heading>
          <Paragraph>
            Coding, Art,{' '}
            <Link
              href="https://music.163.com/#/artist/album?id=32460361"
              target="_blank"
            >
              Music
            </Link>
            , Playing Piano, Lumix, Film making
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/feavel1" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @feavel1
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/FEAVEL18" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                >
                  @FEAVEL18
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/babyfeavel/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @babyfeavel
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoWechat />}
              >
                tanuki20966
              </Button>
            </ListItem>
          </List>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://music.163.com/#/playlist?id=5085085377"
              title="Listen To My Recent Music"
              thumbnail={thumbYouTube}
            >
              My Net Ease Music
            </GridItem>
            <GridItem
              href="https://ali3n-babi3s.vercel.app"
              title="My Cutest Girl-friend"
              thumbnail={thumbInkdrop}
            >
              My daily life
            </GridItem>
          </SimpleGrid>

          <Box align="center" my={4}>
            <NextLink href="/posts" scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Popular posts
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
