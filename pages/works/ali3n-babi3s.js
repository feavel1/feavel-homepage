import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Ali3n Babi3s">
    <Container>
      <Title>
        Ali3n Babies <Badge>2022</Badge>
      </Title>
      <P>
        This is a make up project that is made for people who are intrested in
        fashion and beauty. The project mainly focuses on goth/y2k style. I have
        a job to write a web page that introduces the brand and the products.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Instagram and Web</span>
        </ListItem>
        <ListItem>
          <Meta>Make up artist</Meta>
          <Link
            href="https://www.instagram.com/iloveali3nbabies/"
            target="_blank"
          >
            Alien Baby <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Web Page</Meta>
          <Link href="https://ali3n-babi3s.vercel.app" target="_blank">
            ali3n-babi3s.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage
        src="/images/feavelPic/works/Tang/tangBao1.jpg"
        alt="Alien Babies"
      />
      <WorkImage
        src="/images/feavelPic/works/Tang/tangBao2.jpg"
        alt="Alien Babies"
      />
      <WorkImage
        src="/images/feavelPic/works/Tang/tangBao3.jpg"
        alt="Alien Babies"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
