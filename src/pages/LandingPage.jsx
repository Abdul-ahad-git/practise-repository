import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Head from "../components/Head";
import { Route, Routes } from "react-router-dom";
import PreviewComponent from "./PreviewComponent";
import DefaultLayout from "../layouts/DefaultLayout";
import cards from "../constants/cards";
import { useSelector } from "react-redux";

export default function LandingPage({ }) {


    const searchTerm = useSelector(state => state.search.value);
    const [allCards, setAllCards] = useState([])

    useEffect(() => {

        let temp_cards = cards.filter((val) => {
            return String(val.title).toLowerCase().includes(searchTerm.toLowerCase()) || String(val.description).toLowerCase().includes(searchTerm.toLowerCase());
        });

        setAllCards(temp_cards);

    }, [cards, searchTerm])

    return (
        <DefaultLayout>

            <Head />

            <div className="zoom-in w-full flex py-10 flex-wrap gap-10 items-center justify-center gap-y-10 ">
                {
                    allCards.length > 0 ?
                        allCards.map((val) => {

                            const isValid = String(val.title).toLowerCase().includes(searchTerm.toLowerCase()) || String(val.description).toLowerCase().includes(searchTerm.toLowerCase());

                            if (isValid) {
                                return <Card {...val} />
                            }

                        })
                        :
                        <div className="fade-in">
                            <div className="gradient-sphere"></div>
                            <div className="gradient-sphere-2"></div>
                            <span className="zoom-in bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent font-display">No results found..</span>
                        </div>
                }

            </div>

        </DefaultLayout>
    )
}