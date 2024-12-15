'use client';
import LpBenefit from '@/components/lp/Benefit/Benefit'
import LpContact from '@/components/lp/Contact/Contact'
import LpCta from '@/components/lp/Cta/Cta'
import LpFeatures from '@/components/lp/Features/Features'
import LpFlow from '@/components/lp/Flow/Flow'
import LpFooter from '@/components/lp/Footer/Footer'
import LpFv from '@/components/lp/Fv/Fv'
import LpHeader from '@/components/lp/Header/Header'
import LpManagement from '@/components/lp/Management/Management'
import LpRecruit from '@/components/lp/Recruit/Recruit'
import LpStructure from '@/components/lp/Structure/Structure'

export default function Home() {
    
    return (
        <div style={{background: "#F4F9F8"}}>
            <LpHeader />
            <LpFv />
            <LpBenefit />
            <LpCta />
            <LpManagement />
            <LpFeatures />
            <LpCta />
            <LpStructure />
            <LpRecruit />
            <LpCta />
            <LpFlow />
            <LpContact />
            <LpFooter />
        </div>
    )
}