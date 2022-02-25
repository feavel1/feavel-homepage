import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Project Feavel">
    <Container>
      <Title>
        Project Feavel <Badge>2020</Badge>
      </Title>
      <P>
        Project Feavel is Feavel&apos;s first studio album fully written and
        mixed by feavel
      </P>
      <P>Feavel was only 15-16 years old when he created this album</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Net Ease Music</span>
        </ListItem>
        <ListItem>
          <Meta>Produced</Meta>
          <span>2019-2020</span>
        </ListItem>
        <ListItem>
          <Meta>Spotify</Meta>
          <Link href="https://open.spotify.com/album/6YcgSKF8z31azgbbxgEpvy">
            Project Feavel on Spotify <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Net Ease</Meta>
          <Link href="https://music.163.com/#/album?id=88745435">
            Project Feavel on Net Ease
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/feavelPic/works/IMG_2267.jpg" alt="menkiki" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
