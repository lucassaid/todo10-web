import Layout from '../components/Layout'
import BenefitsSection from '../components/BenefitsSection'
import Stepper from '../components/Stepper';
import { hostingOptions } from '../data/steps'
import benefits from '../data/hosting/benefits'
import FeatureHighlight from '../components/FeatureHighlight/FeatureHighlight';

export default function Hosting() {

  return (
    <Layout>
      <div className="my-40"/>
      <div className="section container-small">
        <FeatureHighlight
          image="/icons/server.svg"
          title={<>Outstanding <span className="text-orange">Web Hosting Plans</span></>}
          desc="Providing reliability and security for your business with high-quality hosting. Full managed optimized hosting powered by Litesped."
          link='/'
          linkLabel="Get mine"
        />
      </div>
      <div className="section container-full">
        <BenefitsSection benefits={benefits}/>
      </div>
      <div className="section container">
        <Stepper initialStep={hostingOptions}/>
      </div>
      <div className="my-60"/>
    </Layout>
  )
}