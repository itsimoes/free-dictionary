import React, { useState } from "react";
import "./style.scss";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Button } from "@mui/material";

const Search = () => {
  const [searchField, setSearchField] = useState("");
  const [data, setData] = useState("");
  const [word, setWord] = useState("");
  const [phonetic, setPhonetic] = useState("");
  const [audioLink, setAudioLink] = useState("");
  const [source, setSource] = useState("");
  const [meanings, setMeanings] = useState("");
  const audio = new Audio("");

  function dictionaryResearch() {
    console.log("success!"); //teste
    console.log(searchField); //teste
    const wordWrapper = document.getElementById("word-wrapper");
    const playButton = document.getElementById("play-button");
    const sourceLink = document.getElementById("source");

    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchField}`)
      // console.log(searchField);
      .then(function (result) {
        // const data = result.data;
        console.log(result);
        setData((prevData) => result.data);
        setWord(result.data[0].word);
        setPhonetic(result.data[0].phonetics[1].text);
        setAudioLink(result.data[0].phonetics[0].audio);
        setSource(result.data[0].sourceUrls);
        setMeanings(result.data[0].meanings);

        if (searchField !== "") {
          wordWrapper.style.display = "flex";
          sourceLink.style.display = "flex";
        } else {
          wordWrapper.style.display = "none";
          sourceLink.style.display = "none";
        }

        audio.src = result.data[0].phonetics[0].audio;

        if (result.data[0].phonetics[0].audio !== "") {
          playButton.style.display = "flex";
        } else {
          playButton.style.display = "none";
        }

        //testes
        console.log(data);
        console.log(word);
        console.log(phonetic);
        console.log(audioLink);
        console.log(audio);
        console.log(source);
        console.log(meanings);
        console.log(result.data[0].meanings.length);
      })
      .catch((err) => {
        wordWrapper.style.display = "none";
        sourceLink.style.display = "none";
        console.log(err);
      });
  }

  const handleChange = (e) => {
    e.preventDefault();
    setSearchField(e.target.value);
    console.log(e.target.value); //teste
  };

  const start = () => {
    audio.setAttribute("src", audioLink);
    audio.load();
    audio.play();
  };

  const meaningBlock = () => {
    var resp = [];
    var definitions = [];

    for (var i = 0; i < meanings.length; i++) {
      for (var j = 0; j < meanings[i].definitions.length; j++) {
        definitions[j] = (
          <li key={meanings[i].definitions[j].definition}>
            <div className="li-bullet">•</div>
            <p>{meanings[i].definitions[j].definition}</p>
          </li>
        );
      }
      console.log(meanings[i].definitions);

      resp[i] = (
        <>
          <h3 className="definitions" key={meanings[i].partOfSpeech}>
            <div>{meanings[i].partOfSpeech}</div>
            <hr className="divider" />
          </h3>
          <h4>Meanings</h4>
          <ul key={meanings[i].definitions}>{definitions}</ul>
        </>
      );
      definitions = [];
    }
    console.log(resp);
    return resp;
  };

  var meaningBlocks = meaningBlock();

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
          <button type="submit" className="search-button" >
            <FiSearch className="fiSearch-icon" />
          </button>
        </div>
      </form>
      <div id="word-wrapper">
        <div className="word-title-wrapper">
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
        <div>
          <div id="meanings">{meaningBlocks}</div>
        </div>
        <hr id="divider-2" />
        <h5 id="source">
          Source{" "}
          <a href={source} target="_blank" rel="noreferrer">
            {" "}
            {source}
          </a>
        </h5>
      </div>
    </>
  );
};

export default Search;
