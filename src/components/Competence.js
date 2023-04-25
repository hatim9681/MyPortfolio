import React from 'react'
import Card from 'react-bootstrap/Card';

function Competences() {
  return (
    <div >
      <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'center' }} >
        <Card.Body>
          <Card.Title  ><center><h3 >Languages de programmation</h3></center></Card.Title>
          <Card.Text>
          <ul >
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>C</li>
            <li>C++</li>

        </ul>

          </Card.Text>
        </Card.Body>

      </Card >
      <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'center' }} >
        <Card.Body>
          <Card.Title  ><center><h3 >Frameworks</h3></center></Card.Title>
          <Card.Text>
          <ul>
            <li>SpringBoot</li>
            <li>Flast</li>
            <li>Django</li>
            <li>Flutter</li>
        </ul>

          </Card.Text>
        </Card.Body>

      </Card>
      <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'center' }} >
        <Card.Body>
          <Card.Title  ><center><h3 >System de gestion de base de donnée</h3></center></Card.Title>
          <Card.Text>
          <ul>
            <li>MySql</li>
            <li>Sql Server</li>
            <li>Oracle</li>
            
        </ul>
          </Card.Text>
        </Card.Body>

      </Card>
      <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'center' }} >
        <Card.Body>
          <Card.Title  ><center><h3 >Language de modelisation</h3></center></Card.Title>
          <Card.Text>
          <ul>
            <li>UML</li>
            <li>Merise</li>
        </ul>
          </Card.Text>
        </Card.Body>

      </Card>
    </div>
  )
}

export default Competences