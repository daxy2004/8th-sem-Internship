import CohortPage from './CohortPage';

function TaiwanCohort() {
    return (
        <CohortPage
            country="Taiwan"
            flag="🇹🇼"
            heroImage="/Taiwan.jpg"
            tagline="A masterclass in precision, innovation, and resilience — Taiwan sits at the heart of the global technology supply chain."
            lead="Taiwan offers something uniquely powerful: deep technology capability, manufacturing excellence, democratic governance, and cultural richness in one compact, high-performing nation. Taiwan is not just a destination — it is a masterclass in precision, innovation, and resilience."
            body="Taiwan sits at the heart of the global technology supply chain. It is home to TSMC and MediaTek. The island plays a critical role in semiconductor manufacturing, electronics, and advanced hardware systems. For Indian students in engineering, AI, electronics, manufacturing, and management, Taiwan becomes a live case study."
            sections={[
                {
                    title: 'Global Tech Leaders',
                    items: [
                        'TSMC — critical to global semiconductor supply chain',
                        'MediaTek — global chip design leader',
                        'Advanced electronics & hardware systems',
                        'Globally respected institutions: National Taiwan University & National Tsing Hua University',
                    ],
                },
                {
                    title: 'Live Case Study In',
                    items: [
                        'High-value manufacturing',
                        'Precision engineering',
                        'R&D-driven industrial growth',
                        'Global supply chain leadership',
                    ],
                },
            ]}
            closing="Students understand how deep-tech ecosystems are built and sustained."
            certUniversity="Partner University"
        />
    );
}

export default TaiwanCohort;
