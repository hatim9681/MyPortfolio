import React from "react";
import Card from 'react-bootstrap/Card';

function Accueil() {
    return (
        <div>
            <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'center' }} >
                <Card.Body>
                    <Card.Title  style={{ fontSize: 40 }}><center><h3 >About Me</h3></center></Card.Title>
                    <Card.Text style={{ fontSize: 20 }}>

                        En tant qu'étudiant en ingénierie de l'information, je suis passionné par l'application de la technologie à la résolution de problèmes complexes. Je suis curieux et j'ai une soif de connaissances sans fin, ce qui me pousse à explorer de nouvelles idées et à chercher des solutions innovantes.

                        Je suis un esprit logique et analytique, et je suis à l'aise avec les mathématiques, la programmation et la modélisation. <br></br>
                        Je suis également doué pour la résolution de problèmes, la prise de décision et la pensée critique, des compétences essentielles dans le domaine de l'ingénierie de l'information.

                        Je suis capable de travailler efficacement en équipe et de collaborer avec des personnes de différents horizons pour atteindre un objectif commun. Je suis également capable de communiquer clairement et efficacement, ce qui est important pour la présentation de mes idées et la communication avec les parties prenantes.<br></br>
                        Je suis constamment à la recherche de nouvelles opportunités pour apprendre et développer mes compétences, que ce soit en participant à des projets de groupe, en suivant des formations ou en lisant des articles scientifiques.

                        En dehors des études, j'aime explorer de nouveaux domaines d'intérêt et participer à des activités en ligne ou en personne, comme des hackathons ou des conférences. Cela me permet de rencontrer des personnes partageant les mêmes idées et de découvrir de nouvelles technologies passionnantes.

                        <br></br>En fin de compte, je suis convaincu que l'ingénierie de l'information offre des possibilités infinies pour résoudre des problèmes réels et contribuer à la création d'un monde meilleur. En tant qu'étudiant en ingénierie de l'information, je suis prêt à relever ces défis et à apporter ma contribution à la société

                        <br></br>Enfin, je suis passionné par l'innovation et les nouvelles technologies, et je suis prêt à relever les défis qui se présentent dans le domaine de l'ingénierie de l'information. Je suis déterminé à réussir et à apporter ma contribution à la société en utilisant mon expertise pour résoudre des problèmes complexes et améliorer la vie des gens.
                    </Card.Text>
                </Card.Body>

            </Card>
        </div>
    );
}

export default Accueil;