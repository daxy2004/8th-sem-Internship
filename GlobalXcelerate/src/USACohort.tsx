import CohortPage from './CohortPage';

function USACohort() {
    return (
        <CohortPage
            country="USA"
            flag="🇺🇸"
            heroImage="/USA.png"
            tagline="The world's largest economy and global leader in innovation, entrepreneurship, and higher education — home to Silicon Valley, Harvard, Stanford, and the world's most powerful ecosystems of technology and capital."
            lead="The USA is the world's largest economy and a global leader in innovation, entrepreneurship, and higher education. It is home to world-renowned institutions like Harvard University and Stanford University. Regions like Silicon Valley are global epicenters of startups, venture capital, and technological disruption."
            body="Students gain exposure to cutting-edge ecosystems in AI, biotechnology, fintech, aerospace, and deep tech. The USA offers unmatched industry–academia collaboration and commercialization models. Financial hubs like New York City provide insights into global capital markets and corporate strategy."
            sections={[
                {
                    title: 'World-Class Institutions and Ecosystems',
                    items: [
                        'Harvard University and Stanford University — global academic benchmarks',
                        'Silicon Valley — epicenter of startups, VC, and technological disruption',
                        'New York City — global capital of finance and corporate strategy',
                        'Cutting-edge ecosystems in AI, biotech, fintech, aerospace, and deep tech',
                    ],
                },
                {
                    title: 'What Students Gain',
                    items: [
                        'Exposure to industry–academia collaboration and commercialization models',
                        'Strong India–USA educational and economic partnership opportunities',
                        'Cross-cultural intelligence from a multicultural global environment',
                        'Research-driven pedagogy strengthening critical thinking and innovation',
                        'Global perspective, entrepreneurial mindset, and world-class academic exposure',
                    ],
                },
            ]}
            closing="A USA immersion equips Indian students with global perspective, entrepreneurial mindset, and world-class academic exposure."
            certUniversity="Partner University"
        />
    );
}

export default USACohort;
