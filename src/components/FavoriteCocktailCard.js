import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

export class FavoriteCocktailCard extends Component {
    render() {
        return (

            // <div></div>
            this.props.cocktailData.map((obj, index) => {
                return (
                  <Card style={{ width: '18rem' , margin: '21px'  }}>
                    <Card.Img variant="top" src={obj.strDrinkThumb} />
                    <Card.Body>
                      <Card.Title>{obj.strDrink}</Card.Title>
                      <Button variant="danger" onClick={() => this.props.deleteFav(obj.idDrink)}>Delete Favorite Cocktail</Button>
                      <Button variant="danger" onClick={() => this.props.handleModalShow(obj, index)}>Update Favorite Cocktail</Button>
                    </Card.Body>
                  </Card>
                )
              })
        )
    }
}

export default FavoriteCocktailCard
