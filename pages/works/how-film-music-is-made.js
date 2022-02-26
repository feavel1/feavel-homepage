import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="FCMA Music">
    <Container>
      <Title>
        FCMA Film Music <Badge>2021</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/freedbtagger_icon.gif" alt="icon" />
      </Center>
      <P>A speach about film music and how it is made</P>
      <P>The speach was given at FCMA Film Club</P>
      <P>
        We looked at how the music was made in the begining when cinema was
        invented, next we took a closer look how it was composed. After that we
        had a look at what music had become in the world of cinema.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Location</Meta>
          <span>FCMA Film Club</span>
        </ListItem>
        <ListItem>
          <Meta>Duration</Meta>
          <span>2h</span>
        </ListItem>
        <ListItem>
          <Meta>Reference</Meta>
          <span>Point Blank Music School, Music in Film</span>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>2022/02/26</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://www.notion.so/fcma/73985fe906514d6ea70852d2e42a1e56">
            <Badge mr={2}>Class Page</Badge>FCMA Film Music{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>
          See the project{'  '}
          <Link
            target="_blank"
            href="https://www.notion.so/fcma/e0476d561806407b9f8b1be7379dc18d?v=718a019259124d35b9482c5a54abc279"
          >
            {'  '}on Notion
          </Link>
        </Center>
      </Heading>

      <WorkImage
        src="/images/feavelPic/works/oldWorks/music2.jpg"
        alt="freeDBTagger"
      />
      <WorkImage
        src="/images/feavelPic/works/oldWorks/music1.png"
        alt="freeDBTagger"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
