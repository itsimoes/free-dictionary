import React, { useState } from "react";
import "./style.scss";
import { BiBook } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Search = () => {
  const [searchField, setSearchField] = useState("");
  const [word, setWord] = useState("");
  const [phonetic, setPhonetic] = useState("");
  const [audio, setAudio] = useState("");
  const [source, setSource] = useState("");
  const audio2 = new Audio("");

  function dictionaryResearch() {
    console.log("success!"); //teste
    console.log(searchField); //teste
    const wordWrapper = document.getElementById("word-wrapper");
    const playButton = document.getElementById("play-button");
    const sourceLink = document.getElementById("source");
    
    if (searchField !== "") {
      wordWrapper.style.display = "flex";
      sourceLink.style.display = "flex";
    } else {
      wordWrapper.style.display = "none";
      sourceLink.style.display = "none";
    }
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchField}`)
      // console.log(searchField);
      .then(function (result) {
        const data = result.data;

        setWord(data);
        setWord(result.data[0].word);
        setPhonetic(result.data[0].phonetics[1].text);
        setAudio(result.data[0].phonetics[0].audio);
        setSource(result.data[0].sourceUrls);

        audio2.src = result.data[0].phonetics[0].audio;
        if (result.data[0].phonetics[0].audio !== "") {
          playButton.style.display = "flex";
        } else {
          playButton.style.display = "none";
        }

        // if (result.data[0].sourceUrls !== "") {
        //   sourceLink.style.display = "flex";
        // } else {
        //   sourceLink.style.display = "none";
        // }

        //testes
        console.log(data);
        console.log(word);
        console.log(audio);
        console.log(audio2);
        console.log(source);
      })
      .catch((err) => console.log(err));
  }

  const handleChange = (e) => {
    e.preventDefault();
    setSearchField(e.target.value);
    console.log(e.target.value); //teste
  };

  const start = () => {
    audio2.setAttribute("src", audio);
    audio2.load();
    audio2.play();
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          dictionaryResearch();
          e.preventDefault();
        }}
      >
        <div className="search-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            onChange={handleChange}
          />
          <FiSearch className="fiSearch-icon" />
          <BiBook className="fiSearch-icon" />
        </div>
      </form>
      <div id="word-wrapper">
        <div className="word-result-wrapper">
          <div id="word">{word}</div>
          <div id="phonetic">{phonetic}</div>
        </div>
        <div className="audio-result-wrapper">
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton
              onClick={start}
              aria-label="play/pause"
              id="play-button"
            >
              <PlayArrowIcon
                sx={{ height: 38, width: 38, color: "blueviolet" }}
              />
            </IconButton>
          </Box>
        </div>
      </div>
      <div id="source">Source {source}</div>
    </>
  );
};

export default Search;
