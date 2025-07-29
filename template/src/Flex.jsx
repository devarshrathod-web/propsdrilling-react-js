import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Flex() {
  return (
    
   <div style={{justifyContent:"center", display:"flex",width:"1850px",  marginTop:"200px", marginBottom:"200px"}}>
     <div style={{display:"flex" , justifyContent:"space-between", width:"1500px"   }}>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/1200x/4b/99/76/4b9976c5a7ab73c59aef8526e1657e6b.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/1200x/53/fa/14/53fa143a3a4d7bd12b069e5e86e6ca27.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/1200x/b1/b2/41/b1b24163913d3c5630c46376501f8531.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/1200x/38/30/58/383058156211145384fc365e39b1e71b.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>



    </div>

   </div>
  )
}

export default Flex