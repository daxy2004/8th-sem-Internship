import CohortPage from './CohortPage';

function SingaporeCohort() {
    return (
        <CohortPage
            country="Singapore"
            flag="🇸🇬"
            heroImage="/Singapore.jpg"
            tagline="One of the world's most competitive and innovation-driven economies — where Fortune 500 HQs, global banks, and cutting-edge startups coexist."
            lead="Singapore is one of the world's most competitive and innovation-driven economies. As a global financial and trade hub, it hosts regional headquarters of Fortune 500 companies, global banks, sovereign wealth funds, and cutting-edge startups."
            body="Students don't just visit Singapore — they witness how policy drives economic transformation, how startups scale globally from day one, and how government, academia, and industry operate in alignment."
            sections={[
                {
                    title: 'Singapore houses globally ranked institutions like',
                    items: [
                        'National University of Singapore (NUS)',
                        'Nanyang Technological University (NTU)',
                        'Singapore Management University (SMU)',
                    ],
                },
            ]}
            closing="Exposure to this ecosystem builds strategic thinking and global business awareness."
            stats={[
                { icon: '📅', value: '8th Apr – 15th Apr', label: 'Program Dates' },
                { icon: '👥', value: '25 – 30', label: 'Curated Participants' },
                { icon: '💰', value: '₹1,80,000', label: 'All Inclusive', pill: 'Scholarships Available', isGold: true }
            ]}
            certUniversity="Partner University"
        />
    );
}

export default SingaporeCohort;
