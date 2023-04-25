import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Certifications() {
    return (
        <div >
          <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'center' }} >
                <Card.Body style={{ textAlign: 'left', marginLeft: 30 }}>
                    <Card.Title  ><h3 >Introduction to DevOps </h3></Card.Title>
                    <Card.Text  >
                        <strong> Par :</strong> IBM<br></br>
                        <strong> Plateform :</strong>  Coursera<br></br>
                        <strong> Fini le :</strong>  23 mars 2023<br></br>
                    </Card.Text>
                    <Button variant="dark" href='https://coursera.org/share/73be210dc833129669cb2848943a3992'>Voir Certificat</Button>
                </Card.Body>
            </Card>
            <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'center' }} >
                <Card.Body style={{ textAlign: 'left', marginLeft: 30 }}>
                    <Card.Title  ><h3 >Introduction to Agile Development and Scrum </h3></Card.Title>
                    <Card.Text  >
                        <strong> Par :</strong> IBM<br></br>
                        <strong> Plateform :</strong>  Coursera<br></br>
                        <strong> Fini le :</strong>  23 mars 2023<br></br>
                    </Card.Text>
                    <Button variant="dark" href='https://coursera.org/share/e5e8c07edf093d492a43ae4e539f9b0c'>Voir Certificat</Button>
                </Card.Body>
            </Card>
            <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'center' }} >
                <Card.Body style={{ textAlign: 'left', marginLeft: 30 }}>
                    <Card.Title  ><h3 >Introduction to Cloud Computing </h3></Card.Title>
                    <Card.Text  >
                        <strong> Par :</strong> IBM<br></br>
                        <strong> Plateform :</strong>  Coursera<br></br>
                        <strong> Fini le :</strong> 23 mars 2023<br></br>
                    </Card.Text>
                    <Button variant="dark" href='https://coursera.org/share/adbfcb5f8b29c698c8792d220fc061cc'>Voir Certificat</Button>
                </Card.Body>
            </Card>
            <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'center' }} >
                <Card.Body style={{ textAlign: 'left', marginLeft: 30 }}>
                    <Card.Title  ><h3 >Developing Back-End Apps with Node.js and Express </h3></Card.Title>
                    <Card.Text  >
                        <strong> Par :</strong> IBM<br></br>
                        <strong> Plateform :</strong>  Coursera<br></br>
                        <strong> Fini le :</strong>  20 février 2023<br></br>
                    </Card.Text>
                    <Button variant="dark" href='https://coursera.org/share/b301ec3feb176527b84f6d5dbebe22fe'>Voir Certificat</Button>
                </Card.Body>
            </Card>
            <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'center' }} >
                <Card.Body style={{ textAlign: 'left', marginLeft: 30 }}>
                    <Card.Title  ><h3 >Data Collection and Processing with Python </h3></Card.Title>
                    <Card.Text  >
                        <strong> Par :</strong> University of Michigan<br></br>
                        <strong> Plateform :</strong>  Coursera<br></br>
                        <strong> Fini le :</strong>  23 mai 2022<br></br>
                    </Card.Text>
                    <Button variant="dark" href='https://coursera.org/share/73be210dc833129669cb2848943a3992'>Voir Certificat</Button>
                </Card.Body>
            </Card>
            <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'center' }} >
                <Card.Body style={{ textAlign: 'left', marginLeft: 30 }}>
                    <Card.Title  ><h3 >Python Functions, Files, and Dictionaries </h3></Card.Title>
                    <Card.Text  >
                        <strong> Par :</strong> University of Michigan <br></br>
                        <strong> Plateform :</strong>  Coursera<br></br>
                        <strong> Fini le :</strong>  27 mai 2022<br></br>
                    </Card.Text>
                    <Button variant="dark" href='https://coursera.org/share/0a386f8db920d2842de3ff8c45ef9faf'>Voir Certificat</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Certifications;
