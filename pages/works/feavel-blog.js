import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Text,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Blog">
    <Container>
      <Title>
        哲学博客 <Badge>2022 - now</Badge>
      </Title>

      <P>Philosophy Blog</P>
      <P>
        是一个用Next.js + Chakra UI + Firebase 实现的博客.
        这里可以分享自己的哲学. 注册您的 👨‍🎤 账户, ✍️ 写下你的思想, 然后 💞
        互相点赞对方写下的思想. 所有的公开动态都是后端加载并搜索搜索引擎适配.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>👨‍🎤</Meta>
          <span>Custom Firebase usernames</span>
        </ListItem>
        <ListItem>
          <Meta>📰 </Meta>
          <span>Bot-friendly content (SEO)</span>
        </ListItem>
        <ListItem>
          <Meta>🦾 </Meta>
          <span>Advanced SSR, SSG, and ISR techniques</span>
        </ListItem>
        <ListItem>
          <Meta>🔥 </Meta>
          <span>Firestore realtime CRUD and data modeling</span>
        </ListItem>
        <ListItem>
          <Meta>⚛️ </Meta>
          <span>Reactive forms with react-hook-form</span>
        </ListItem>
        <ListItem>
          <Meta>📂 </Meta>
          <span>Image file uploads</span>
        </ListItem>
        <ListItem>
          <Meta>💞 </Meta>
          <span>Realtime hearts </span>
        </ListItem>
        <ListItem>
          <Meta>🚀 </Meta>
          <span>Security & Deployment</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Current User Posts</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://feavel-blog.vercel.app/baby_feavel/%E4%B8%BB%E4%B9%89%E4%B8%BB%E4%B9%89-%E4%B8%80%E4%B8%AA%E5%85%B3%E4%BA%8E%E6%89%80%E6%9C%89%E4%B8%BB%E4%B9%89%E7%9A%84%E4%B8%BB%E4%B9%89">
            <Badge mr={2}>@baby_feavel</Badge>一个关于主义的主义{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://feavel-blog.vercel.app/baby_feavel/%E5%93%B2%E5%AD%A6%E5%8D%9A%E5%AE%A2">
            <Badge mr={2}>@baby_feavel</Badge>欢迎新用户{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>
          See the project -
          <Text ml={1}>
            <Link href="https://feavel-blog.vercel.app" target="_blank">
              哲学博客
            </Link>
          </Text>
        </Center>
      </Heading>

      <WorkImage
        src="/images/feavelPic/works/feavel-blog.png"
        alt="freeDBTagger"
      />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage
          src="/images/feavelPic/works/blog/1.png"
          alt="freeDBTagger"
        />
        <WorkImage
          src="/images/feavelPic/works/blog/2.png"
          alt="freeDBTagger"
        />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
