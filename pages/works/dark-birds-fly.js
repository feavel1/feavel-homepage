import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Dark Birds Fly">
    <Container>
      <Title>
        Dark Birds Fly Above the land of Dreams <Badge>2022 01</Badge>
      </Title>
      <P>Feavel&apos;s lates studio album fully written and mixed by feavel</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>On NetEase (网易云音乐)</Meta>
          <Link href="https://music.163.com/#/album?id=138250855">
            music.163.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Production</Meta>
          <span>
            The project started as a hobby but eventualy became an album
          </span>
        </ListItem>
        <ListItem>
          <Meta>Song count</Meta>
          <span>9 songs all in Stereo 48kb/s </span>
        </ListItem>
        <ListItem>
          <Meta>Album Cover shot by</Meta>
          <Link href="https://www.instagram.com/qmiao_7610/">
            Qi Miao
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Album Cover Make Up Artist</Meta>
          <Link href="https://www.instagram.com/iloveali3nbabies/">
            Ali3n Babi3s
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/feavelPic/works/IMG_2261.jpg" alt="Inkdrop" />
      <WorkImage src="/images/feavelPic/works/feavelno2.jpg" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
