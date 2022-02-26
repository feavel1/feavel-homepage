import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbFishWorkflow from '../public/images/feavelPic/Posts/01 - 3d-web.png'
import thumbMyDeskSetup from '../public/images/feavelPic/Posts/02 - hiMom.png'
import thumb500PaidUsers from '../public/images/feavelPic/Posts/03 - catNavBar.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Some of my easy works
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="My 3d web page"
            thumbnail={thumbFishWorkflow}
            href="https://feavel-3d.pages.dev/"
          />
          <GridItem
            title="My LOGIN page (source code)"
            thumbnail={thumbMyDeskSetup}
            href="https://www.youtube.com/watch?v=1OFDMwDlnOE"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="My cat nav bar(source code)"
            thumbnail={thumb500PaidUsers}
            href="https://github.com/feavel1/FevelsCatNavBar-01"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
