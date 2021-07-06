import React, { Component } from 'react'
import axios from 'axios';
import CocktailCard from './CocktailCard';
import { Container, Row } from 'react-bootstrap'
export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showData: false,
            cocktailData: [],
        }
    }

    componentDidMount = async () => {
        const cocktail = await axios.get(`${process.env.REACT_APP_URL}/cocktail`);
        this.setState({
            showData: !this.state.showData,
            cocktailData: cocktail.data.drinks
        })
        // console.log(cocktail.data.drinks);
    }


    addfav = async (obj) => {
        await axios.post(`${process.env.REACT_APP_URL}/addFavCocktail`, obj)
        alert('add done');
    }

    render() {
        return (
            <Container>
                <Row>
                    {
                        this.state.showData && (
                            <CocktailCard

                                cocktailData={this.state.cocktailData}
                                addfav={this.addfav}

                            />
                        )
                    }
                </Row>
            </Container>

        )
    }
}

export default Home
