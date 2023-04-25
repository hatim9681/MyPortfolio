import React from 'react'
import Card from 'react-bootstrap/Card';

function Formation() {
    return (
        <div>
             <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'center' }} >
                <Card.Body style={{ textAlign: 'left', marginLeft: 30 }}>
                    <Card.Title  ><h3 >Diplome d'ingenieur d'etat </h3></Card.Title>
                    <Card.Text  >
                        <strong> Specialité :</strong>  Ingénierie Informatique et Réseaux Option 'MIAGE'<br></br>
                        <strong> Durée :</strong>  2019-Present<br></br>
                        <strong> Etablissement : </strong> Ecole Marocaine de Sciences de l'ingenieur<br></br>
                        <strong> Ville :</strong>  Marrakech<br></br>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'center' }} >
                <Card.Body style={{ textAlign: 'left', marginLeft: 30 }}>
                    <Card.Title  ><h3 >Diplome universitaire de Technologie 'DUT' </h3></Card.Title>
                    <Card.Text  >
                        <strong> Specialité :</strong>  Génie des Procédes<br></br>
                        <strong> Durée :</strong>  2016-2018<br></br>
                        <strong> Etablissement : </strong> Ecole National Superieur des Arts et Metiers ( ENSAM )<br></br>
                        <strong> Ville :</strong>  Rabat<br></br>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'center' }} >
                <Card.Body style={{ textAlign: 'left', marginLeft: 30 }}>
                    <Card.Title  ><h3 >Baccalaureat  </h3></Card.Title>
                    <Card.Text  >
                        <strong> Specialité :</strong>  Sciences Mathématiques option 'A'<br></br>
                        <strong> Année scolaire :</strong>  2014-2015<br></br>
                        <strong> Etablissement : </strong> Lycée Ibn Toumert<br></br>
                        <strong> Ville :</strong>  Marrakech<br></br>
                        <strong> Etablissement : </strong> Lycée Ibn Toumert<br></br>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Formation