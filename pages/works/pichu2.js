import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="FCMA">
    <Container>
      <Title>
        FCMA psychoanaysis academy <Badge>2010</Badge>
      </Title>
      <P>
        This was a speach about psychology and psychoanaysis that I gave at FCMA
        film club. The speach is mainly about Lacans three worlds and
        Zizek&apos;s happines. How psychoanaysis can help us in the everyday
        life.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Location</Meta>
          <span>FCMA film club, Shenzhen</span>
        </ListItem>
        <ListItem>
          <Meta>Duration</Meta>
          <span>2 hours</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://www.notion.so/fcma/c8a36861b7a24d1191b578bf7d18c079">
            <Badge mr={2}>影视协会官网</Badge>
            FCMA Home page <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://www.notion.so/fcma/ebf1c51f9f6d455882cd86c9b312b1a6">
            <Badge mr={2}>影视协会哲学课</Badge>
            FCMA Phylosophy Page <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <WorkImage
        src="/images/feavelPic/works/oldWorks/psy2.jpg"
        alt="Pichu*Pichu"
      />
      <WorkImage
        src="/images/feavelPic/works/oldWorks/psy3.png"
        alt="Pichu*Pichu"
      />
      <WorkImage
        src="/images/feavelPic/works/oldWorks/psy5.png"
        alt="Pichu*Pichu"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
