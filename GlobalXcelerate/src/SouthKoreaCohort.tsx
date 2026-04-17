import CohortPage from './CohortPage';

function SouthKoreaCohort() {
    return (
        <CohortPage
            country="South Korea"
            flag="🇰🇷"
            heroImage="/South%20korea.jpg"
            tagline="A global leader in advanced manufacturing, electronics, AI, and digital innovation — South Korea exemplifies how strategic vision transforms a nation into a high-income, technology-driven powerhouse."
            lead="South Korea is a global leader in advanced manufacturing, electronics, AI, and digital innovation. Companies like Samsung and Hyundai Motor Company exemplify scale, precision, and global competitiveness. The capital, Seoul, is one of the world's most technologically advanced and connected cities."
            body="South Korea's rapid transformation from a developing nation to a high-income economy offers powerful lessons in strategic growth. Institutions like Seoul National University lead in research across engineering, AI, biotechnology, and innovation. The country is a global benchmark in smart infrastructure, 5G adoption, and digital governance."
            sections={[
                {
                    title: 'World-Class Institutions and Companies',
                    items: [
                        'Samsung and Hyundai Motor Company — global icons of scale and competitiveness',
                        'Seoul National University — leading research in AI, biotech, and innovation',
                        'Seoul — one of the world\'s most technologically advanced cities',
                    ],
                },
                {
                    title: 'What Students Gain',
                    items: [
                        'Technology exposure across AI, smart infrastructure, and 5G innovation',
                        'Insights from a vibrant startup ecosystem scaling globally',
                        'Strong India–South Korea trade and technology partnership opportunities',
                        'Discipline, resilience, and operational excellence from Korean work culture',
                        'Future-ready leadership capabilities and global business insight',
                    ],
                },
            ]}
            closing="A South Korea immersion equips Indian students with technology exposure, global business insight, and future-ready leadership capabilities."
            certUniversity="Partner University"
        />
    );
}

export default SouthKoreaCohort;
