import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbInkdrop from '../public/images/feavelPic/works/IMG_2261.jpg'
import thumbWalknote from '../public/images/feavelPic/works/Jelly/IMG_2263.jpg'
import thumbFourPainters from '../public/images/feavelPic/works/IMG_2266.jpg'
import thumbMenkiki from '../public/images/feavelPic/works/IMG_2267.jpg'
import thumbModeTokyo from '../public/images/feavelPic/works/fcmaCov.jpg'
import thumbStyly from '../public/images/feavelPic/works/tangKitty.jpg'
import thumbPichu2 from '../public/images/feavelPic/works/oldWorks/psy2.jpg'
import thumbFreeDBTagger from '../public/images/feavelPic/works/oldWorks/music2.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="dark-birds-fly"
            title="Dark birds fly above the land of dreams"
            thumbnail={thumbInkdrop}
          >
            Produced / Mixed / Mastered by Feavel
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="melancholy"
            title="Melancholy Dream 解憂夢醒時"
            thumbnail={thumbWalknote}
          >
            Album by: jellydontdie -- Mixed by: Feavel
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="lucr"
            title="Life under a cood roof"
            thumbnail={thumbFourPainters}
          >
            A colaboration with FimaBoiz
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="project-feavel"
            thumbnail={thumbMenkiki}
            title="Project Feavel"
          >
            Feavel&apos;s first produced, mixed, mastered album
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="fcma" thumbnail={thumbModeTokyo} title="FCMA">
            A photo and film organization
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="ali3n-babi3s"
            thumbnail={thumbStyly}
            title="Ali3nBabi3s"
          >
            A Make-up fashion colab
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem
            id="pichu2"
            thumbnail={thumbPichu2}
            title="Lacan & Zizek"
          >
            A speach at FCMA psychoanaysis Department
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="How film music is made"
          >
            A speach at FCMA Music Department
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
