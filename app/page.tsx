import {HeroSection} from './components/pages/home/hero-section'
import { HightLightedProjects } from './components/pages/home/highligted-projects'
import { KnownTechs } from './components/pages/home/known-techs'
import {WorkExperience} from './components/pages/home/work-experiencie'
import { fetchHygrapQuery } from './utils/fetch-hyhraph-query'
import { HomePageData } from './types/page-info'
import { HomePageInfo } from './types/page-info'

const getPageData = async (): Promise<HomePageData> => {
  const query = `
query PageInfoQuery {
    page (where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        social {
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
    }

`

return fetchHygrapQuery(
  query,
  60 * 60 * 24
  )
}


export default async function Home() {
  const {page: pageData} = await getPageData();
  
console.log(pageData)

  return (
    <>
        <HeroSection homeInfo = {pageData}/>
        <KnownTechs techs = {pageData.knownTechs} />
        <HightLightedProjects projects = {pageData.highlightProjects} />
        <WorkExperience/>
    </>
  )
}
