import CohortPage from './CohortPage';

function ScotlandCohort() {
    return (
        <CohortPage
            country="Scotland"
            flag="🏴󠁧󠁢󠁳󠁣󠁴󠁿"
            heroImage="/Scotland.jpg"
            tagline="Centuries-old academic excellence meets cutting-edge innovation — Scotland builds intellectual depth, innovation exposure, and global leadership confidence."
            lead="Scotland blends centuries-old academic excellence with cutting-edge innovation ecosystems. It is home to globally respected institutions like University of Edinburgh and University of Glasgow."
            body="Students experience research-led education in AI, data science, renewable energy, and life sciences. Cities like Edinburgh and Glasgow offer vibrant startup and fintech ecosystems."
            sections={[
                {
                    title: 'Innovation & Leadership',
                    items: [
                        'Scotland is a global leader in renewable energy and sustainability innovation',
                        'Insights into parliamentary democracy and progressive public policy',
                        'Strong India–Scotland academic ties create meaningful collaboration opportunities',
                        'A safe, student-friendly environment ensures structured and secure immersion experiences',
                        'Rich cultural heritage enhances global perspective and cross-cultural intelligence',
                    ],
                },
            ]}
            closing="A Scotland immersion builds intellectual depth, innovation exposure, and global leadership confidence for Indian students."
            certUniversity="Partner University"
        />
    );
}

export default ScotlandCohort;
