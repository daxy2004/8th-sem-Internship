import CohortPage from './CohortPage';

function EnglandCohort() {
    return (
        <CohortPage
            country="England"
            flag="🏴󠁧󠁢󠁥󠁮󠁧󠁿"
            heroImage="/England.jpg"
            tagline="Unmatched academic legacy, financial influence, policy leadership — England is a living classroom of history, innovation, and global power."
            lead="England offers unmatched academic legacy, financial influence, policy leadership, and global connectivity. England is not just a study destination — it is a living classroom of history, innovation, and global power."
            body="London stands alongside New York as a global financial powerhouse. Understanding how financial ecosystems operate in London gives Indian students a macro view of global economic flows."
            sections={[
                {
                    title: "England is home to some of the world's most prestigious universities",
                    items: [
                        'University of Oxford',
                        'University of Cambridge',
                        'Imperial College London',
                        'London School of Economics (LSE)',
                        'University of Manchester',
                        'University of Liverpool',
                    ],
                },
                {
                    title: 'Thriving Startup & Innovation Landscape',
                    items: [
                        'FinTech',
                        'AI & Deep Tech',
                        'Clean Energy',
                        'Life Sciences',
                        'Creative Industries',
                        'London, Cambridge & Manchester innovation clusters',
                    ],
                },
                {
                    title: 'Students Can Explore',
                    items: [
                        'International banking systems',
                        'Global capital markets',
                        'FinTech ecosystems',
                        'Venture capital and private equity networks',
                    ],
                },
            ]}
            closing="Understanding how financial ecosystems operate in London gives Indian students a macro view of global economic flows."
            certUniversity="Partner University"
        />
    );
}

export default EnglandCohort;
