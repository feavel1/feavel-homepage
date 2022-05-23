import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbInkdrop from '../public/images/feavelPic/works/IMG_2261.jpg'
import thumbFourPainters from '../public/images/feavelPic/works/fimaAlbum.webp'
import thumbModeTokyo from '../public/images/feavelPic/works/fcma.png'
import thumbPichu2 from '../public/images/feavelPic/works/oldWorks/psy2.jpg'
import alienBabiesPage from '../public/images/feavelPic/works/ali3n.png'
import feavelBlogPage from '../public/images/feavelPic/works/feavel-blog.png'

function Works() {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Sound Engeneering and Music Production
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <WorkGridItem
              id="dark-birds-fly"
              title="Dark birds fly above the land of dreams"
              thumbnail={thumbInkdrop}
            >
              album by: Feavel
            </WorkGridItem>
          </Section>

          {/* <Section delay={0.25}>
            <WorkGridItem
              id="melancholy"
              title="Melancholy Dream 解憂夢醒時"
              thumbnail={thumbWalknote}
            >
              album by: jellydontdie
            </WorkGridItem>
          </Section> */}

          <Section delay={0.5}>
            <WorkGridItem
              id="lucr"
              title="Life under a cood roof"
              thumbnail={thumbFourPainters}
            >
              album by: Feavel & FimaBoiz
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.75}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Web Design and Programing
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={1}>
            <WorkGridItem
              id="feavel-blog"
              thumbnail={feavelBlogPage}
              title="Feavel's Philosphy Blog"
            >
              A web-app for posting philosophy and other thoughts
            </WorkGridItem>
          </Section>

          <Section delay={1.25}>
            <WorkGridItem
              id="ali3n-babi3s"
              thumbnail={alienBabiesPage}
              title="Ali3nBabi3s"
            >
              New web page for Ali3nBabi3s
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={2.25}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Intelecutan and Creative Work
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <Section delay={2.25}>
            <WorkGridItem id="fcma" thumbnail={thumbModeTokyo} title="FCMA">
              A photo and film organization
            </WorkGridItem>
          </Section>
          <Section delay={2.5}>
            <WorkGridItem
              id="psychology"
              thumbnail={thumbPichu2}
              title="Lacanian and Hegelian Dialectics"
            >
              A speach at FCMA psychoanaysis Department
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'
