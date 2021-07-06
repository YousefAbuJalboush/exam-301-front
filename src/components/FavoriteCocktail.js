import React, { Component } from 'react'
import axios from 'axios';
import { Container, Row } from 'react-bootstrap'
import FavoriteCocktailCard from './FavoriteCocktailCard'
import ModalForm from './ModalForm';

export class FavoriteCocktail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showData: false,
            cocktailData: [],

            handleModal: false,
            index: '',
            strDrink: '',
            strDrinkThumb: '',
            idDrink: '',
        }
    }

    componentDidMount = async () => {
        const cocktail = await axios.get(`${process.env.REACT_APP_URL}/getAllFavCocktail`);
        this.setState({
            showData: !this.state.showData,
            cocktailData: cocktail.data
        })
        // console.log(cocktail.data);
    }

    deleteFav = async (idDrink) => {
        const deleteCocktail = await axios.delete(`${process.env.REACT_APP_URL}/deleteFavCocktail/${idDrink}`);
        this.setState({
            cocktailData: deleteCocktail.data
        })
        console.log(deleteCocktail.data);
    }

    handleModalShow = (obj, index) => {
        this.setState({
            handleModal: true,

            index: index,
            strDrink: obj.strDrink,
            strDrinkThumb: obj.strDrinkThumb,
            idDrink: obj.idDrink,
        })
    };

    handleModalClose = () => {
        this.setState({
            handleModal: false
        })
    };

    strDrinkHandler = (e) => { this.setState ({
        strDrink:e.target.value
    })}

    strDrinkThumbHandler = (e) => { this.setState ({
        strDrinkThumb:e.target.value
    })}


    updateForm = async (e) => {
        e.preventDefault();
        const obj = {
            strDrink: this.state.strDrink,
            strDrinkThumb:this.state.strDrinkThumb,
            idDrink: this.state.idDrink,
        }
        const update = await axios.put(`${process.env.REACT_APP_URL}/updateFavCocktail/${this.state.index}`,obj);
        this.setState({
            cocktailData: update.data
        })
        this.handleModalClose()
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        {
                            this.state.showData && (
                                <FavoriteCocktailCard

                                    cocktailData={this.state.cocktailData}
                                    deleteFav={this.deleteFav}
                                    handleModalShow={this.handleModalShow}

                                />
                            )
                        }
                    </Row>
                </Container>
                {
                    this.state.handleModal && (
                        <ModalForm

                            handleModal={this.state.handleModal}
                            handleModalClose={this.handleModalClose}


                            strDrink={this.state.strDrink}
                            strDrinkThumb={this.state.strDrinkThumb}

                            strDrinkHandler={this.strDrinkHandler}
                            strDrinkThumbHandler={this.strDrinkThumbHandler}

                            updateForm={this.updateForm}
                        />

                    )
                }
            </>
        )
    }
}

export default FavoriteCocktail
