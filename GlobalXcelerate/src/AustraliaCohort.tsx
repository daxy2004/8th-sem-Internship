import CohortPage from './CohortPage';

function AustraliaCohort() {
    return (
        <CohortPage
            country="Australia"
            flag="🇦🇺"
            heroImage="/Australia.jpg"
            tagline="World-class education with strong industry integration and global research impact — Australia builds global confidence, research orientation, and cross-cultural leadership readiness."
            lead="Australia combines world-class education with strong industry integration and global research impact. It is home to leading institutions like University of Melbourne and Australian National University."
            body="Students gain exposure to cutting-edge research in sustainability, AI, biotechnology, and business innovation. Cities like Sydney and Melbourne offer dynamic startup and financial ecosystems."
            sections={[
                {
                    title: 'What Students Experience',
                    items: [
                        'Australia is a global leader in renewable energy research and environmental sustainability',
                        'Strong India–Australia trade and education partnerships enhance collaboration opportunities',
                        'English as the primary language makes academic and corporate engagement seamless',
                        'Safe, multicultural campuses provide a supportive yet globally competitive environment',
                        'Industry placements and experiential learning models strengthen practical exposure',
                    ],
                },
            ]}
            closing="An Australia immersion builds global confidence, research orientation, and cross-cultural leadership readiness for Indian students."
            certUniversity="Partner University"
        />
    );
}

export default AustraliaCohort;
