import {HeroSection} from './components/pages/home/hero-section'
import { HightLightedProjects } from './components/pages/home/highligted-projects'
import { KnownTechs } from './components/pages/home/known-techs'
import {WorkExperience} from './components/pages/home/work-experiencie'
import { fetchHygraphQuery } from './utils/fetch-hyhraph-query'
import { HomePageData } from './types/page-info'
import { HomePageInfo } from './types/page-info'

const getPageData = async (): Promise<HomePageData> => {
  const query = `


  query PageInfoQuery {
    page(where: {slug: "home"}) {
      introduction {
        raw
      }
      technologies {
        name
      }
      profilePicture {
        url
      }
      socials {
        url
        iconSvg
      }
      knownTechs {
        iconSvg
        name
        startDate
      }
      highlightProjects {
        slug
        thumbnail {
          url
        }
        title
        shortDescription
        technologies {
          name
        }
      }
    }
    workExperiences {
      companyLogo {
        url
      }
      role
      companyName
      companyUrl
      startDate
      endDate
      description {
        raw
      }
      technologies {
        name
      }
    }
  }

`

return fetchHygraphQuery(
  query,
  100*  60 * 60 * 24
  )
}


export default async function Home() {
  const { page: pageData, workExperiences } = await getPageData()

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnownTechs techs={pageData.knownTechs} />
      <HightLightedProjects projects={pageData.highlightProjects} />
      <WorkExperience experiences={workExperiences} />
    </>
  )
}
