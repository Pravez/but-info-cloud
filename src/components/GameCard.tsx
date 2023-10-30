import React from "react";
import {Card} from "react-bootstrap";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {IMAGE_UNAVAILABLE_PLACEHOLDER} from "../constants";
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import Game from "../model/Game";

interface GameCardProps {
    game: Game
}

export const GameCard: React.FC<GameCardProps> = ({game}) => {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{scale: 0, opacity: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 40,
            }}

        >
            <Card
                style={{width: '18rem'}}
                className="game-card"
            >
                <Card.Img variant="top"
                          src={!game.background_image ? IMAGE_UNAVAILABLE_PLACEHOLDER : game.background_image}/>
                <Card.Body
                    onClick={() => navigate(`/${game.id}`)}
                    style={{cursor: "pointer"}}
                >
                    <Card.Title
                        className="text-center mt-3"
                    >
                        {game.name || game.slug}
                    </Card.Title>
                </Card.Body>
            </Card>
        </motion.div>
    );
};