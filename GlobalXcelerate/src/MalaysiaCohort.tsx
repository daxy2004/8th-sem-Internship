import CohortPage from './CohortPage';

function MalaysiaCohort() {
    return (
        <CohortPage
            country="Malaysia"
            flag="🇲🇾"
            heroImage="/Malaysia.jpg"
            tagline="A rapidly developing ASEAN economy with strong trade, manufacturing, and services sectors — building ASEAN market understanding and global leadership readiness."
            lead="Malaysia is a rapidly developing ASEAN economy with strong trade, manufacturing, and services sectors. Cities like Kuala Lumpur and Penang are hubs for finance, electronics manufacturing, and global business services."
            body="The country plays a key role in semiconductor assembly, palm oil trade, and export-driven industries. Malaysia hosts respected institutions such as University of Malaya and Universiti Teknologi Malaysia."
            sections={[
                {
                    title: 'Key Highlights',
                    items: [
                        'Strong industry–academia collaboration enables practical, application-oriented learning exposure',
                        "Malaysia's multicultural society enhances cross-cultural intelligence and global communication skills",
                        'English is widely used in education and business, ensuring seamless engagement for Indian students',
                        'Strategic ASEAN positioning provides insights into regional trade and market expansion strategies',
                        'Strong India–Malaysia economic and cultural ties create collaborative opportunities',
                    ],
                },
            ]}
            closing="A Malaysia immersion builds ASEAN market understanding, industry exposure, and global leadership readiness for Indian students."
            certUniversity="Partner University"
        />
    );
}

export default MalaysiaCohort;
