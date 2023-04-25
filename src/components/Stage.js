import React from 'react'
import Card from 'react-bootstrap/Card';
function Experiences() {

    return (
        <div > 
            <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'center' }} >
                <Card.Body style={{ textAlign: 'left', marginLeft: 30 }}>
                    <Card.Title  ><center><h3 >Stage d'initiation 2022</h3></center></Card.Title>
                    <Card.Text>
                        <strong>Entreprise:</strong> INTELCAPP<br></br>
                        <strong>Durée:</strong> Juillet 2022 - Septembre 2022 (2 Mois)<br></br>
                        <strong>Mission :</strong> Conception et realisation d'un site de vente des produits terroirs<br></br>
                        <strong>Technologies :</strong> Python , Flask (API) , Nextjs , TailwindCss<br></br>

                    </Card.Text>
                </Card.Body>

            </Card>
            <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'center' }} >
                <Card.Body style={{ textAlign: 'left', marginLeft: 30 }}>
                    <Card.Title  ><center><h3 >Stage de fin d'etude 2018</h3></center></Card.Title>
                    <Card.Text>
                        <strong>Entreprise:</strong> Menara Prefa<br></br>
                        <strong>Durée:</strong> Mars 2018 - Mai 2018 (2 Mois)<br></br>
                        <strong>Mission :</strong> Analyse des matieres premiers necessaires pour la fabrication des hourdis et pavés<br></br>
                    </Card.Text>
                </Card.Body>

            </Card>

            <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'center' }} >
                <Card.Body style={{ textAlign: 'left', marginLeft: 30 }}>
                    <Card.Title  ><center><h3 >Stage d'observation 2017</h3></center></Card.Title>
                    <Card.Text>
                        <strong>Entreprise:</strong> Societé d'elaboration du verre au Maroc (SEVAM)<br></br>
                        <strong>Durée:</strong> Juin 2017(1 Mois)<br></br>
                        <strong>Mission :</strong> Observation de la procedure de fabricaton des bouteilles de verre et ses analyses de qualité<br></br>
                    </Card.Text>
                </Card.Body>

            </Card>
        </div>
    );

}

export default Experiences