import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="FCMA">
    <Container>
      <Title>
        FCMA <Badge>2021 - now</Badge>
      </Title>
      <P>A photography and film organization based in China</P>
      <P>
        It is a project launched at Shenzhen Institute{' '}
        <Link
          href="https://www.notion.so/fcma/c8a36861b7a24d1191b578bf7d18c079"
          target="_blank"
        >
          FCMA 官网 <ExternalLinkIcon mx="2px" />
        </Link>
        , aiming to visualize the impact of media contents on the visit of
        foreign high-intellect class to Japan, who are highly interested in
        photography. I joined the project to build its webpage using notion.
      </P>
      <P>
        Also I applied to teach phylosophy and phychoanalysis in the club, to
        increase the vision and club&apos;s content.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Notion</span>
        </ListItem>
        <ListItem>
          <Meta>Work</Meta>
          <span>Web design, teaching</span>
        </ListItem>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://www.notion.so/fcma/c8a36861b7a24d1191b578bf7d18c079">
            FCMA home {'  '} <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/feavelPic/works/fcma.png" alt="mode.tokyo" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/feavelPic/works/fcmaCov.jpg" alt="mode.tokyo" />
        <WorkImage
          src="/images/feavelPic/works/fcmaCov2.jpeg"
          alt="mode.tokyo"
        />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
