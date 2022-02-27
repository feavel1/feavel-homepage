import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Melencholly">
    <Container>
      <Title>
        Melancholy Dream 解憂夢醒時 <Badge>2021-2022 03</Badge>
      </Title>
      <P>
        jellydontdie is an artist based in China, his main music genre is
        trap/cloudrap
      </P>
      <P>
        专辑介绍:
        我们相拥的接吻,骑着梦幻的坐骑遨游在天空,去到了悬浮着的山谷,没有人会在意我们,
        也没有人会知道我们,在听到上帝的呼唤之后,我们陶醉其中,并准备着最后的高潮...
        <Link href="https://music.163.com/#/album?id=139832486">
          解憂夢醒時 {'  '}
        </Link>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Net Ease</span>
        </ListItem>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://music.163.com/#/album?id=139832486">
            Melancholy Dream 解憂夢醒時 {'  '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Tracks</Meta>
          <span>16 songs all in Stereo 48kb/s</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://weibo.com/u/3844708621">
            <Badge mr={2}>微博</Badge>
            jellydontdie『weibo』
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <WorkImage
        src="/images/feavelPic/works/Jelly/IMG_2263.jpg"
        alt="walknote"
      />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage
          src="/images/feavelPic/works/Jelly/jellyWoods.jpg"
          alt="walknote"
        />
        <WorkImage
          src="/images/feavelPic/works/Jelly/jellyCat.jpg"
          alt="walknote"
        />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
