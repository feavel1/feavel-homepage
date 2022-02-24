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
  <Layout title="walknote">
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
          <span>16</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="http://renewal49.hateblo.jp/entry/20120710/1341925681">
            <Badge mr={2}>リニューアル式</Badge>
            強力すぎて紹介しそびれていた音楽好きのための神アプリ『walknote』
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="http://www.appbank.net/2011/10/15/iphone-application/309349.php">
            <Badge mr={2}>appbank</Badge>
            walknote:
            CD屋の試聴機が、自分向けになって手元に到着。そんな曲探しアプリ。無料。
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="http://www.danshihack.com/2012/07/18/junp/iphoneapp-walknote.html">
            <Badge mr={2}>男子ハック</Badge>
            [おすすめの音楽をレコメンド！ストリーミング再生してくれるiPhoneアプリ「walknote」が素敵。
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>

        <ListItem>
          <Badge mr={2}>タブロイド</Badge>
          <Link href="http://www.tabroid.jp/app/multimedia/2013/05/app.walknote.html">
            「YOU、これ聴いちゃいなよ」自分好みの曲が勝手に集まる音楽プレーヤー『walknote』
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>
      </UnorderedList>

      <WorkImage
        src="/images/feavelPic/works/jelly/IMG_2263.jpg"
        alt="walknote"
      />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage
          src="/images/feavelPic/works/jelly/jellyWoods.jpg"
          alt="walknote"
        />
        <WorkImage
          src="/images/feavelPic/works/jelly/jellyCat.jpg"
          alt="walknote"
        />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
