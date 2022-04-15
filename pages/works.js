import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbInkdrop from '../public/images/feavelPic/works/IMG_2261.jpg'
import thumbWalknote from '../public/images/feavelPic/works/Jelly/IMG_2263.jpg'
import thumbFourPainters from '../public/images/feavelPic/works/IMG_2266.jpg'
import thumbModeTokyo from '../public/images/feavelPic/works/fcmaCov.jpg'
import thumbStyly from '../public/images/feavelPic/works/tangKitty.jpg'
import thumbPichu2 from '../public/images/feavelPic/works/oldWorks/psy2.jpg'
import thumbFreeDBTagger from '../public/images/feavelPic/works/oldWorks/music2.jpg'

function Works() {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Sound Engeneering and Music Production
        </Heading>

        <SimpleGrid columns={[1, 2, 3]} gap={6}>
          <Section delay={0.1}>
            <WorkGridItem
              id="dark-birds-fly"
              title="Dark birds fly above the land of dreams"
              thumbnail={thumbInkdrop}
            >
              album by: Feavel
            </WorkGridItem>
          </Section>
          <Section delay={0.25}>
            <WorkGridItem
              id="melancholy"
              title="Melancholy Dream 解憂夢醒時"
              thumbnail={thumbWalknote}
            >
              album by: jellydontdie
            </WorkGridItem>
          </Section>

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
            Intellectual Work
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={1}>
            <WorkGridItem id="fcma" thumbnail={thumbModeTokyo} title="FCMA">
              A photo and film organization
            </WorkGridItem>
          </Section>
          <Section delay={1.25}>
            <WorkGridItem
              id="how-film-music-is-made"
              thumbnail={thumbFreeDBTagger}
              title="How film music is made"
            >
              A speach at FCMA Music Department
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={1.5}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Work In Progress
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          <Section delay={1.75}>
            <WorkGridItem
              id="psychology"
              thumbnail={thumbPichu2}
              title="Lacanian and Hegelian Dialectics"
            >
              A speach at FCMA psychoanaysis Department
            </WorkGridItem>
          </Section>

          <Section delay={2}>
            <WorkGridItem
              id="ali3n-babi3s"
              thumbnail={thumbStyly}
              title="Ali3nBabi3s"
            >
              New web page for Ali3nBabi3s
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'
