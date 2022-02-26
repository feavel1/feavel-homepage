import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="LUCR">
    <Container>
      <Title>
        Life Under a Cold Roof <Badge>2015</Badge>
      </Title>
      <P>
        A colaborative album written and mixed by Feavel, with vocals of
        FimaBoiz.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Net Ease (网易云音乐)</span>
        </ListItem>
        <ListItem>
          <Meta>link</Meta>
          <Link href="https://music.163.com/#/album?id=92576490">
            Life Under a Cold Roof <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Traks</Meta>
          <span>6 traks in Stereo 48kb/s </span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <WorkImage src="/images/feavelPic/works/IMG_2266.jpg" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
