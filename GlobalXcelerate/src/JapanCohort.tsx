import CohortPage from './CohortPage';

function JapanCohort() {
    return (
        <CohortPage
            country="Japan"
            flag="🇯🇵"
            heroImage="/Japan.jpg"
            tagline="Cutting-edge technology with deep-rooted cultural discipline — Japan builds precision thinking, innovation exposure, and global leadership confidence."
            lead="Japan blends cutting-edge technology with deep-rooted cultural discipline and tradition. It is home to globally renowned institutions like University of Tokyo and Kyoto University."
            body="Students gain exposure to advanced robotics, AI, manufacturing, and precision engineering ecosystems. Japan's Kaizen philosophy offers practical lessons in continuous improvement and operational excellence."
            sections={[
                {
                    title: 'What Students Experience',
                    items: [
                        'Cities like Tokyo and Osaka showcase innovation-driven urban development',
                        'Japan is a global leader in automotive, electronics, and high-tech manufacturing industries',
                        'Strong India–Japan strategic ties create meaningful collaboration opportunities',
                        'World-class infrastructure, safety, and disciplined work culture',
                        'Cultural immersion enhances respect, resilience, and cross-cultural intelligence',
                    ],
                },
            ]}
            closing="A Japan immersion builds precision thinking, innovation exposure, and global leadership confidence for Indian students."
            certUniversity="Partner University"
        />
    );
}

export default JapanCohort;
