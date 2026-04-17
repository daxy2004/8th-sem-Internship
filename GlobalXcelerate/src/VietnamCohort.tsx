import CohortPage from './CohortPage';

function VietnamCohort() {
    return (
        <CohortPage
            country="Vietnam"
            flag="🇻🇳"
            heroImage="/Vietnam.jpg"
            tagline="Asia's fastest-growing economy — a live case study in rapid development, industrial transformation, and emerging market entrepreneurship."
            lead="Vietnam is one of Asia's fastest-growing economies, making it a live case study in rapid development and industrial transformation. Cities like Ho Chi Minh City and Hanoi are emerging hubs for manufacturing, technology, and global trade."
            body="The country plays a critical role in global supply chains, especially in electronics, textiles, and export-driven industries. Students gain exposure to ASEAN market dynamics and cross-border business expansion strategies."
            sections={[
                {
                    title: 'Key Highlights',
                    items: [
                        "Vietnam's startup ecosystem is expanding rapidly, offering insights into emerging market entrepreneurship",
                        'Strong India–Vietnam trade relations create meaningful collaboration and investment learning opportunities',
                        'Affordable yet high-growth economic conditions — ideal for understanding cost-competitive global models',
                        'Universities and industry clusters are increasingly aligned with international standards',
                        'Rich cultural heritage enhances cross-cultural intelligence and global adaptability',
                    ],
                },
            ]}
            closing="A Vietnam immersion builds emerging-market insight, strategic thinking, and global business readiness for students."
            certUniversity="Partner University"
        />
    );
}

export default VietnamCohort;
