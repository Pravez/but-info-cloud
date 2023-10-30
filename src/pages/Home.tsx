import React, {useContext, useEffect} from "react";
import {GameContext} from "../context/GameContext";
import NavComp from "../components/Navbar";
import {Col, Container, Row} from "react-bootstrap";
import {GameCard} from "../components/GameCard";
import Game from "../model/Game";
import {PaginationComp} from "../components/Pagination";


export default function Home() {
    const {games, gamesTotalPages} = useContext(GameContext);

    return (
        <>
            <NavComp/>
            <Container className='mt-4'>
                <Row md={3} xs={1} lg={4} className="g-4">
                    {games?.map((item: Game) =>
                        <Col key={item.id}>
                            <GameCard game={item}/>
                        </Col>
                    )}

                </Row>
                <div className="mt-5 d-flex justify-content-center">
                    <PaginationComp/>
                </div>
            </Container>

        </>
    )
}