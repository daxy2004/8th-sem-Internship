import CohortPage from './CohortPage';

function IndonesiaCohort() {
    return (
        <CohortPage
            country="Indonesia"
            flag="🇮🇩"
            heroImage="/Indonesia.png"
            tagline="Southeast Asia's largest economy — a rapidly growing hub for digital innovation, fintech, and emerging market leadership, offering unmatched insights into large-scale economic transformation."
            lead="Indonesia is Southeast Asia's largest economy and a key driver of ASEAN growth. The capital, Jakarta, is a vibrant hub for finance, startups, and multinational corporations. With over 270 million people, Indonesia offers insights into large-scale emerging market dynamics."
            body="The country is rapidly advancing in digital economy, fintech, and e-commerce innovation. Strong infrastructure expansion and port-led trade make it a case study in economic scaling. Indonesia plays a strategic role in global commodities, energy, and manufacturing supply chains."
            sections={[
                {
                    title: 'Why Indonesia Stands Out',
                    items: [
                        'Southeast Asia\'s largest economy and key ASEAN growth driver',
                        'Rapidly advancing digital economy, fintech, and e-commerce ecosystem',
                        'Strategic role in global commodities, energy, and manufacturing supply chains',
                        'Strong infrastructure expansion and port-led trade',
                    ],
                },
                {
                    title: 'What Students Gain',
                    items: [
                        'Emerging market strategy insight and ASEAN exposure',
                        'Growing India–Indonesia trade and technology collaboration opportunities',
                        'Cross-cultural intelligence from a diverse cultural landscape',
                        'Global leadership readiness in an English-friendly business environment',
                    ],
                },
            ]}
            closing="An Indonesia immersion builds emerging market strategy insight, ASEAN exposure, and global leadership readiness for Indian students."
            certUniversity="Partner University"
        />
    );
}

export default IndonesiaCohort;
